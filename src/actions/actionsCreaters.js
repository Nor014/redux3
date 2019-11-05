export function changeInputValue(name, value) {
  return {
    type: 'CHANGE_INPUT_VALUE',
    payload: { name, value }
  }
}

export function getProfileData(obj) {
  return {
    type: 'GET_PROFILE',
    payload: obj
  }
}

export function getNewsData(news) {
  return {
    type: 'GET_NEWS',
    payload: news
  }
}

export function authentication(url, data) {
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) { throw new Error(res.statusText) }
        return res.json()
      })
      .then(data => { sessionStorage.setItem('token', data.token) })
      .then(() => {
        dispatch(getProfile())
        dispatch(getNews())
        document.location.href = '/news';
      })
      .catch(e => console.log(e))
  }
}

export function getProfile() {
  return (dispatch) => {
    fetch('http://localhost:7070/private/me', {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => { dispatch(getProfileData(data)) })
  }
}

export function getNews() {
  return (dispatch) => {
    fetch('http://localhost:7070/private/news', {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => dispatch(getNewsData(data)))
  }
}
