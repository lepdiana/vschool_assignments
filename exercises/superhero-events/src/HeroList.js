import React from 'react'
import data from './data.json'
import SuperHero from './SuperHero.js'

const HeroList = props => {

    const mappedHeros = data.map((superHero, i) => { return (
                                        <SuperHero 
                                            name={ superHero.name }
                                            show={ superHero.show }
                                            catchPhrase={ superHero.catchPhrase }
                                            imageName={ superHero.imageName }
                                            alert={ props.alert }
                                            key={ i }
                                        />
    )})

    
    return (
        <div>
            { mappedHeros }
        </div>
    )
}

export default HeroList