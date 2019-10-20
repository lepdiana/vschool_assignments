const express = require('express')
const inventoryRouter = express.Router()
const InventoryModel = require('../models/inventory.js')


inventoryRouter.get('/', (req, res, next) => {
    InventoryModel.find((err, inventories) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventories)
    })
})


inventoryRouter.post('/', (req, res) => {
    const newInventory = new InventoryModel(req.body)
    newInventory.save((err, newInventory) => {
        if(err) {
            res.status(500)
        }
        return res.status(201).send(newInventory)
    })
})


inventoryRouter.get('/:_id', (req, res) => {
    InventoryModel.findById(req.params._id, (err, inventory) => {
        if(err) {
            res.status(500)
        } else if (!inventory) {
            res.status(404)
            return next(new Error('Inventory not found.'))
        }
        return res.status(200).send(inventory)
    })
})

inventoryRouter.delete('/:_id', (req, res) => {
    InventoryModel.findByIdAndRemove(req.params._id, (err, inventory) => {
        if(err) {
            res.status(500)
            return res.send('Error deleting inventory')
        }
        return res.send('Inventory successfully deleted.')
    })
})

inventoryRouter.put('/:_id', (req, res) => {
    InventoryModel.findOneAndUpdate(req.params._id, req.body, { new: true }, (err, inventory) => {
        if(err) {
            res.status(500)
        }
        return res.send(inventory)
    })
})

module.exports = inventoryRouter