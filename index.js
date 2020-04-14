const express = require('express')
const showdata = require('./showdata')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

// app.get('/season/:number', (request, response) => {
//   const { number } = request.params

//   return response.render('season', { number })
// })

// app.get('/showtimes/:id', (request, response) => {
//   const movie = movieTimes.find((movie) => movie.id === parseInt(request.params.id))

//   return response.render('showtimes', { movie })
// })

app.get('/season/:id', (request, response) => {
  const { id } = request.params
  const season = showdata.seasons.find((season) => season.number === Number(id))

  return response.render('season', { season, showdata })
})

// app.get('/season/:number', (request, response) => {
//   const season = showdata.find((season) => season.number === Number(request.params.number))

//   return response.render('season', { season })
// })

app.all('*', (request, response) => {
  return response.sendStatus(404).send('Hello! Oh no!')
})

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8080.')
})
