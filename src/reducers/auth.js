const initialState = {
  auth: false,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, auth: action.auth}
    case 'LOADING_AUTH':
      return {...state, loading: action.loading}
    default:
      return state
  }
}