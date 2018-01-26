
const express = require('express'),
    bodyParser = require('body-parser');

const fetch = require('node-fetch');

const app = express();

const chekcer = require("./checker.js");

chekcer("https://esame26gennaio18.herokuapp.com/count", {var :1 , let : 2});

app.use(bodyParser.json());


app.set('port', (process.env.PORT || 5000));




// a useless function that returns a fixed object. you can use it, if you want, for testing purposes
app.get('/count',function (req, res) {
    res.json({count: 3})
})

app.post('/check',function (req, res) {
    res.json(checker(req.body.url,req.body.invocationParameters,req.body.expectedResultData,req.body.expectedResultStatus))
})


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
