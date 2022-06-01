let myLibrary = [];

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

const table = document.querySelector("table");

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push({ title: title, author: author, pages: pages, read: read });
  let tr = document.createElement("tr");
  for (let item in myLibrary[myLibrary.length-1]) {
    let td = document.createElement("td");    
    td.textContent = myLibrary[myLibrary.length-1][item];
    tr.appendChild(td);    
  };
  table.appendChild(tr);
};

addBookToLibrary("Harry Potter", "J.Rowling", 350, true);
addBookToLibrary("War & Peace", "L. Tolstoy", 511, false);

/*
function showLibrary(library) {
  for (let book of library) {
    let tr = document.createElement("tr");
    for (let item in book) {
      let td = document.createElement("td");
      td.textContent = book[item];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
*/
//showLibrary(myLibrary);

const titleInput = document.querySelector("form #title");
const authorInput = document.querySelector("form #author");
const pagesInput = document.querySelector("form #pages");
const readInput = document.querySelector("form #read");

const newBookButton = (document.querySelector("#newBook").onclick =
  function () {
    document.getElementById("form").style.display = "block";
  });

const addBookButton = (document.querySelector("#addBook").onclick =
  function () {
    addBookToLibrary(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.checked
    );
    //console.log(myLibrary);
    showLibrary(myLibrary);

    //document.getElementById("form").submit();
  });
