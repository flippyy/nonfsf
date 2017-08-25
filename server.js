var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/static'));

app.listen(8080);
