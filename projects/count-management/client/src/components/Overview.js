import React, { useContext, useEffect, useState } from 'react'
import { CrudContext } from '../context/CrudProvider.js'

import '../styles/overview.css'

function Overview() {
    const { userNetIncomes, getUserNetIncomes, userTransactions, getUserTransactions  } = useContext(CrudContext)

    useEffect(() => {
        getUserNetIncomes()
        getUserTransactions()
    }, [])

    const initInputs = { year: '', month: '', income: '' }
    const [inputs, setInputs] = useState(initInputs)
    const initTransaction = { date: '', title: '', amount: '', category:'' }
    const [transaction, setTransaction] = useState(initTransaction)

    let netIncomeTotal = 0
    for (let i=0; i < userNetIncomes.length; i++) {
        netIncomeTotal = netIncomeTotal += userNetIncomes[i].income
    }

    let transactionTotal = 0
    for (let i=0; i < userTransactions.length; i++) {
        transactionTotal = transactionTotal += userTransactions[i].amount
    }

    let overallTotal = netIncomeTotal - transactionTotal

    return (
        <div className='overviewContainer'>
            <h3 className='overviewText'>Net Income: { netIncomeTotal.toFixed(2) }</h3>
            <h3 className='overviewText'>Expense: { transactionTotal.toFixed(2) }</h3>
            <h3 className='overviewText'>Total: { overallTotal.toFixed(2) }</h3>
        </div>
    )
}

export default Overview