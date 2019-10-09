const express = require('express');
const app = express();
const uuid = require('uuid/v4');



const todos = [
    {
        name: "Pack for Seattle, WA",
        description: "Leaving to WA on 09/10/2019",
        imageURL: "https://images.unsplash.com/photo-1538097304804-2a1b932466a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        completed: false,
        _id: uuid()
    },
    {
        name: "Go to UPS",
        description: "Return the modem",
        imageURL: "https://images.unsplash.com/photo-1565335020653-1d1c4fc20bbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=734&q=80",
        completed: false,
        _id: uuid()
    }
]


app.use(express.json())

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.get('/todos/:_id', (req, res) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    res.send(foundTodo)
})

app.post('/todos', (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(newTodo)
})

app.delete('/todos/:_id', (req, res) => {
    const todoId = req.params._id
    const todoIndexToDelete = todos.findIndex(todo => todo._id === todoId)
    const todoTitle = todos[todoIndexToDelete].name
    todos.splice(todoIndexToDelete, 1)
    res.send(`Successfully deleted ${todoTitle}`)
})

app.put('/todos/:_id', (req, res) => {
    const todoId = req.params._id
    const todoToUpdate = todos.find(todo => todo._id === todoId)
    const todoIndexToUpdate= todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todoToUpdate, req.body)
    todos.splice(todoIndexToUpdate, 1, updatedTodo)
    res.send(updatedTodo)
})

app.listen(7000, () => {
    console.log("App is listening on port 7000!")
})