const books = [
  {
    author: "Douglas Crockford",
    imageLink: "images/1.jpg",
    title: "JavaScript: The Good Parts",
    price: 30,
    description:
      "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must",
  },
  {
    author: "David Herman",
    imageLink: "images/2.jpg",
    title:
      "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    price: 22,
    description:
      "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency",
  },
  {
    author: "David Flanagan",
    imageLink: "images/3.jpg",
    title: "JavaScript: The Definitive Guide",
    price: 40,
    description:
      "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript",
  },
  {
    author: " Eric Elliott",
    imageLink: "images/4.jpg",
    title: "Programming JavaScript Applications",
    price: 19,
    description:
      "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows.",
  },
  {
    author: "Addy Osmani",
    imageLink: "images/5.jpg",
    title: "Learning JavaScript Design Patterns",
    price: 32,
    description:
      "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
  },
  {
    author: "Boris Cherny",
    imageLink: "images/6.jpg",
    title: "Programming TypeScript",
    price: 28,
    description:
      "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.",
  },
  {
    author: "Alex Banks, Eve Porcello",
    imageLink: "images/7.jpg",
    title: "Learning React, 2nd Edition",
    price: 25,
    description:
      "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary.",
  },
  {
    author: "Bradley Meck Alex Young and Mike Cantelon",
    imageLink: "images/8.jpg",
    title: "Node.js in Action",
    price: 38,
    description:
      "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications.",
  },
  {
    author: "Kyle Simpson",
    imageLink: "images/9.jpg",
    title: "You Don't Know JS Yet: Get Started",
    price: 26,
    description:
      "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!",
  },
  {
    author: "John Resig and Bear Bibeault",
    imageLink: "images/10.jpg",
    title: "Secrets of the JavaScript Ninja",
    price: 33,
    description:
      "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.",
  },
];
console.log(books);

let header = document.createElement("header");
document.body.append(header);

let h1 = document.createElement("h1");
header.append(h1);
h1.textContent = "Welcome  to amazing books shop!";

let main = document.createElement("main");
document.body.append(main);

let bag = document.createElement("div");
bag.className = "bag";
main.append(bag);
let bagContainer = document.createElement("div");
bagContainer.className = "bagContainer";
bag.append(bagContainer);

let bagTitle = document.createElement("p");
bagTitle.className = "bagTitle";
bagTitle.innerHTML = "Bag";
bagContainer.append(bagTitle);

let bagAmountOfBooks = document.createElement("div");
bagAmountOfBooks.className = "bagAmountOfBooks";
bagContainer.append(bagAmountOfBooks);

let amountOfBooksText = document.createElement("p");
amountOfBooksText.className = "amountOfBooksText";
amountOfBooksText.innerHTML = "Amount of books:";
bagAmountOfBooks.append(amountOfBooksText);

let amountOfBooksDigit = document.createElement("p");
amountOfBooksDigit.className = "amountOfBooksDigit";
let countOfBooks = 0;
amountOfBooksDigit.innerHTML = `${countOfBooks}`;
bagAmountOfBooks.append(amountOfBooksDigit);

let bagPrice = document.createElement("div");
bagPrice.className = "bagPrice";
bagContainer.append(bagPrice);

let bagPriceText = document.createElement("p");
bagPriceText.className = "bagPriceText";
bagPriceText.innerHTML = "Total price:";
bagPrice.append(bagPriceText);

let bagPriceAmount = document.createElement("p");
bagPriceAmount.className = "bagPriceAmount";
let countOfOrder = 0;
let resultPrice = 0;
bagPriceAmount = `${countOfOrder}`;
bagPrice.append(bagPriceAmount);

// Hidden Bag
let hiddenBag = document.createElement("div");
hiddenBag.className = "hiddenBag";
main.append(hiddenBag);

let booksList = document.createElement("ul");
booksList.className = "booksList";
hiddenBag.append(booksList);

