import React, { useState, useContext } from 'react'
import { CrudContext } from '../context/CrudProvider';

import '../styles/transactionForm.css'

function TransactionForm(props) {
    const { inputs, handleChange, handleSubmit } = props

    return (
        <div className='transactionFormContainer'>
            <form onSubmit={handleSubmit} className='transactionForm'>
                <input 
                    type='date' 
                    name='date'
                    value={inputs.date}
                    onChange={handleChange}
                    placeholder='Date'/>
                <input 
                    type='text' 
                    name='title'
                    value={inputs.title}
                    onChange={handleChange}
                    placeholder='Title'/>
                <input 
                    type='number' 
                    name='amount'
                    value={inputs.amount}
                    onChange={handleChange}
                    placeholder='Amount'/>
                <select id='userTransactionCategoryChoice' name='category' onChange={handleChange}>
                    <option value='select'>---</option>
                    <option value='Auto & Transport'>Auto & Transport</option>
                    <option value='Bills & Utilities'>Bills & Utilities</option>
                    <option value='Business Services'>Business Services</option>
                    <option value='Education'>Education</option>
                    <option value='Entertainment'>Entertainment</option>
                    <option value='Fees & Changes'>Fees & Changes</option>
                    <option value='Financial'>Financial</option>
                    <option value='Food & Dining'>Food & Dining</option>
                    <option value='Gifts & Donations'>Gifts & Donations</option>
                    <option value='Health & Fitness'>Health & Fitness</option>
                    <option value='Home'>Home</option>
                    <option value='Kids'>Kids</option>
                    <option value='Misc Expenses'>Misc Expenses</option>
                    <option value='Personal Care'>Personal Care</option>
                    <option value='Pets'>Pets</option>
                    <option value='Shopping'>Shopping</option>
                    <option value='Taxes'>Taxes</option>
                    <option value='Transfer'>Transfer</option>
                    <option value='Travel'>Travel</option>
                    <option value='Uncategorized'>Uncategorized</option>
                </select>
                <button className='transactionBtn'>Submit</button>
            </form>
        </div>
    )
}

export default TransactionForm