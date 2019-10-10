const express = require('express')
const app = express()

// Server Route to handle a Get request to a specific endpoint
app.get("/", (request, response) => {
    response.send("Hello World!!!!!")
})




        // PORT NUMBER,     // CALLBACK
app.listen(7000, () => {
    console.log("Server is runing on port 7000")
})






// nodemon server.js -> to start a server
// pkill node => to kill all express servers running