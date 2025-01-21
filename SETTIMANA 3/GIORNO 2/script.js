/*● Crea un semplice form di registrazione con un input field in cui l’utente 
possa inserire il proprio nome. A fianco di questo input field crea due 
pulsanti: uno salverà il valore in localStorage, uno rimuoverà il valore precedentemente salvato 
(se presente). Mostra sopra l’input field il valore precedentemente salvato, se presente.*/

//seleziono gli elementi nel DOM
const save = document.querySelector(".save");
const remove = document.querySelector(".delete");
const savedNamespan = document.getElementById("savedName");
const Inputname = document.getElementById("name");

// Mostra il nome salvato al caricamento della pagina (se presente)
const savedName = localStorage.getItem("name");
if (savedName) {
  savedNamespan.textContent = savedName;
}

//Salvo il valore inserito nel local storage

save.addEventListener("click", () => {
  const name = Inputname.value.trim();
  if (name) {
    localStorage.setItem("name", name);
    savedNamespan.textContent = name;
    Inputname.value = " ";
  } else {
    alert("Inserire un nome valido");
  }
});

// rimuovo il valore salvato dal local storage

remove.addEventListener("click", () => {
  localStorage.removeItem("name");
  savedNamespan.textContent = `$Non è stato inserito alcun valore`;
});

/*● Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. 
Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. 
Il valore del contatore deve aggiornarsi ad ogni secondo.*/
