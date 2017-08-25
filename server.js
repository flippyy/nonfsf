const express = require('express');

var app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/pages'));
app.listen(8080);
