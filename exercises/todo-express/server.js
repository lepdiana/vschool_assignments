const express = require('express');
const app = express()


app.use(express.json())


app.use('/todos', require('./routes/todosRouter.js'))


app.listen(7000, () => {
    console.log("App is listening on port 7000!")
})