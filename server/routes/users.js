var express = require('express');
var sqlite3 = require('sqlite3')
var router = express.Router();
var jwt = require('jsonwebtoken')
var {createFakeData} = require('../src/fakeregister')

var secretKey = "collin"

const db = new sqlite3.Database('data/db.sqlite3', (err) => {
  if (err) {
      return console.error(err.message);
  }
});

// Register route
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    console.log(username,password)
    db.get('SELECT username FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (row) {
            return res.status(400).json({ message: 'User already exists' });
        }

        db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(err) {
            if (err) {
                return res.status(500).json({ message: 'Database error' });
            }
            createFakeData(username,db)
            res.status(200).json({ message: 'User registered successfully' });
        });
    });
});

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username,password)

    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (!row) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create a JWT token
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

        res.status(200).json({ message: 'Logged in successfully', token });
    });
});

module.exports = router;
