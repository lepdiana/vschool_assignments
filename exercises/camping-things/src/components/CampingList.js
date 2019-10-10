import React from 'react'
import CampingThing from './CampingThing.js'

const CampingList = props => {
    console.log(props)
    const mappedCampingList = props.campingThings.map(thing => <CampingThing handleDelete={props.handleDelete} {...thing} key={thing._id}/>)
    return(
        <div>
            { mappedCampingList }
        </div>
    )
}

export default CampingList