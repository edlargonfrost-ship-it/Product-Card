function getTemp(city, temp) { 
  console.log(`сейчас в ${city} температура - ${temp} градусов по цельсию`)
}

getTemp ('X', 'Y');

const SPEED_OF_LIGHT = 299792458

function getSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log('сверхсветовая скорость')
  } else if (speed === SPEED_OF_LIGHT) {
    console.log("скорость света")
  } else if (SPEED_OF_LIGHT > speed) {
    console.log("субсветовая скорость")
  }
}

getSpeed (299792459);

function buyProduct(budget) {
  let price = 15000
  let product = "HyperX cloud 2 wireless"
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {
    console.log(`Вам не хватает ${price - budget}$, пополните баланс`)
  }
}

buyProduct(20000);

function showFact (programming) {
  console.log(`javascript это ${programming}`);
}

showFact ("реально крутая вещь");

const lost = 4815162342
let char = "ghost rider"
var userName = "rerur"