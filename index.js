const express = require('express')
const showData = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showData })
})

app.get('/singleSeason/:id', (request, response) => {
  const { id } = request.params
  const season = showData.seasons.find((season) => season.number === parseInt(id))

  return response.render('singleSeason', { season })
})

app.all('*', (request, response) => {
  return response.status(404).send('404 Page Not Found')
})

app.listen(1337, () => {
  console.log('listening on port 1337...') // eslint-disable-line no-console
})
