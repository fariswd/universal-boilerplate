import express from 'express'

const Api = express.Router()

Api.post('/', (req, res) => {
  setTimeout(() => {
    res.send({status: `${process.env.NODE_ENV}`})
  }, 3000);
})

export default Api