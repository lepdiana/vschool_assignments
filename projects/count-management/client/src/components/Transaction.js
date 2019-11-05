import React, { useEffect, useContext, useState } from 'react'
import { CrudContext } from '../context/CrudProvider.js'
import TransactionForm from './TransactionForm.js'

import '../styles/transaction.css'

function Transaction(props) {
    const [isEditing, setIsEditingState] = useState(false)

    const editToggler = () => {
        setIsEditingState(prevIsEditingState => (!prevIsEditingState))
    }

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
        const id = props._id
        props.editTransaction(id, inputs)
        editToggler()
    }


    return(
        <div className='transactionContainer'>
            { !isEditing ?
                <>
                    <p className='transactionText'>{ props.date }</p>
                    <h3 className='transactionTitle'>{ props.title }</h3>
                    <p className='transactionText'>{ props.amount }</p>
                    <p className='transactionText'>{ props.category }</p>
                    <button onClick={ editToggler } className='transactionBtn'>Edit</button>
                    <button onClick={ (e) => props.deleteTransaction(props._id) } className='transactionBtn'>Delete</button>
                </>
            :
                <>
                    <TransactionForm 
                        inputs={ inputs }
                        handleChange={ handleChange }
                        handleSubmit={ handleSubmit }/>
                    <button onClick={ editToggler } className='transactionBtn'>Close</button>
                </> 
            }
        </div>
    )
}

export default Transaction