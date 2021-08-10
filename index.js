/* eslint-disable eqeqeq */
const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))


app.get('/', (request, response) => {
  response.render('index', { showdata })
})

app.get('/seasons/:id', (request, response) => {
  const selectedSeason = showdata.seasons.filter(season => season.number == request.params.id)

  response.render('seasons', { selectedSeason })
})

app.all('*', (request, response) => {
  return response.status(404).send('Try again :(')
})

app.listen(1337, () => {
  console.log('Yes this is actually working :O') // eslint-disable-line no-console
})
