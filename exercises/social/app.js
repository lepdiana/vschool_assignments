var traveler = {
    firstName: "Sally",
    lastName: "Smith",
    age: 23,
    genderFemale: true,
    favoriteDestination: "Utah",
    favoriteActivity: "hiking",
    yearsExperienced: "4 years",
    funFact: function () {
        return this.firstName + " " + this.lastName + " has been " + this.favoriteActivity + " for " + this.yearsExperienced + ".";
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

// console.log(traveler.funFact ());

traveler.bmi = 21
traveler.bodyType = "athletic"
// console.log(traveler)

for (let i = 0; i < traveler.travelPartners.length; i++) {
    traveler.travelPartners[i].bmi = 20;
    traveler.travelPartners[i].bodyType = "athletic";
}
 console.log(traveler.travelPartners)