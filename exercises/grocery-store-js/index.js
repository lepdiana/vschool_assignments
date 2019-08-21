var shopper = {
    name: "Sally",
    quantity: 5,
    isVegetarian: false,
    groceryCart: ["beef", "chicken", "lettuce", "tomato", "onion"],
    sayNameQuantity: function() {
        return this.name + " bought " + this.quantity + " items";
    }
};

console.log(shopper.sayNameQuantity())
shopper.sayNameQuantity();