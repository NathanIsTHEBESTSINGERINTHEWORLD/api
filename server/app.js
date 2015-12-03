(function() {
    'use strict';

// Just adding a comment
    var express = require('express');
    var path = require('path');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');

    var routes = require('./routes/index');

    var app = express();

    app.use(bodyParser.json());

    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", process.env.WEB_CLIENT_HOSTNAME);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With,X-Powered-By,Content-Type");
        res.header("Access-Control-Allow-Credentials", "true");
        if (req.method === 'OPTIONS') {
            res.status(200).end();
        } else {
            next();
        }
    });

    app.use('/', routes);

    var server = app.listen(3001, function() {
        console.log('Express server listening on port ' + server.address().port);
    });

    module.exports = app;
}());
