export const login = () => {
  return {
    type: 'LOGIN',
    auth: true
  }
}

export const logout = () => {
  return {
    type: 'LOGIN',
    auth: false
  }
}