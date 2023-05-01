const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

// 1. Create a function called getAvailableBooks that returns an array of all available
// books.

function getAvailableBooks(books) {
  return books.filter(book => book.isAvailable);
}
console.log(getAvailableBooks(books));

// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(authorName) {
    const result = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].author === authorName) {
        result.push(books[i]);
      }
    }
    return result;
  }
  const allBooks = getBooksByAuthor('J.D. Salinger');
console.log(allBooks); 



// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook(index,name) {
    books.push(indexOf(index))

    
}

// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(bookTitle) {
    let book = books.find(book => book.bookTitle ===bookTitle);
    if(!book){
        return `The book "${bookTitle}" is not available.`;
    }
    if(!book.isAvailable){
        return `The book "${bookTitle}" is on check out`;
    }
    book.isAvailable = false;
    return `The book "${bookTitle}" is successfully checked out`;
}
console.log(checkoutBook( 'Great Expectations'));
 
// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(title,library) {
    for(books in library);
    if books["title"] ==title;
}

