let myLibrary = [];

function Books (title, author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info=function(){
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
};

function addBookToLibrary(title, author,pages,read) {
    myLibrary.push({title:title, author:author, pages:pages, read:read});
  };

  addBookToLibrary("Harry Potter", "J.Rowling", 350, true);
  addBookToLibrary("War & Peace", "L. Tolstoy", 511, false);
 
  function showLibrary(library){
      for (let book of library){
          return book;
      };

  };

  showLibrary(myLibrary);

  const newBookButton = document.querySelector('#newBook').onclick = function(){
    document.getElementById("form1").style.display = "block";
  };