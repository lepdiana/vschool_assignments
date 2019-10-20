const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan("dev"))

mongoose.connect('mongodb://localhost:27017/inventorydb', 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    console.log('Connected to DB')
)

app.use('/inventories', require('./routes/inventory.js'))

app.listen('7000', () => {
    console.log("Server is running on 7000")
})