const mongoose = require('mongoose')
const Schema = mongoose.Schema

const netIncomeSchema = new Schema ({
    month: {
        type: String,
        enum: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    reportedOn: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    } 
})

module.exports = mongoose.model('NetIncome', netIncomeSchema)