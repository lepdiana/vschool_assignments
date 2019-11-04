import React, { useEffect, useContext, useState } from 'react'
import { CrudContext } from '../context/CrudProvider.js'
import NetIncomeForm from './NetIncomeForm.js'

function NetIncome(props) {
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
        props.editIncome(id, inputs)
        editToggler()
    }

    return(
        <div>
            { !isEditing ?
                <>
                    <p>{ props.year }</p>
                    <h3>{ props.month }</h3>
                    <p>{ props.income }</p>
                    <button onClick={ editToggler }>Edit</button>
                    <button onClick={ (e) => props.deleteIncome(props._id) }>Delete</button>
                </>
            :
                <>
                    <NetIncomeForm 
                        inputs={ inputs }
                        handleChange={ handleChange }
                        handleSubmit={ handleSubmit }/>
                    <button onClick={ editToggler }>Close</button>
                </> 
            }
        </div>
    )
}

export default NetIncome