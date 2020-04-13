const express = require('express')
const showdata = require('./showdata')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')
// app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/season/:number', (request, response) => {
  const { number } = request.params

  return response.render('season', { number })
})

app.all('*', (request, response) => {
  return response.sendStatus(404).send('Hello! Oh no!')
})

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8080.')
})
