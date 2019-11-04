const express = require('express')
const expenseRouter = express.Router()
const Expense = require('../models/expense.js')

expenseRouter.post('/', (req, res, next) => {
    const newExpense = new Expense(req.body)
    newExpense.user = req.user._id 
    newExpense.save((err, savedExpense) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedExpense)
    })
})

expenseRouter.get('/user', (req, res, next) => {
    Expense.find({user: req.user._id}, (err, usersExpenses) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(usersExpenses)
    })
})


module.exports = expenseRouter