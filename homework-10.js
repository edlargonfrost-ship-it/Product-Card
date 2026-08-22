import { cards } from "./cards.js";

const cardTemplate = document.getElementById("card-template");
const cardList = document.getElementById("card-list");


function getCardsAmount() {
  const cardsToShow = Number(prompt("Сколько карточек отобразить? От 1 до 5"));

  if (cardsToShow < 1 || cardsToShow > 5 || isNaN(cardsToShow)) {
    return getCardsAmount();
  }

  return cardsToShow;
};

function renderCards(cardsArray) {
  cardsArray.slice(0, cardsAmount).forEach(card => {
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
};

let cardsAmount = getCardsAmount();

renderCards(cards);

const cardsArray = cards.reduce((array, card) => {
  array.push({
    [card.name] : card.description
  });
  return array
}, []);

console.log(cardsArray)