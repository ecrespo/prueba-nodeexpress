var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hola mundo desde node.js!!!')
})

app.listen(app.get('port'), function() {
  console.log("Node está corriendo en localhost:" + app.get('port'))
})
