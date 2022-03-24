require('./dbconfig/mongodb')
const express = require('express');
const app = express(),
      bodyParser = require("body-parser");

const tokenController = require('./controllers/token.controller')

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.use('/api/tokens',tokenController)

const port=process.env.PORT || 6000;
app.listen(port,
    console.log(`Listening on port succesfully ${port}`)
);