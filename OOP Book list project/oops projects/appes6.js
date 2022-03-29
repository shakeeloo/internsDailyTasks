class Book {
  constructor(title, aurthor, isbn){
   this.title =title;
   this.aurthor = aurthor;
   this.isbn = isbn;   
  }
}
class UI {
  addBookToList(book) {
    const list =document.getElementById('book-list');

    //create tr
  const row = document.createElement('tr');
   //insert cols
   row.innerHTML =`
    <td>${book.title}</td>
    <td>${book.aurthor}</td>
    <td>${book.isbn}</td>
    <td><a class="delete">X</a></td>
   `;
  //append
  list.appendChild(row);
 
  }
 
  clearFields() {
    document.getElementById('title').value= "",
  document.getElementById('author').value= "",
  document.getElementById('isbn').value= ""
  }

  showAlert(message, className) {
    //create div
    const div = document.createElement('div');
    //class
    div.className = `alert ${className}`
    //append
    div.appendChild(document.createTextNode(message));
    //parent
    const container =document.querySelector('.container');
    //form
    const form =document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div,form);

    //time out
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deletebook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
      }
  }
}


// Local Storage Class
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui  = new UI;

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index){
     if(book.isbn === isbn) {
      books.splice(index, 1);
     }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

//DOM loader

document.addEventListener('DOMContentLoaded', Store.displaybooks);

// //Add eventlisten er
document.getElementById('submitBtn').addEventListener('click', function(e){
  // Get form values

   const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

      //create a book 
      const book = new Book(title, author, isbn);

      //add UI
      const ui = new UI();

      //validate
      if(title ==="" || author ==="" || isbn === ""){
          ui.showAlert('field is empty', 'error');
      }else{
          //add book to list
          ui.addBookToList(book);
        // Add to LS
        Store.addBook(book);
          //showalert
          ui.showAlert("Book Add!", "success");
      
          //clear field
          ui.clearFields();
      }
  

    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', 
function(e){
const ui = new UI();

ui.deletebook(e.target);

//show error
ui.showAlert('book removed!', 'success')
   e.preventDefault();
});
