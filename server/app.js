const express = require('express');
const path = require('path');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const indexRouter = require('./routes/index');
const catalogRouter = require('./routes/catalog');
const {startServer} = require("./database/connection");
const cors = require('cors');

const app = express();
app.use(cors());

startServer();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression()); // Compress all routes

app.use('/', indexRouter);
app.use('/catalog', catalogRouter);  // Add catalog routes to middleware chain.

// catch 404 and forward to error handler
app.use(function(err,req, res, next) {
    console.error(err);
    res.send(err);
});


app.listen(3001, async () => {
    console.log('listening on port 3001');
});

