var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);
