let myLibrary = [];
let n = 0;
const table = document.querySelector("table");
const form = document.getElementById("form");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = n;
  }
};


function addBookToLibrary(title, author, pages, read) { 
  const newBook = new Book(title, author, pages, read);  
  myLibrary.push(newBook);
  addBookToTable()
};


function addBookToTable() {
  let tr = document.createElement("tr");
  tr.dataset.id = n;
  n++;
  let td = document.createElement("td");
  td.classList.add("firstColumn");  
  createButton("deleteRowFunction(this)", "X", "remove", td);
  tr.appendChild(td);

  for (let item in myLibrary[myLibrary.length - 1]) {
    if (item !== "id") {
      let td = document.createElement("td");      
      if (myLibrary[myLibrary.length - 1][item] === true) {
        createButton("changeReadStatus(this)", "V", "change", td);
      } else if (!myLibrary[myLibrary.length - 1][item]) {
        createButton("changeReadStatus(this)", "", "change", td);
      } else {
        td.textContent = myLibrary[myLibrary.length - 1][item];
      }
      tr.appendChild(td);
    };
  };
  table.appendChild(tr);
};


function createButton(func, textContent,classList, fieldToAdd){
  let button = document.createElement("button");
  button.setAttribute("onclick", func);
  button.textContent = textContent;
  button.classList.add(classList);
  fieldToAdd.appendChild(button);
  return fieldToAdd;
};


function deleteRowFunction(event) {
  let rowToRem = event.parentNode.parentNode;
  table.removeChild(rowToRem);
  let nToRemove = parseInt(rowToRem.dataset.id);
  const indexOfObject = myLibrary.findIndex((object) => {
    return object.id === nToRemove;
  });
  myLibrary.splice(indexOfObject, 1);
}

//Show the addBook form
document.querySelector("#newBook").onclick =
  function () {
    form.style.display = "flex";
  };

const titleInput = document.querySelector("form #title");
const authorInput = document.querySelector("form #author");
const pagesInput = document.querySelector("form #pages");
const readInput = document.querySelector("form #read");
const fieldset = document.querySelector("fieldset");


//"Add Book" button
document.querySelector("#addBook").onclick =
  function () {
    //Check for empty fields;
    if (
      titleInput.value === "" ||
      authorInput.value === "" ||
      pagesInput.value === ""
    ) {
      fieldset.style.border = "2px solid red ";
    } else {
      addBookToLibrary(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readInput.checked
      );
      //then clear all input fields for another input;
      titleInput.value = "";
      authorInput.value = "";
      pagesInput.value = "";
      readInput.checked = false;
      form.style.display = "none";
    }
  };

//Hide form when hit "Cancel"
document.querySelector("#cancel").onclick = function () {
  form.style.display = "none";
};


document.querySelectorAll("fieldset input").forEach((item) =>
  item.addEventListener("click", function (event) {
    if (fieldset.style.border === "2px solid red") {
      fieldset.style.border = "";
    }
  })
);

function changeReadStatus(event) {
  if (event.textContent === "") {
    event.textContent = "V";
  } else {
    event.textContent = "";
  }
  let idToChange = parseInt(event.parentNode.parentNode.dataset.id);
  const indexOfObject = myLibrary.findIndex((object) => {
    return object.id === idToChange;
  });
  myLibrary[indexOfObject].read = !myLibrary[indexOfObject].read;
}

addBookToLibrary("Harry Potter", "J.Rowling", 350, true);
addBookToLibrary("War & Peace", "L.Tolstoy", 511, false);
