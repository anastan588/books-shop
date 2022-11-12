const books = [
  {
    author: "Douglas Crockford",
    imageLink: "images/1.jpg",
    title: "JavaScript: The Good Parts: The Good Parts",
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
document.body.appendChild(header);

let h1 = document.createElement("h1");
header.appendChild(h1);
h1.textContent = "Welcome  to amazing books shop!";

let main = document.createElement("main");
document.body.appendChild(main);

function cardOfBook() {
  books.map((book) => {
    let card = document.createElement("section");
    let carddiv = document.createElement("div");
    carddiv.classList = "card";
    card.appendChild(carddiv);
    document.getElementsByTagName("main")[0].appendChild(card);

    let div = document.createElement("div");
    div.id = "book";
    div.className = "book";
    carddiv.appendChild(div);
    let bookImage = document.createElement("div");
    bookImage.className = "bookImage";
    div.appendChild(bookImage);

    let img = document.createElement("img");
    img.className = "img";
    img.src = `${book.imageLink}`;
    bookImage.appendChild(img);

    let textblock = document.createElement("div");
    textblock.className = "textblock";
    carddiv.appendChild(textblock);
    let title = document.createElement("h2");
    title.className = "title";
    textblock.appendChild(title);
    title.innerHTML = `${book.title}`;

    let h3 = document.createElement("h3");
    textblock.appendChild(h3);
    h3.innerHTML = `${book.author}`;
    let h4 = document.createElement("h4");
    textblock.appendChild(h4);
    h4.innerHTML = ` ${book.price}` + "$";

    let buttonblock = document.createElement("div");
    buttonblock.className = "buttonblock";
    textblock.appendChild(buttonblock);

    let buttonShow = document.createElement("button");
    buttonShow.className = "buttonShow";
    buttonShow.textContent = "Show More ";
    buttonblock.appendChild(buttonShow);

    var buttonAdd = document.createElement("button");
    buttonAdd.className = "buttonAdd";
    buttonAdd.textContent = "Add To Cart";
    buttonblock.appendChild(buttonAdd);
  });
}

cardOfBook(books);
