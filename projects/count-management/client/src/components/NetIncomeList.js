import React, { useEffect, useContext, useState } from 'react'
import { CrudContext } from '../context/CrudProvider.js'
import NetIncome from './NetIncome.js'

function NetIncomeList() {
    const { userNetIncomes, getUserNetIncomes, addNetIncome, deleteIncome, editIncome } = useContext(CrudContext)


    useEffect(() => {
        getUserNetIncomes()
    }, [])

    const initInputs = { year: '', month: '', income: '' }
    const [inputs, setInputs] = useState(initInputs)

    const mappedUserNetIncomes = userNetIncomes.map(income => 
        <NetIncome 
            editIncome={ editIncome }
            deleteIncome={ deleteIncome }
            { ...income }
            key={ income._id }/>
    )

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addNetIncome(inputs)
        setInputs(initInputs)
    }

    return(
        <div>
            <div style={{border: '1px solid black'}}>
                <h1>Add your monthly income:</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='number' 
                        name='year'
                        value={inputs.year}
                        onChange={handleChange}
                        placeholder='Year'/>
                    <select id='userIncomeMonthChoice' name='month' onChange={handleChange}>
                        <option value='select'>---</option>
                        <option value='January'>January</option>
                        <option value='Febuary'>February</option>
                        <option value='March'>March</option>
                        <option value='April'>April</option>
                        <option value='May'>May</option>
                        <option value='June'>June</option>
                        <option value='July'>July</option>
                        <option value='August'>August</option>
                        <option value='September'>September</option>
                        <option value='October'>October</option>
                        <option value='November'>November</option>
                        <option value='December'>December</option>
                    </select>
                    <input 
                        type='number' 
                        name='income'
                        value={inputs.income}
                        onChange={handleChange}
                        placeholder='Income'/>
                    <button>Submit</button>
                </form>
            </div>
            { mappedUserNetIncomes }
        </div>
    )
}

export default NetIncomeList