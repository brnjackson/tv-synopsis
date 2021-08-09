const express = require('express')
const showData = require('./showdata')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index', { showData })
})

app.all('*', (request, response) => {
  return response.status(404).send('Sorry hun, theres nothing here')
})

app.listen(1337, () => {
  console.log('Yes this is actually working :O') // eslint-disable-line no-console
})