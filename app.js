var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello jenkins at this time');
});
 
app.listen(process.env.PORT || 8888);
 
module.exports = app;
