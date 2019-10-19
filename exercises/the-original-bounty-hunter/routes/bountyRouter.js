const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid/v4')
const Bounty = require('../models/bounty.js')




bountyRouter.route('/')
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if (err) {
                res.status(500)
                return res.send(err)
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req, res) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, newBounty) => {
            if (err) {
                res.status(500)
            }
        })
        return res.send(newBounty)
    })



bountyRouter.route('/:_id')
    .get((req, res) => {
        Bounty.findById(req.params._id, (err, bounty) => {
            if(err) {
                res.status(500)
                return res.send("Database error.")
            } else if(!bounty) {
                res.status(404)
                return next(new Error("Bounty not found."))
            }
            return res.send(bounty)
        })
    })
    .delete((req, res) => {
        Bounty.findByIdAndRemove(req.params._id, (err, bounty) => {
            if (err) {
                res.status(500)
            }
            return res.send("Successfully delete bounty")
        })
    })

    .put((req, res) => {
        Bounty.findByIdAndUpdate(req.params._id, req.body, { new: true }, (err, bounty) => {
            if (err) {
                res.status(500)
            }
            return res.send(bounty)
        })

    })


module.exports = bountyRouter