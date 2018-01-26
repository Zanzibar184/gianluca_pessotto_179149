
const express = require('express'),
    bodyParser = require('body-parser');

const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json());


app.set('port', (process.env.PORT || 5000));

// a useless function that returns a fixed object. you can use it, if you want, for testing purposes
app.get('/count',function (req, res) {
    res.json({count: 5})
})

app.get('/prova',function (req, res) {
  fetch('localhost:5000/count')
  .then(function(response){
      return response.json();
  })
  .then(function(json){
        res.json(json);
  });

})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
