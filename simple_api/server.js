var path = require('path')
var express = require('express')
var api = require('./api')
var bodyParser = require('body-parser')
var cors = require('cors')
var port = 3001

var app = express()

var corsOptions = {
  origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use('/api', api)

app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:' + port)
})
