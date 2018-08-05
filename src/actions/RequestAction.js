export const fetchData = (url = 'http://localhost:3000/api', opts = {}) => {
  const newOpts = {
    method: 'POST',
    headers: {},
    ...opts,
  }
  return fetch(url, newOpts)
    .then(response => response.json())
    .then(result => {
      return result
    })
    .catch(err => {
      return {
        error: true,
        exeption: err,
        config: newOpts
      }
    })
}

// export const fetchData = (url = 'http://localhost:3000/api', opts = {}) => {
//   const newOpts = {
//     method: 'POST',
//     headers: {},
//     ...opts,
//   }
//   return fetch(url, newOpts)
//     .then(response => response.json())
//     .then(result => {
//       return new Promise((resolve, reject) => {
//         resolve(result)
//       })
//     })
//     .catch(err => {
//       return new Promise((resolve, reject) => {
//         resolve({
//           error: true,
//           exeption: err,
//           config: newOpts
//         })
//       })
//     })
// }