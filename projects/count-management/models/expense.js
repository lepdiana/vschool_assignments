const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ExpenseSchema = new Schema({
    // category: {
    //     type: String,
    //     enum: ['Auto & Transport', 'Bills & Utilities', 'Business Services', 'Education', 'Entertainment', 'Fees & Changes', 'Financial', 'Food & Dining', 'Gifts & Donations', 'Health & Fitness', 'Home', 'Kids', 'Misc Expenses', 'Personal Care', 'Pets', 'Shopping', 'Taxes', 'Transfer', 'Travel', 'Uncategorized'],
    //     required: true
    // },
    // amount: {
    //     type: Number,
    //     required: true
    // },
    transaction: {
        type: Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Expense', ExpenseSchema)