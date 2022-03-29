// //book constructor
function Book(title,aurthor,isbn){
 this.title =title;
 this.aurthor =aurthor;
 this.isbn =isbn;
}

// //UI function
function UI(){}

//Add book to list
UI.prototype.addBookToList= function(book){
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
//clear field
UI.prototype.clearFields = function(){
  document.getElementById('title').value= "",
  document.getElementById('author').value= "",
  document.getElementById('isbn').value= ""
};
UI.prototype.showAlert =function(message, className){
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
};

//delete book
UI.prototype.deletebook = function(target){
    if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
    }
}

  //store in local storage 

  class store {
    static getbooks() {
      let books;
      if(localStorage.getItem('books') === null){
        books =[];
      }else{
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
    }

    static displaybooks() {

    }

   static addbook(Book) {
    const books  = store.getbooks(); 
    books.push(Book);
    localStorage.setItem('books', JSON.stringify(books));    
    }

   static removebook() {

    }

  }



// //Add eventlistener
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

          //  addbook to this.localStorage
           store.addbook(book);

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





