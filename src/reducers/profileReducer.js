const initState = {
  profile: {}
}

export default function profileReducer(state = initState, action) {
  if (action.type === 'GET_PROFILE') {
    return { ...state, profile: action.payload }
  }

  if (action.type === 'PROFILE_CLEAR') {
    return initState
  }

  return state
}