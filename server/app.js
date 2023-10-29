var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sqlite3 = require('sqlite3')
const bodyParser = require('body-parser');
const cors = require('cors'); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

app.disable('etag');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors())

const db = new sqlite3.Database('data/db.sqlite3', (err) => {
    if (err) {
        return console.error(err.message);
    }
});

// Create users table
db.run('CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Users table created.');
});

db.run(`
    CREATE TABLE IF NOT EXISTS data (
    username TEXT PRIMARY KEY,
    accountId INTEGER,
    full_name TEXT,
    capital_coin INTEGER,
    credit_score INTEGER,
    level INTEGER,
    experience INTEGER
)`, (err) => {
    if (err) {
    console.error(err.message);
    } else {
    console.log('Data table created');
    }
});
  

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

module.exports = app;
