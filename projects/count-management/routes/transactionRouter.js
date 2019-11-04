const express = require('express')
const transactionRouter = express.Router()
const Transaction = require('../models/transaction.js')

transactionRouter.post('/', (req, res, next) => {
    const newTransaction = new Transaction(req.body)
    newTransaction.user = req.user._id 
    newTransaction.save((err, savedTransaction) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTransaction)
    })
})

transactionRouter.get('/user', (req, res, next) => {
    Transaction.find({user: req.user._id}, (err, usersTransactions) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(usersTransactions)
    })
})

transactionRouter.delete("/user/:_id", (req, res, next) => {
   Transaction.findByIdAndRemove(req.params._id, (err, usersTransactions) => {
       if(err){
           res.status(500)
           return next(err)
       }
       return res.send(usersTransactions)
   } )
})

transactionRouter.put("/user/:_id", (req, res) => {
    Transaction.findByIdAndUpdate(
        req.params._id, 
        req.body, 
        { new: true }, 
        (err, usersTransactions) => {
            if(err) {
                res.status(500)
            }
            return res.send(usersTransactions)
        }
    )

})


module.exports = transactionRouter