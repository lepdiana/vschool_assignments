// import React, { useEffect, useContext, useState } from 'react'
// import { CrudContext } from '../context/CrudProvider.js'

// function Expense() {
//     const { userExpenses, getUserExpenses, addExpense } = useContext(CrudContext)

//     useEffect(() => {
//         getUserExpenses()
//     }, [])

//     const mappedUserExpenses = userExpenses.map(expense => 
//         <div key={expense._id}>
//             <p>{expense.category}: {expense.amount}</p>
//         </div>
//     )

//     const initInputs = { category: '', amount: '' }
//     const [inputs, setInputs] = useState(initInputs)

//     const handleChange = e => {
//         const { name, value } = e.target
//         setInputs(prevInputs => ({
//             ...prevInputs,
//             [name]: value
//         }))
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         addExpense(inputs)
//         setInputs(initInputs)
//     }

//     return (
//         <div>
//             <h3>Add your transactions:</h3>
//             <form onSubmit={handleSubmit}>
//                 <select id='userExpenseCategoryChoice' name='category' onChange={handleChange}>
//                     <option value='select'>---</option>
//                     <option value='Auto & Transport'>Auto & Transport</option>
//                     <option value='Bills & Utilities'>Bills & Utilities</option>
//                     <option value='Business Services'>Business Services</option>
//                     <option value='Education'>Education</option>
//                     <option value='Entertainment'>Entertainment</option>
//                     <option value='Fees & Changes'>Fees & Changes</option>
//                     <option value='Financial'>Financial</option>
//                     <option value='Food & Dining'>Food & Dining</option>
//                     <option value='Gifts & Donations'>Gifts & Donations</option>
//                     <option value='Health & Fitness'>Health & Fitness</option>
//                     <option value='Home'>Home</option>
//                     <option value='Kids'>Kids</option>
//                     <option value='Misc Expenses'>Misc Expenses</option>
//                     <option value='Personal Care'>Personal Care</option>
//                     <option value='Pets'>Pets</option>
//                     <option value='Shopping'>Shopping</option>
//                     <option value='Taxes'>Taxes</option>
//                     <option value='Transfer'>Transfer</option>
//                     <option value='Travel'>Travel</option>
//                     <option value='Uncategorized'>Uncategorized</option>
//                 </select>
//                 <input 
//                     type='number' 
//                     name='amount'
//                     value={inputs.amount}
//                     onChange={handleChange}
//                     placeholder='Amount'/>
//                 <button>Submit</button>
//             </form>
//             <h1>Total Expenses:</h1>
//             { mappedUserExpenses }
//         </div>
//     )
// }

// export default Expense

import React, { useEffect, useContext, useState } from 'react'
import { CrudContext } from '../context/CrudProvider.js'

function Expense() {
    const { userTransactions, getUserTransactions, addTransaction } = useContext(CrudContext)

    useEffect(() => {
        getUserTransactions()
    }, [])

    const mappedUserTransaction = userTransactions.map(transaction => 
        <div key={transaction._id}>
            <h3>{transaction.category}</h3>
            <p>{transaction.amount}</p>
        </div>
    )

    const initInputs = { date: '', title: '', amount: '', category:'' }
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTransaction(inputs)
        setInputs(initInputs)
    }

    return(
        <div>
            <h1>Expenses:</h1>
            { mappedUserTransaction }
        </div>
    )
}

export default Expense