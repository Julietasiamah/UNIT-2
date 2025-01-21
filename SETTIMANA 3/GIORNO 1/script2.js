// 1)prima prelevo gli elementi come nodi del DOM
//2) creo il modello per la creazione di un oggetto (DOM)
const form = document.getElementById("formShop"); //abbiamo il nodo del form (oggetto js)
const reset = document.querySelector(".form-reset");
const petsList = document.querySelector(".petsList");
class Pet {
  constructor(name, Owner, species, breed) {
    this.petName = name;
    this.OwnerName = Owner;
    this.species = species;
    this.breed = breed;
  }
  static compareTwoAnimals(animal1, animal2) {
    if (animal1.OwnerName === animal2.OwnerName) {
      return true;
    } else {
      return false;
    }
  }
}

//5)creo un array per poter farlo rimanere in memoria più a lungo possibile
const pets = [];
//3) applicazione di evento sul Nodo del DOM

//form.addEventListener("submit", function (event) {
//event.preventDefault(); // Prevengo gli eventi di default del browser
//});

form.onsubmit = function (event) {
  event.preventDefault();

  const { name, Owner, species, breed } = event.target.elements; //

  //4) istanziazione di classe ===> creazione di oggetto, con i dati raccolti del form
  const animal = new Pet(name.value, Owner.value, species.value, breed.value); //rappresentauna stringa quando metto.value;

  //pusho qui l'Array
  pets.push(animal);
  generateNewLi();
};

resetBtn.onclick = function () {
  const hasConfirmed = confirm("sei sicuro di voler resettarre il form?");

  if (hasConfirmed) {
    form.reset();
    console.log("FORM RESET");
  } else {
    console.log("FORM NOT RESET");
  }
};

const generateNewLi = function () {
  petsList.innerHTML = ""; //svuotiamo la lista PRIMA di cominciare una nuova li
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = `nome: $(pet.petName), proprietario: $(pet.Ownername), è un $(pet.species) $(pet.breed)`;

    petsList.appendChild(newLi);
  });
};
