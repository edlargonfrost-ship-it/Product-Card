import { cards } from "./cards.js";

const cardTemplate = document.getElementById("card-template");
const cardList = document.getElementById("card-list");

const cardsToShow = Number(prompt("Сколько карточек отобразить? От 1 до 5"));

console.log("Ввёл:", cardsToShow);
console.log("Всего карточек:", cards.length);
console.log("Будет показано:", cards.slice(0, cardsToShow).length);

cards.slice(0, cardsToShow).forEach(card => {

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
});

const cardsArray = cards.reduce((array, card) =>{
  array.push({
    name: card.name,
    description: card.description
  });
  return array
}, []);