let bookImage = document.createElement("li");
let bookName = document.createElement("li");
let bookPrice = document.createElement("li");
bookImage.textContent = "Image";
bookName.textContent = "Name";
bookPrice.textContent = "Price";
booksList.append(bookImage);
booksList.append(bookName);
booksList.append(bookPrice);

let bagButtonBlock = document.createElement("div");
bagButtonBlock.className = "bagButtonBlock ";
hiddenBag.append(bagButtonBlock);

let confirmOrder = document.createElement("button");
confirmOrder.className = "confirmOrder";
confirmOrder.innerText = "Confirm Order";
bagButtonBlock.append(confirmOrder);

let clearAll = document.createElement("button");
clearAll.className = "clearAll";
clearAll.innerText = "Clear All";
bagButtonBlock.append(clearAll);

bag.onclick = function () {
  if (hiddenBag.style.display === "block") {
    hiddenBag.style.display = "none";
  } else {
    hiddenBag.style.display = "block";
  }
};

function cardOfBook() {
  books.map((book) => {
    let card = document.createElement("section");
    let carddiv = document.createElement("div");
    carddiv.classList = "card";
    card.append(carddiv);
    document.getElementsByTagName("main")[0].append(card);

    let div = document.createElement("div");
    div.id = "book";
    div.className = "book";
    carddiv.append(div);
    let bookImage = document.createElement("div");
    bookImage.className = "bookImage";
    div.append(bookImage);

    let img = document.createElement("img");
    img.className = "img";
    img.src = `${book.imageLink}`;
    bookImage.append(img);

    let textblock = document.createElement("div");
    textblock.className = "textblock";
    carddiv.append(textblock);
    let title = document.createElement("h2");
    title.className = "title";
    textblock.append(title);
    title.innerHTML = `${book.title}`;

    let h3 = document.createElement("h3");
    textblock.append(h3);
    h3.innerHTML = `${book.author}`;
    let h4 = document.createElement("h4");
    textblock.append(h4);
    h4.innerHTML = `Price: ${book.price}` + "$";

    let buttonblock = document.createElement("div");
    buttonblock.className = "buttonblock";
    textblock.append(buttonblock);

    let buttonShow = document.createElement("button");
    buttonShow.className = "buttonShow";
    buttonShow.textContent = "Show More ";
    buttonblock.append(buttonShow);

    buttonShow.onclick = function popUp() {
      let OVERLAY = document.createElement("div");
      OVERLAY.className = "overlay";
      document.body.prepend(OVERLAY);
      OVERLAY.classList.add("open");

      let popup = document.createElement("div");
      popup.className = "popup";
      document.body.prepend(popup);
      popup.classList.add("open");

      let popuptext = document.createElement("div");
      popuptext.className = "popuptext";
      popup.append(popuptext);

      let popupClose = document.createElement("img");
      popupClose.className = "popupClose";
      popupClose.src = "./images/close.svg";
      popuptext.append(popupClose);

      let popupTitle = document.createElement("p");
      popupTitle.className = "popupTitle";
      popupTitle.innerHTML = `${book.title}`;
      popuptext.append(popupTitle);

      let popupDescription = document.createElement("p");
      popupDescription.className = "popupDescription";
      popupDescription.innerHTML = `${book.description}`;
      popuptext.append(popupDescription);

      popupClose.addEventListener("click", popUpClose);
      OVERLAY.addEventListener("click", popUpClose);

      function popUpClose() {
        popup.remove();
        OVERLAY.remove();
      }
    };

    let buttonAdd = document.createElement("button");
    buttonAdd.className = "buttonAdd";
    buttonAdd.textContent = "Add To Bag";
    buttonblock.append(buttonAdd);
  });
}

cardOfBook(books);

// IMPLEMENT DRAG AND DROP

clearAll.onclick = () => {
  cardTable.innerHTML = "";
  countOfBooks = 0;
  resultPrice = 0;
  bagPriceAmount.textContent = `${resultPrice}`;

  bagAmountOfBooks.textContent = `${countOfBooks}`;
  hiddenBag.style.display = "none";
};

