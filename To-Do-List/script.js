const inputBox = document.getElementById('inputBox')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')
const editBtn= document.getElementsByClassName('editBtn')

let editTodo = null

const addtodo = () => {
    const inputText = inputBox.value.trim()
    if (inputText.length <= 0) {
        alert('you must write something in your to do')
        return false
    }

    if (addBtn.value === "Edit") {
        editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
        editTodo.target.previousElementSibling.innerHTML = inputText;
        inputBox.value = "";
        addBtn.value = "Add";
        // return false
    }
    // creat p and li element
    else {
        const p = document.createElement("p")
        const li = document.createElement("li")
        p.innerHTML = inputText
        li.appendChild(p)


        // creat edit button
        const editBtn = document.createElement("button")
        editBtn.innerText = "Edit"
        editBtn.classList.add("btn", "editBtn")
        li.appendChild(editBtn)
        //creat remove btn
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Remove"
        deleteBtn.classList.add("btn", "deleteBtn")
        li.appendChild(deleteBtn)

        todoList.appendChild(li)
        inputBox.value = ""
        saveLocalTodos(inputText)
    }
}


const updateTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement)
        deleteLocalTodos(e.target.parentElement)
    }
    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML
        // editLocalTodos(e.target.previousElementSibling.innerHTML)
        inputBox.focus()
        addBtn.value = "Edit"
        editTodo = e
    }
}


const saveLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {

        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
    //    console.log(todos)
    localStorage.setItem('todos', JSON.stringify(todos));
}

const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {

        todos = JSON.parse(localStorage.getItem("todos"))
        todos.forEach(todo => {
            const p = document.createElement("p")
            const li = document.createElement("li")
            p.innerHTML = todo
            li.appendChild(p)


            // creat edit button
            const editBtn = document.createElement("button")
            editBtn.innerText = "Edit"
            editBtn.classList.add("btn", "editBtn")
            li.appendChild(editBtn)
            //creat remove btn
            const deleteBtn = document.createElement("button")
            deleteBtn.innerText = "Remove"
            deleteBtn.classList.add("btn", "deleteBtn")
            li.appendChild(deleteBtn)

            todoList.appendChild(li)
        });
    }
}
const deleteLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {

        todos = JSON.parse(localStorage.getItem("todos"))
    }
    const todoText = todo.children[0].innerHTML
    const todoindex = todos.indexOf(todoText)
    // console.log(todoindex)
    todos.splice(todoindex, 1)
    localStorage.setItem("todos", JSON.stringify(todos))
}
const editLocalTodos = (todo) => {

    let todos = JSON.parse(localStorage.getItem("todos"))
    let todoIndex = todos.indexOf(todo);

    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}
document.addEventListener("DOMContentLoaded", getLocalTodos)
addBtn.addEventListener("click", addtodo)
todoList.addEventListener("click", updateTodo)
