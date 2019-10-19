const express = require('express');
const app = express();
const morgan = require('morgan') 
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/bountydb", 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    }, 
    () => console.log("Connected to the DB")
)


app.use('/bounties', require('./routes/bountyRouter.js'))
 

app.listen(7000, () => {
    console.log("App is running on 7000")
})

