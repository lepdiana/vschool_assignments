const express = require('express');
const app = express();


app.use(express.json())

app.use('/bounties', require('./routes/bountyRouter.js'))


app.listen(7000, () => {
    console.log("App is running on 7000")
})

