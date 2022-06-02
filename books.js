let myLibrary = [];
let n = 0;
const table = document.querySelector("table");
const form = document.getElementById("form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

//new Book("Harry Potter", "J.Rowling", 350, true).addBook();
//new Book("War & Peace", "L.Tolstoy", 511, false).addBook();

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push({
    title: title,
    author: author,
    pages: pages,
    read: read,
    nnn: n,
  });
  let tr = document.createElement("tr");
  tr.dataset.id = n;
  n++;
  let td = document.createElement("td");
  td.classList.add("firstColumn");
  let button = document.createElement("button");
  button.setAttribute("onclick", "deleteRowFunction(this)");
  button.textContent = "X";
  button.classList.add("remove");
  td.appendChild(button);
  tr.appendChild(td);
  for (let item in myLibrary[myLibrary.length - 1]) {
    if (item !== "nnn") {
      let td = document.createElement("td");
      td.textContent = myLibrary[myLibrary.length - 1][item];
      tr.appendChild(td);
    }
  }
  let tdStatus = document.createElement("td");
  tdStatus.classList.add("statusColumn");
  let buttonStatus = document.createElement("button");
  buttonStatus.setAttribute("onclick", "changeStatus(this)");
  //buttonStatus.textContent = "Change";
  buttonStatus.classList.add("change");
  tdStatus.appendChild(buttonStatus);
  tr.appendChild(tdStatus);
  table.appendChild(tr);
}

addBookToLibrary("Harry Potter", "J.Rowling", 350, true);
addBookToLibrary("War & Peace", "L.Tolstoy", 511, false);

function deleteRowFunction(event) {
  let rowToRem = event.parentNode.parentNode;
  table.removeChild(rowToRem);
  let nToRemove = parseInt(rowToRem.dataset.id);
  const indexOfObject = myLibrary.findIndex((object) => {
    return object.nnn === nToRemove;
  });
  myLibrary.splice(indexOfObject, 1);
}

const newBookButton = (document.querySelector("#newBook").onclick =
  function () {
    form.style.display = "flex";
  });

const titleInput = document.querySelector("form #title");
const authorInput = document.querySelector("form #author");
const pagesInput = document.querySelector("form #pages");
const readInput = document.querySelector("form #read");
const fieldset = document.querySelector("fieldset");

const addBookButton = (document.querySelector("#addBook").onclick =
  function () {
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
      titleInput.value = "";
      authorInput.value = "";
      pagesInput.value = "";
      readInput.checked = false;
      form.style.display = "none";
    }
  });

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

function changeStatus(event) {
  let tdToChange = event.parentNode.previousSibling;
  if (tdToChange.textContent === "false") {
    tdToChange.textContent = "true";
  } else {
    tdToChange.textContent = "false";
  }

  let rowToChange = event.parentNode.parentNode;
  let nToChange = parseInt(rowToChange.dataset.id);
  const indexOfObject = myLibrary.findIndex((object) => {
    return object.nnn === nToChange;
  });
  myLibrary[indexOfObject].read = !myLibrary[indexOfObject].read;
}
