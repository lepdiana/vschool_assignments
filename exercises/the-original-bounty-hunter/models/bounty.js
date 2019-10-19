const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    isLiving: Boolean,
    bountyAmount: Number,
    type: {
        type: String,
        enum: ['Sith', 'Jedi'],
        required: true 
    }

})
                            // Model Name, Model blueprint
module.exports = mongoose.model("Bounty", bountySchema)