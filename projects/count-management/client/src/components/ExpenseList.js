import React, { useEffect, useContext, useState } from 'react'
import { CrudContext } from '../context/CrudProvider.js'
import Expense from './Expense.js'

import '../styles/expenseList.css'

function TransactionList() {
    const { userTransactions, getUserTransactions, editTransaction, deleteTransaction } = useContext(CrudContext)

    useEffect(() => {
        getUserTransactions()
    }, [])

    //reduce to an array of objects without duplicate categories
        // const reducedUserTransactions

    const mappedUserTransactions = userTransactions.map(transaction => 
        <Expense 
            editTransaction={ editTransaction }
            deleteTransaction={ deleteTransaction }
            { ...transaction }
            key={ transaction._id }/>
    )

    return(
        <div className='expenseListContainer'>
            { mappedUserTransactions.reverse() }
        </div>
    )
}

export default TransactionList