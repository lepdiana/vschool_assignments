import React, { useState, useContext } from 'react'
import { CrudContext } from '../context/CrudProvider';

import '../styles/netIncomeForm.css'

function NetIncomeForm(props) {
    const { inputs, handleChange, handleSubmit } = props

    return (
        <div className='netIncomeFormContainer'>
        <form onSubmit={handleSubmit} className='netIncomeForm'>
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
                    <button className='netIncomeBtn'>Submit</button>
                </form>
        </div>
    )
}

export default NetIncomeForm