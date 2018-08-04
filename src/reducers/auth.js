const initialState = {
  auth: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, auth: action.auth}
    default:
      return state
  }
}