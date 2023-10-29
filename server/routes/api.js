var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var sqlite3 = require('sqlite3');

var { getTranscations, calculateMonthly} = require('../src/getTranscations')

var secretKey = "collin"

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }
        req.userId = decoded.username;
        next();
    });
};

var calculateCreditLimit = (level) => {
    if(level == 1){
        return 500
    }else if(level == 2){
        return 1000
    }else if(level == 3){
        return 2000
    }else if(level == 4){
        return 4000
    }else {
        return 8000
    }
}
/* GET home page. */
router.get('/dashboard', verifyToken, function(req, res, next) {
    const db = new sqlite3.Database('data/db.sqlite3', (err) => {
        if (err) {
            return console.error(err.message);
        }
    });
    
    // SQL query to retrieve accountId based on username
    const query = `
      SELECT accountId,credit_score,capital_coin,level
      FROM data
      WHERE username = ?`;
    
    db.get(query, [req.userId], (err, row) => {
      if (err) {
        console.error(err.message);
      } else {
        if (row) {
          var accountId = row.accountId
          var cscore = row.credit_score
          var cc = row.capital_coin
          var level = row.level
          calculateMonthly( accountId , (data)=>{
            
            var resp = {
                accountId:accountId,
                cscore:cscore,
                cc:cc,
                level:level,
                limit:calculateCreditLimit(level),
                monthly: data.monthly,
                transactions : data.transactions
            }

            res.status(200).send(resp)
          })
        } else {
        }
      }
    });
});

module.exports = router;