let val = 0;
let agent_1;
hiddenBag.setAttribute("id", agent_1);

let cardTable = document.createElement("div");
cardTable.className = "cardTable";
hiddenBag.append(cardTable);

bagContainer.addEventListener("dragover", allowDrop);
bag.addEventListener("dragover", allowDrop);

function dragEnded(ev) {
  ev.DataTransfer.setData("text", ev.target.id);
}

function drag(ev) {
  agent_1 = ev.target.id;
  ev.DataTransfer.setData("text", ev.target.id);
}

document.body.addEventListener("dragstart", drag);
document.body.addEventListener("dragend", dragEnded);

function allowDrop(ev) {
  ev.preventDefault();
}

bagContainer.addEventListener("drop", drop);
bag.addEventListener("drop", drop);

function drop(ev) {
  let itemContainer = document.createElement("div");
  itemContainer.className = "itemContainer";
  cardTable.append(itemContainer);

  let imageDrop = document.createElement("img");
  imageDrop.className = "imageDrop";
  imageDrop.className = "imageDrop";
  imageDrop.src = books[+agent_1].imageLink;
  itemContainer.append(imageDrop);

  let titleTableDrop = document.createElement("div");
  titleTableDrop.className = "titleTableDrop";
  itemContainer.append(titleTableDrop);

  let priceTableDrop = document.createElement("div");
  priceTableDrop.className = "priceTableDrop";
  itemContainer.append(priceTableDrop);

  let closeButtonDrop = document.createElement("img");
  closeButtonDrop.className = "closeButtonDrop";
  closeButtonDrop.src = "./images/close.svg";
  itemContainer.append(closeButtonDrop);

  let bookNameDrop = document.createElement("p");
  bookNameDrop.className = "bookNameDrop";
  bookNameDrop.innerHTML = books[+agent_1].title;
  titleTableDrop.append(bookNameDrop);

  let authorDrop = document.createElement("p");
  authorDrop.className = "authorDrop";
  authorDrop.innerHTML = books[+agent_1].author;
  titleTableDrop.append(authorDrop);

  let priceDrop = document.createElement("p");
  priceDrop.className = "priceDrop";
  priceDrop.innerHTML = books[+agent_1].price + "$";
  priceTableDrop.className = "priceDrop";

  let empArr = [];
  const collection = document.getElementsByClassName("priceDrop");
  countOfBooks = collection.length;
  amountOfBooksDigit.textContent = `${countOfBooks}`;

  for (let i = 0; i < collection.length; i++) {
    empArr.push(collection[i].textContent.replace("$", ""));
  }

  let sumArr = empArr.map(Number);

  bagPriceAmount.textContent = sumArr.reduce((p, c) => p + c);

  resultPrice = sumArr.reduce((p, c) => p + c);
  bagPriceAmount.textContent = `${resultPrice}`;

  closeButtonDrop.onclick = () => {
    val =
      parseInt(bagPriceAmount.textContent) -
      parseInt(priceTableDrop.textContent);
    bagPriceAmount.textContent = val.toString();
    bagPriceAmount.textContent = `Total: ${
      resultPrice - parseInt(priceTableDrop.textContent)
    }`;
    bagPriceAmount.textContent = `Total: ${val.toString()}$`;

    itemContainer.remove();
    const collection = document.getElementsByClassName("priceDrop");
    countOfBooks = collection.length;
    amountOfBooksDigit.textContent = `${countOfBooks}`;
  };
  ev.preventDefault();
}

let footer = document.createElement("footer");
document.body.appendChild(footer);
let rsImage = document.createElement("img");
rsImage.className = "rsImage";
rsImage.src = "./images/logo-rsschool3.png";
footer.appendChild(rsImage);
let year = document.createElement("div");
year.className = "year";
footer.appendChild(year);
let yeartext = document.createElement("p");
yeartext.className = "yeartext";
year.appendChild(yeartext);
yeartext.textContent = "2022";
