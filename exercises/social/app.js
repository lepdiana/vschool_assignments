var traveler = {
    firstName: "Sally",
    lastName: "Smith",
    age: 23,
    genderFemale: true,
    favoriteDestination: "Utah",
    favoriteActivity: "hiking",
    yearsExperienced: "4 years",
    funFact: function () {
        console.log(this.firstName + " " + this.lastName + " has been " + this.favoriteActivity + " for " + this.yearsExperienced + ".");
    },
    travelPartners: [
        {
            firstName: "Sarah",
            lastName: "Jensen",
            age: 24,
            gender: "female",
            favoriteDestination: {
                destinationName: "Colorado",
                favoriteActivity: "ziplining"
            }
        },
        {
            firstName: "Archie",
            lastName: "Green",
            age: 24,
            gender: "male",
            favoriteDestination: {
                destinationName: "Arizona",
                favoriteActivity: "boating"
            }
        },
        {
            firstName: "Bob",
            lastName: "Garcia",
            age: 23,
            gender: "male",
            favoriteDestination: {
                destinationName: "Idaho",
                favoriteActivity: "rock climbing"
            }
        },
        {
            firstName: "Lisa",
            lastName: "Turner",
            age: 24,
            gender: "female",
            favoriteDestination: {
                destinationName: "Wyoming",
                favoriteActivity: "kayaking"
            }
        }
    ]
}
traveler.funFact ();