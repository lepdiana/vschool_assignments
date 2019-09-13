class Character {
    constructor(name, status = "Small", totalCoins = 0, hasStars=false){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.gameActive = true
    }
    gotHit(){
        switch(this.status){
            case "Small":
                this.status = "Dead"
                this.gameActive = false
                clearInterval(gameLoop)
                break
            case "Big":
                this.status = "Small"
                break
            case "Powered Up":
                this.status = "Big"
                break
            
        }
    }
    gotPowerup(){
        switch(this.status){
            case "Small":
                this.status = "Big"
                break
            case "Big":
                this.status = "Powered Up"
                break
            default:
                break
        }
    }
    addCoin(){
        this.totalCoins++
    }
    setName(name){
        this.name = name
    }
    print(){
        console.log(`
Name: ${this.name}
Status: ${this.status}
Total Coins: ${this.totalCoins}
`) 
    }
}
const playerOne = new Character("Mario", "Small")
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const gameLoop = setInterval(()=>{
    const randomNum = getRandomInt(0, 2)
    if(randomNum === 0){
        playerOne.gotHit()
    } else if(randomNum === 1){
        playerOne.gotPowerup()
    } else {
        playerOne.addCoin()
    }
    playerOne.print()
}, 1000) 