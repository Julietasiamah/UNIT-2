//Devi realizzare una pagina per una “libreria” contenenente libri derivanti da una chiamata HTTP di tipo GET.
// Endpoint: https://striveschool-api.herokuapp.com/books Requisiti della pagina:
// ● Utilizza Bootstrap 5
// per creare una pagina responsive con una sezione centrale a 3 o 4 colonne per riga ● Ogni colonna avrà
// al suo interno un elemento Card di Bootstrap, creata a partire da un singolo libro:
// nella “card image” inserisci la copertina del libro, nel “card body” il suo titolo e il suo prezzo.
// ● Sempre nel “card body” inserisci un pulsante “Scarta”. Se premuto, dovrà far scomparire la card dalla pagina.
// ● EXTRA: crea una lista che rappresenti il carrello del negozio e inseriscila dove vuoi nella pagina.
//  Aggiungi un altro pulsante “Compra ora” vicino a “Scarta” nelle card per aggiungere il libro al carrello.
//  Il carrello dovrà persistere nello storage del browser.
// ● EXTRA: aggiungi vicino ad ogni libro del carrello un pulsante per rimuoverlo dal carrell

/*const booksloading = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    })
    .then((booksArr) => {
      console.log(booksArr);

      const bookGrid = document.getElementById("book-grid"); //seleziono la griglia ove andremo a mettere i libri

      booksArr.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.alt = book.title;
        img.src = book.img;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerText = book.title;

        const p = document.createElement("p");
        p.classList.add("card-text");
        p.innerText = book.price + "€";

        const button = document.createElement("button");
        button.classList.add("btn", "bnt-primary", "me-2");
        button.innerText = "Discards";

        button.onclick = function (event) {
          console.log(event.target);

          event.target.closest(".col").remove();
        };

        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(button);
        //cardBody.appendChild (addCartButton)
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        bookGrid.appendChild(col);
      });
    });
};*/

/*.then((responseObj) => {
  console.log(responseObj);

  if (responseObj.ok) {
    return responseObj.json()
  }
});*/

/*const discard = document.querySelector("discard");
discard.addEventListener("click", function () {
  localStorage.removeItem("fallen");
});*/

const cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
  })
  .then((booksArr) => {
    console.log(booksArr);

    const row = document.getElementById("book-grid");

    booksArr.forEach((book) => {
      const col = document.createElement("div");
      col.classList.add("col");

      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.alt = book.title;
      img.src = book.img;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.innerText = book.title;

      const p = document.createElement("p");
      p.classList.add("card-text");
      p.innerText = book.price + "€";

      const button = document.createElement("button");
      button.classList.add("btn", "btn-primary", "me-2");
      button.innerText = "Scarta";

      button.onclick = function (event) {
        console.log(event.target);

        event.target.closest(".col").remove();
      };

      const addToCartBtn = document.createElement("button");
      addToCartBtn.classList.add("btn", "btn-success");
      addToCartBtn.innerText = "Aggiungi al carrello";

      addToCartBtn.onclick = function (event) {
        console.log(book);

        cart.push(book);

        localStorage.setItem("cart", JSON.stringify(cart));

        addBookToCart(book);
      };

      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardBody.appendChild(button);
      cardBody.appendChild(addToCartBtn);
      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      row.appendChild(col);
    });
  });

function addBookToCart(book) {
  const ul = document.querySelector("#cart-container ul");
  const li = document.createElement("li");
  li.classList.add("list-group-item", "px-0", "d-flex", "align-items-center");

  const bookImg = document.createElement("img");
  bookImg.classList.add("me-3");
  bookImg.src = book.img;
  bookImg.alt = book.title;
  bookImg.style.width = "50px";

  const span = document.createElement("span");
  span.classList.add("me-auto");
  span.innerText = book.title + " — " + book.price + "€";

  const delBtn = document.createElement("button");
  delBtn.classList.add("btn", "btn-danger");
  delBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;

  delBtn.onclick = function (event) {
    console.log(book.asin);

    event.target.closest("li").remove();

    const indexFound = cart.findIndex((bookInCart) => bookInCart.asin === book.asin);
    cart.splice(indexFound, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(indexFound);
  };

  li.appendChild(bookImg);
  li.appendChild(span);
  li.appendChild(delBtn);

  ul.appendChild(li);
}

window.addEventListener("DOMContentLoaded", function () {
  cart.forEach((book) => addBookToCart(book));
});
