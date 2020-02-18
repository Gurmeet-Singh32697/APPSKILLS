const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./routes');
app.use(routes);

app.listen(process.env.PORT || 3000, function() {
    console.log("Server has started at port number 3000.");
  });