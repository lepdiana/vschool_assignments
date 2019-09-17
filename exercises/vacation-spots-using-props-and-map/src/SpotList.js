import React from 'react'
import Spot from './Spot'

const SpotList = props => {
    const mappedVacationSpots = props.vacationSpots.map(spot => 
                                                    <Spot 
                                                    place={spot.place}
                                                    price={spot.price}
                                                    timeToGo={spot.timeToGo}
                                                    key={Math.random()}
                                                    />)
    return (
        <div>
            { mappedVacationSpots }
        </div>
    )
}

export default SpotList