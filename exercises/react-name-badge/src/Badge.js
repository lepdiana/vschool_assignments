import React from 'react'

const Badge = (props) => {
    const { firstName, lastName, email, placeOfBirth, phone, favoriteFood, tellUsAboutYourself, peopleArray} = props
     

    // for (let i=1; i < peopleArray.length; i++) {
    //     peopleArray.filter(function(arr){
    //         return !(arr % 2);
    //     });
    // }
    
    //   console.log(checkedPeopleArray); // see - it hasn't changed!

    return (
        <div className="badgeContainer">
            <div className="badgeTitle" >
                style={{backgroundColor: peopleArray.length % 2 === 0 ? 'blue' : 'red'}}>
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