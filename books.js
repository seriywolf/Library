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
  for (let item in myLibrary[myLibrary.length - 1]) {
    let td = document.createElement("td");
    td.textContent = myLibrary[myLibrary.length - 1][item];
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

addBookToLibrary("Harry Potter", "J.Rowling", 350, true);
addBookToLibrary("War & Peace", "L. Tolstoy", 511, false);

const newBookButton = (document.querySelector("#newBook").onclick =
  function () {
    document.getElementById("form").style.display = "flex";
  });

const titleInput = document.querySelector("form #title");
const authorInput = document.querySelector("form #author");
const pagesInput = document.querySelector("form #pages");
const readInput = document.querySelector("form #read");

const addBookButton = (document.querySelector("#addBook").onclick =
  function () {
    if (
      titleInput.value === "" ||
      authorInput.value === "" ||
      pagesInput.value === ""
    ) {
      alert("Error");
    } else {
      addBookToLibrary(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readInput.checked
      );
      titleInput.value = "";
      authorInput.value = "";
      pagesInput.value = "";
      readInput.checked = false;
      document.getElementById("form").style.display = "none";
    }
  });

const cancelButton = (document.querySelector("#cancel").onclick = function () {
  document.getElementById("form").style.display = "none";
});
