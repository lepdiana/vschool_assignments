import React, { useEffect, useContext, useState } from 'react'
import { CrudContext } from '../context/CrudProvider.js'
import NetIncomeForm from './NetIncomeForm.js'

import '../styles/netIncome.css'

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
        <div className='netIncomeContainer'>
            { !isEditing ?
                <>
                    <p className='netIncomeYear'>{ props.year }</p>
                    <h3 className='netIncomeMonth'>{ props.month }</h3>
                    <p className='netIncomeIncome'>{ props.income }</p>
                    <button onClick={ editToggler } className='netIncomeBtn'>Edit</button>
                    <button onClick={ (e) => props.deleteIncome(props._id) } className='netIncomeBtn'>Delete</button>
                </>
            :
                <>
                    <NetIncomeForm 
                        inputs={ inputs }
                        handleChange={ handleChange }
                        handleSubmit={ handleSubmit }/>
                    <button onClick={ editToggler } className='netIncomeBtn'>Close</button>
                </> 
            }
        </div>
    )
}

export default NetIncome