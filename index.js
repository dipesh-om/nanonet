const express = require('express')
const sendEmail = require('./email')

const app = express()
app.use(express.json())
app.get('/health', (req, res) => { res.send({ status : 'ok'}) } )

app.post('/email', (req, res) => { 
    sendEmail(req.body)
    res.send({ status : 'ok'}) 
})

app.listen(3332, function() {
    console.log('server started'); //Listening on port 8888
})


/*
    4 vendors, [ a, b, c, d no's/min ]
    
    1. max no of emails, we can send is (a+b+c+d) no's/min, if we are firing emails aysnc.

    We can start of queue, as in we can cummalate no of request globally in it.  
    We need to save as memory, how many emails have been triggerd from any of the vendor's at current n'th min. 
    Then, we can possibly pick any vendor's consumer goup with round roubin method, if that venodor has capcity to send the emails. 
    We can gift the vendor with email and increase the count in memory of tha vendor also.

    Assuming;

    if have n messages in the queue
        T sec latency, A per-min rate for a vendor. 60*a message/sec

        let no of consumer would be x, if we equate reqired no of messages send = consumer sending max capacity.  n/x = A*t/ 60 i.e. x = 60*n/a*t

*/

