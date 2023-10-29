var unirest = require('unirest');
const { faker } = require('@faker-js/faker');
const e = require('express');

const authJWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJuYmYiOjE2OTYwMzIwMDAsImFwaV9zdWIiOiJhYzFjNzJhM2Q3MjI3ZDU0YTNlM2I3ZWU5NTVmZGZkYzQwMDU4OTNjNjQ4ZThjMjg3Y2NkYTFlYTI1NDk5N2FlMTcxNzIwMDAwMDAwMCIsInBsYyI6IjVkY2VjNzRhZTk3NzAxMGUwM2FkNjQ5NSIsImV4cCI6MTcxNzIwMDAwMCwiZGV2ZWxvcGVyX2lkIjoiYWMxYzcyYTNkNzIyN2Q1NGEzZTNiN2VlOTU1ZmRmZGM0MDA1ODkzYzY0OGU4YzI4N2NjZGExZWEyNTQ5OTdhZSJ9.dUaVik3R9f9AwIfnBZ0hgU75qX28_zVg1cOpKDSgoki5jXh12XU3G-blxMK01VzH_CcojYNRLRnQ8uYcCpwfemcxOfC4-9jh6FFiVGbP-yGQ1B6DnwJKGcjeO0CLgNv3acTRfDS1LcZqEqSHN0cVtWNs8_Et5t0uxApwchoYyoV2JipC9W63lcUGYcT4cmmyttpL3uIF9Tt-ThNGQZB5xDNNOrkad3vMuu2rZNJWMLevrUhUH30mMKgFkRPJ8tgL8o8VzctMcQ4Bzu-d_ym8_5YtWAvI2_Q1nSe9xyJHpazwzgoWpGvKr-UuVakIkbMX5AkpPx8MArmPvmNtB9dbxw'
// const authJWT = '.eyJuYmYiOjE2OTYwMzIwMDAsImFwaV9zdWIiOiJhYzFjNzJhM2Q3MjI3ZDU0YTNlM2I3ZWU5NTVmZGZkYzQwMDU4OTNjNjQ4ZThjMjg3Y2NkYTFlYTI1NDk5N2FlMTcxNzIwMDAwMDAwMCIsInBsYyI6IjVkY2VjNzRhZTk3NzAxMGUwM2FkNjQ5NSIsImV4cCI6MTcxNzIwMDAwMCwiZGV2ZWxvcGVyX2lkIjoiYWMxYzcyYTNkNzIyN2Q1NGEzZTNiN2VlOTU1ZmRmZGM0MDA1ODkzYzY0OGU4YzI4N2NjZGExZWEyNTQ5OTdhZSJ9.dUaVik3R9f9AwIfnBZ0hgU75qX28_zVg1cOpKDSgoki5jXh12XU3G-blxMK01VzH_CcojYNRLRnQ8uYcCpwfemcxOfC4-9jh6FFiVGbP-yGQ1B6DnwJKGcjeO0CLgNv3acTRfDS1LcZqEqSHN0cVtWNs8_Et5t0uxApwchoYyoV2JipC9W63lcUGYcT4cmmyttpL3uIF9Tt-ThNGQZB5xDNNOrkad3vMuu2rZNJWMLevrUhUH30mMKgFkRPJ8tgL8o8VzctMcQ4Bzu-d_ym8_5YtWAvI2_Q1nSe9xyJHpazwzgoWpGvKr-UuVakIkbMX5AkpPx8MArmPvmNtB9dbxw'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

var createRandomAccount = (callback) => {
    var numTransactions = getRandomInt(5,25)

    var req = unirest('POST', 'https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts/create')
    .headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authJWT}`,
        'version': '1.0',
    })
    .send(`{\n\t"quantity": ${1},\n\t"numTransactions": ${numTransactions}\n}`)
    .end(function (res) {
        if (res.error) throw new Error(res.error);
        callback(JSON.parse(res.raw_body));
    });
}
var calculateLevel = (cscore) => {
  if(cscore < 350){
    return 1
  }else if(cscore < 450){
    return 2
  }else if(cscore < 550){
    return 3
  }else if(cscore < 650){
    return 4
  }else{
    return 5
  }
}
createFakeData = (username,db) => {
    const insertUserSQL = `
      INSERT INTO data (username,accountId, full_name, capital_coin, credit_score, level, experience)
      VALUES (?, ?, ?, ?, ?, ?, ?)`;

    createRandomAccount((data)=>{
        var account = data.Accounts[0]
        var cc = getRandomInt(1000,1500)
        var cscore = account.creditScore
        const UserData = [
            username,
            account.accountId,
            account.firstname,
            cc,
            parseInt(cscore),
            calculateLevel(cscore),
            0
        ]
        console.log(UserData)
        db.run(insertUserSQL, UserData, (err) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log('Sample user inserted.');
          }
        });
    })
}

module.exports = {
  createFakeData
}