const addBtn = document.querySelector("button")
const inputField = document.querySelector('input')
const list = document.querySelector('ul')
const form = document.querySelector('form')
const deleteBtn = document.createElement("button")
const message = document.getElementById('message')

deleteBtn.textContent ="X"

const deleted = (title) => `${title} deleted!`
const watched = (title) => `${title} watched!`
const added = (title) => `${title} added back!`

const deleteMovie = (e) => {
    e.preventDefault()
    e.target.parentNode.remove() 
    message.textContent = deleted(e.target.parentNode.children[0].textContent)

    revealMessage()
}

const crossOffMovie = (e) => {
    e.target.classList.toggle('checked') 
    message.textContent = e.target.classList.contains('checked') ? watched(e.target.textContent) : added(e.target.textContent)

    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => message.className = "hide", 1000);
}

const addMovie = (e) => {
    e.preventDefault()
    if (!inputField.value) return
    
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value

    // cross item
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)
    list.appendChild(movie)

    inputField.value = ""

    // remove the item
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent ="X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
}



form.addEventListener('submit', addMovie)
