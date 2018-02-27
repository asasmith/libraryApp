// store books here
const myLibrary = []

// Book constructor
function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// add a new book to the myLibrary array
function addBookToLibrary () {
  let title = document.getElementById('title')
  let titleVal = title.value
  let author = document.getElementById('author')
  let authorVal = author.value
  let pages = document.getElementById('pages')
  let pagesVal = pages.value
  let readInput = document.getElementById('read')
  let readVal
  if (readInput.checked === true) {
    readVal = true
  } else {
    readVal = false
  }
  myLibrary.push(new Book(titleVal, authorVal, pagesVal, readVal))
  title.value = ''
  author.value = ''
  pages.value = ''
  readInput.checked = false
  render()
  activeForm()
  return myLibrary
}

// remove book from myLibrary
function removeBook (index) {
  myLibrary.splice(index, 1)
  render()
}

function toggleRead (index) {
  let book = myLibrary[index]
  book.read = !book.read
  render()
  return myLibrary
}

// create book card
function render () {
  let libraryDiv = document.getElementById('library')
  libraryDiv.innerHTML = ''
  myLibrary.forEach(function (book, index) {
    let bookCard = document.createElement('div')
    let title = document.createElement('h2')
    let author = document.createElement('h3')
    let pages = document.createElement('p')
    let isRead = document.createElement('button')
    bookCard.id = index
    isRead.setAttribute('class', 'toggle-read')
    bookCard.setAttribute('class', 'card col-4')
    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = book.pages
    if (book.read) {
      isRead.textContent = 'Read'
      isRead.classList.add('button-success')
    } else {
      isRead.textContent = 'Not Read'
      isRead.classList.add('button-secondary')
    }
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(isRead)
    bookCard.appendChild(this.createDeleteButton())
    libraryDiv.appendChild(bookCard)
  }, this)
}

// create delete button
function createDeleteButton () {
  let button = document.createElement('button')
  button.textContent = 'Delete'
  button.classList.add('button-danger')
  button.classList.add('delete-button')
  return button
}

// hide/show add book form
function activeForm () {
  const form = document.getElementById('addBook')

  if (form.classList.contains('inactive')) {
    form.classList.remove('inactive')
    form.classList.add('active')
  } else {
    form.classList.remove('active')
    form.classList.add('inactive')
  }
}


// set up event listeners
function addEventListeners () {
  const library = document.getElementById('library')

  library.addEventListener('click', function (e) {
    // get id of book card
    let index = e.target.parentNode.id

    // if e.target is delete button
    if (e.target.classList.contains('delete-button')) {
      removeBook(index)
    } else if (e.target.classList.contains('toggle-read')) {
      toggleRead(index)
    }
  })
}

addEventListeners()
