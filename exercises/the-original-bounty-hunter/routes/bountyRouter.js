const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid/v4')

const bounties = [
    {
        firstName: "Darth",
        lastName: "Vader",
        isLiving: true,
        bountyAmount: 431432,
        type: 'Sith',
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Sidious",
        isLiving: true,
        bountyAmount: 43432,
        type: 'Sith',
        _id: uuid()
    },
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        isLiving: true,
        bountyAmount: 434832,
        type: 'Jedi',
        _id: uuid()
    },
    {
        firstName: "Mace",
        lastName: "Windu",
        isLiving: true,
        bountyAmount: 44832,
        type: 'Jedi',
        _id: uuid()
    }
]


bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(newBounty)
    })



bountyRouter.route('/:_id')
    .delete((req, res) => {
        const bountyId = req.params._id
        const bountyIndexToDelete = bounties.findIndex(bounty => {
            bounty._id === bountyId
        })
        bounties.splice(bountyIndexToDelete, 1)
        res.send(`Successfully deleted the bounty`)
    })

    .put((req, res) => {
        // you will need to grab the id
        const bountyId = req.params._id
        // you will need to find the id
        const outdatedBounty = bounties.find(bounty => bounty._id === bountyId)
        // you will need to find the index of the outdated item
        const outdatedBountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        //you will need to update the item
        const updatedBounty = Object.assign(outdatedBounty, req.body)
        //you will need to place the updated item into the bounties array
        bounties.splice(outdatedBounty, 1, updatedBounty)
        // then you will need to send it 
        res.send(updatedBounty)
    })


module.exports = bountyRouter