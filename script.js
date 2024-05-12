const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const bookContainer = document.getElementById('book-container'); 

    // Clear the existing content of the container
    bookContainer.innerHTML = '';

    // Loop through the myLibrary array
    myLibrary.forEach((book, index) => {
        // Create elements to display book information
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const titlePara = document.createElement('p');
        titlePara.textContent = `Title: ${book.title}`;

        const authorPara = document.createElement('p');
        authorPara.textContent = `Author: ${book.author}`;

        const pagesPara = document.createElement('p');
        pagesPara.textContent = `Pages: ${book.pages}`;

        const readStatusPara = document.createElement('p');
        readStatusPara.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

        // Button to remove the book
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeBook(index);
            displayBooks(); // Update display after removing the book
        });

        // Button to toggle read status
        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = 'Toggle Read Status';
        toggleReadButton.addEventListener('click', () => {
            toggleReadStatus(index);
            displayBooks(); // Update display after toggling read status
        });

        // Append elements to bookDiv
        bookDiv.appendChild(titlePara);
        bookDiv.appendChild(authorPara);
        bookDiv.appendChild(pagesPara);
        bookDiv.appendChild(readStatusPara);
        bookDiv.appendChild(removeButton);
        bookDiv.appendChild(toggleReadButton);

        // Append bookDiv to container
        bookContainer.appendChild(bookDiv);
    });
}

const newBookBtn = document.getElementById('new-book-btn');
const bookFormContainer = document.getElementById('book-form-container');
const bookForm = document.getElementById('book-form');

newBookBtn.addEventListener('click', () => {
    bookFormContainer.style.display = 'block';
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();

    // Reset form fields and hide the form
    bookForm.reset();
    bookFormContainer.style.display = 'none';
});

