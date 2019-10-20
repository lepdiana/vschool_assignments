const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid/v4')
const Bounty = require('../models/bounty.js')




bountyRouter.route('/')
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, newBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
        })
        return res.send(newBounty)
    })



bountyRouter.route('/:_id')
    .get((req, res, next) => {
        Bounty.findOne({_id: req.params._id}, (err, bounty) => {
            if(err) {
                res.status(500)
                return next(err)
            } else if(!bounty) {
                res.status(404)
                return next(new Error("Bounty not found."))
            }
            return res.send(bounty)
        })
    })
    .delete((req, res, next) => {
        Bounty.findByIdAndRemove({_id: req.params._id}, (err, bounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.send("Successfully delete bounty")
        })
    })

    .put((req, res, next) => {
        Bounty.findByIdAndUpdate({_id: req.params._id}, req.body, { new: true }, (err, bounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(bounty)
        })

    })


module.exports = bountyRouter