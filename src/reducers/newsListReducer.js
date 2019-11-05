const initState = {
  news: [],
  loading: false,
  error: null
}

export default function newsListReducer(state = initState, action) {
  if (action.type === 'GET_NEWS') {
    return { ...state, news: action.payload }
  }

  if (action.type === 'NEWS_CLEAR') {
    return initState
  }

  return state
}