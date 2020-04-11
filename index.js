const express = require('express')
const showdata = require('./showdata')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index')
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(8080, () => {
  console.log('Listening on port 8080.')