const express = require('express')
const netIncomeRouter = express.Router()
const NetIncome = require('../models/netIncome.js')

netIncomeRouter.get('/', (req, res, next) => {
    NetIncome.find((err, netIncomes) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(netIncomes)
    })
})

netIncomeRouter.get('/user', (req, res, next) => {
    NetIncome.find({user: req.user._id}, (err, usersNetIncomes) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(usersNetIncomes)
    })
})

netIncomeRouter.post('/', (req, res, next) => {
    const newNetIncome = new NetIncome(req.body)
    newNetIncome.user = req.user._id 
    newNetIncome.save((err, savedNetIncome) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedNetIncome)
    })
})

netIncomeRouter.delete("/user/:_id", (req, res, next) => {
    NetIncome.findByIdAndRemove(req.params._id, (err, usersNetIncomes) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(usersNetIncomes)
    } )
 })
 
netIncomeRouter.put("/user/:_id", (req, res) => {
     NetIncome.findByIdAndUpdate(
         req.params._id, 
         req.body, 
         { new: true }, 
         (err, usersNetIncomes) => {
             if(err) {
                 res.status(500)
             }
             return res.send(usersNetIncomes)
         }
     )
 
 })


module.exports = netIncomeRouter