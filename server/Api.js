import express from 'express'

const Api = express.Router()

Api.post('/', (req, res) => {
  res.send({status: `${process.env.NODE_ENV}`})
})

export default Api