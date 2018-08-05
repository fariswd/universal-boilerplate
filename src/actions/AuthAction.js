import Cookies from 'js-cookie'
import { fetchData } from './RequestAction'

export const login = (history) => {
  return dispatch => {
    dispatch({type: 'LOADING_AUTH', loading: true})
    fetchData()
    .then((res) => {
      dispatch({type: 'LOADING_AUTH', loading: false})
      if (!res.error) {
        Cookies.set('credential',
          { userToken: 'asd123', username: 'capung'},
          { expires: 1, path: '/dashboard' });
        dispatch({type: 'LOGIN', auth: true})
        history.push('/dashboard')
      } else {
        console.error(res)
      }
    })
  }
}

export const logout = () => {
  console.log(Cookies.getJSON('credential'))
  return {
    type: 'LOGIN',
    auth: false
  }
}