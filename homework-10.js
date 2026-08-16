import { cards } from "./cards.js";
const cardTemplate = document.getElementById("card-template");
const cardList = document.getElementById("card-list");

cards.forEach(card => {
  const cardFilling = cardTemplate.content.cloneNode(true);

  cardFilling.querySelector(".card__image").src = card.image;
  cardFilling.querySelector(".card__image").alt = card.alt;
  cardFilling.querySelector(".card__category").textContent = card.category;
  cardFilling.querySelector(".card__name").textContent = card.name;
  cardFilling.querySelector(".card__description").textContent = card.description;
  cardFilling.querySelector(".card__price-value").textContent = card.price;

  const compoundList = cardFilling.querySelector(".compound__list");

  card.compound.forEach(compound => {
    const li = document.createElement("li");
    li.textContent = compound;
    compoundList.append(li);
  });

  cardList.appendChild(cardFilling);
  console.log(compoundList);
  console.log(card.compound);
});


const howManyCardsShow = prompt("сколько карточек отобразить?")
console.log(howManyCardsShow)

function card(array){
  
}

card(cards)