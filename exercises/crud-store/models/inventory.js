const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    item: {
        type: String,
        required: true
    },
    price: Number
})

module.exports = mongoose.model('InventoryModel', inventorySchema)