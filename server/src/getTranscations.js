var unirest = require('unirest')

const authJWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJuYmYiOjE2OTYwMzIwMDAsImFwaV9zdWIiOiJhYzFjNzJhM2Q3MjI3ZDU0YTNlM2I3ZWU5NTVmZGZkYzQwMDU4OTNjNjQ4ZThjMjg3Y2NkYTFlYTI1NDk5N2FlMTcxNzIwMDAwMDAwMCIsInBsYyI6IjVkY2VjNzRhZTk3NzAxMGUwM2FkNjQ5NSIsImV4cCI6MTcxNzIwMDAwMCwiZGV2ZWxvcGVyX2lkIjoiYWMxYzcyYTNkNzIyN2Q1NGEzZTNiN2VlOTU1ZmRmZGM0MDA1ODkzYzY0OGU4YzI4N2NjZGExZWEyNTQ5OTdhZSJ9.dUaVik3R9f9AwIfnBZ0hgU75qX28_zVg1cOpKDSgoki5jXh12XU3G-blxMK01VzH_CcojYNRLRnQ8uYcCpwfemcxOfC4-9jh6FFiVGbP-yGQ1B6DnwJKGcjeO0CLgNv3acTRfDS1LcZqEqSHN0cVtWNs8_Et5t0uxApwchoYyoV2JipC9W63lcUGYcT4cmmyttpL3uIF9Tt-ThNGQZB5xDNNOrkad3vMuu2rZNJWMLevrUhUH30mMKgFkRPJ8tgL8o8VzctMcQ4Bzu-d_ym8_5YtWAvI2_Q1nSe9xyJHpazwzgoWpGvKr-UuVakIkbMX5AkpPx8MArmPvmNtB9dbxw'

var getTranscations = (id,callback) => {
    var req = unirest(
        'GET',
        `https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/${id}/transactions`
    )
    .headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authJWT}`,
        'version': '1.0',
    })
    .end(function (res) {
        if (res.error) throw new Error(res.error);
        var returned = []
        var transactions = JSON.parse(res.raw_body).Transactions;
        transactions.forEach(element => {
            returned.push({
                date: element.timestamp.split(' ')[0].replaceAll('-','/'),
                desp: element.merchant.name,
                amt: element.amount,
                crdt: element.creditDebitIndicator
            })
        });

        callback(returned)
    });
    
}

function getPast4Months() {
    const today = new Date();
    const pastMonths = [];

    for (let i = 0; i < 4; i++) {
        const year = today.getFullYear();
        const month = today.getMonth() + 1;

        const formattedDate = `${year}/${String(month).padStart(2, '0')}`;
        
        pastMonths.push(formattedDate);

        today.setMonth(today.getMonth() - 1);
    }

    return pastMonths;
}

var calculateMonthly = (id, callback) =>{
    var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ]
    getTranscations(id,(data)=>{
        const groupedData = data.reduce((result, item) => {
            const [year, month] = item.date.split('/');
            const monthYearKey = `${year}/${month}`;
            result[monthYearKey] = result[monthYearKey] || [];
            result[monthYearKey].push(item);
        
            return result;
        }, {});
        
        var result = {};
        getPast4Months().forEach((monthYearKey)=>{
            if(Object.keys(groupedData).includes(monthYearKey)){
                result[monthYearKey] = groupedData[monthYearKey];
            }else{
                result[monthYearKey] = []
            }
        })
        
        var tbr = []

        Object.keys(result).forEach((key)=>{
            months[parseInt(key.split('/')[1])]
            var past = 0
            result[key].forEach((element)=>{
                if(element.amt > 0) {
                    past = past + element.amt
                }
            })

            tbr.push(
                {
                    month : months[parseInt(key.split('/')[1])],
                    amount : past
                }
            )

        })

        callback({
            transactions : data,
            monthly : tbr
        })
    })
} 

module.exports = {
    getTranscations,
    calculateMonthly
}