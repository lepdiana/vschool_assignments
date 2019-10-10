import React from 'react'

const CampingForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <input 
                type='text' 
                name='title' 
                value={props.title} 
                placeholder='Title' 
                onChange={props.handleChange}/>
            <input 
                type='text' 
                name='description' 
                value={props.desription} 
                placeholder='Description' 
                onChange={props.handleChange}/>
            <input 
                type='text' 
                name='imgUrl' 
                value={props.imgUrl} 
                placeholder='Image Url' 
                onChange={props.handleChange}/>
            <button>Submit</button>
        </form>
    )

}

export default CampingForm