const initState = {
  login: '',
  password: ''
}

export default function authenticationReducer(state = initState, action) {
  if (action.type === 'CHANGE_INPUT_VALUE') {
    const {name, value} = action.payload;
    return {...state, [name]: value}
  }

  return state
}

