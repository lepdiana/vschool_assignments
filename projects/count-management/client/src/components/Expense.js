import React, { useContext, useState } from 'react'
import { CrudContext } from '../context/CrudProvider.js'

import '../styles/expense.css'

function Expense(props) {
    const { userTransactions } = useContext(CrudContext)

    return(
        <div className='expenseContainer'>
            <h3 className='expenseCategory'>{ props.category }</h3>
            <p className='expenseAmount'>{ props.amount }</p>
        </div>
    )
}

export default Expense