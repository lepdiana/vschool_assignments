import React from 'react'

const Badge = props => {
    const { firstName, lastName, email, placeOfBirth, phone, favoriteFood, tellUsAboutYourself } = props
    // console.log(props)
    return (
        <div className="badgeContainer">
            <div className="badgeTitle">
                <h1 className="badgeTitleText">Badge:</h1>
            </div>
            <div className="badgeSixInputsContainer">
                <div className="badgeSixInputs">
                    <p className="badgeSix">Name: {firstName} {lastName}</p>
                    <p className="badgeSix">Phone: {phone}</p>
                    <p className="badgeSix">Place of birth: {placeOfBirth}</p>
                    <p className="badgeSix">Favorite food: {favoriteFood}</p>
                    <p className="badgeSix">Email: {email}</p>
                </div>
                <div className="badgeoneInput">
                    <p className="badgeSix">{tellUsAboutYourself}</p>
                </div>
            </div>
        </div>
    )
}

export default Badge