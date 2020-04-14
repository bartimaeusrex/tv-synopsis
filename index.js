const express = require('express')
const showdata = require('./showdata')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/season/:id', (request, response) => {
  const { id } = request.params
  const season = showdata.seasons.find((season) => season.number === Number(id))

  return response.render('season', { season, showdata })
})

app.all('*', (request, response) => {
  return response.sendStatus(404).send('Oh no! Not found!')
})

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8080.')
})
