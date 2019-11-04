import React, { useEffect, useContext, useState } from 'react'
import { CrudContext } from '../context/CrudProvider.js'
import TransactionForm from './TransactionForm.js'

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
        <div>
            { !isEditing ?
                <>
                    <p>{ props.date }</p>
                    <h3>{ props.title }</h3>
                    <p>{ props.amount }</p>
                    <p>{ props.category }</p>
                    <button onClick={ editToggler }>Edit</button>
                    <button onClick={ (e) => props.deleteTransaction(props._id) }>Delete</button>
                </>
            :
                <>
                    <TransactionForm 
                        inputs={ inputs }
                        handleChange={ handleChange }
                        handleSubmit={ handleSubmit }/>
                    <button onClick={ editToggler }>Close</button>
                </> 
            }
        </div>
    )
}

export default Transaction