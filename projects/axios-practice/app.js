const form = document.form


axios.get("https://api.vschool.io/diana/todo/")
.then(response => {
    let todos = response.data
    todoDisplay(todos)
    
})
.catch(error => console.log(error))


const todoDisplay = (todos) => {
    todos.forEach((todo) => {
        // create elements
        let todoList = document.getElementById("todoList")
        let newTodoSection = document.createElement("div")
        let newTodoTitleCheckBox = document.createElement("div")
        let checkBox = document.createElement("input")
        let newTodoTitle = document.createElement("p")
        let newTodoImage = document.createElement("div")
        let photo = document.createElement("img")
        let newTodoDescription = document.createElement("div")
        let description = document.createElement("p")
        let newTodoDeleteBtn = document.createElement("div")
        let deleteBtn = document.createElement("button")

        //edit elements
        todoList.classList.add("todoList")
        newTodoSection.classList.add("newTodoSection")
        newTodoTitleCheckBox.classList.add("newTodoTitleCheckBox")
        checkBox.classList.add("checkBox")
        checkBox.type = "checkbox";
        checkBox.addEventListener("change", () => {
            const id = todo._id
            if (checkBox.checked) {
                newTodoTitle.classList.add("completed")
                checkBox.checked === true
                boxChecked(id, {completed: true})
            } else {
                newTodoTitle.classList.remove("completed")
                boxChecked(id, {completed: true})
            }
        })
        newTodoTitle.classList.add("newTodoTitle")
        newTodoTitle.textContent = todo.title
        newTodoImage.classList.add("newTodoImage")
        photo.classList.add("photo")
        photo.src = todo.imgUrl
        newTodoDescription.classList.add("newTodoDescription")
        description.classList.add("description")
        description.textContent = todo.description
        newTodoDeleteBtn.classList.add("newTodoDeleteBtn")
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", () => {
            axios.delete(`https://api.vschool.io/diana/todo/${todo._id}`)
            .then(response => {
                console.log(response.data)
                location.reload()
            }, 3000)
            .catch(error => {
                console.log(error)
            })
        })

        //append elements
        newTodoTitleCheckBox.appendChild(newTodoTitle)
        newTodoTitleCheckBox.appendChild(checkBox)
        newTodoSection.appendChild(newTodoTitleCheckBox)
        todoList.appendChild(newTodoSection)
        newTodoImage.appendChild(photo)
        newTodoSection.appendChild(newTodoImage)
        newTodoDescription.appendChild(description)
        newTodoSection.appendChild(newTodoDescription)
        newTodoDeleteBtn.appendChild(deleteBtn)
        newTodoSection.appendChild(newTodoDeleteBtn)
        todoList.appendChild(newTodoSection)
    })
}


form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    let newTodo = {
        title: "",
        description: "",
        imgUrl: ""
    }

    newTodo.title = form.title.value
    newTodo.description = form.description.value 
    newTodo.imgUrl = form.image.value


    axios.post('https://api.vschool.io/diana/todo/', newTodo)
    .then(response => {
        console.log(response.data)
        location.reload()
    }, 3000)
    .catch(error => {
        console.log(error)
    })
})

let boxChecked = (id, objToEdit) => {
    axios.put("https://api.vschool.io/diana/todo/" + id, objToEdit)
    .then(response => {
        let todos = response.data

    })
    .catch(error => {
        console.log(error)
    })
}