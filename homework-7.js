function getTemp(city, temp) { 
  console.log(`сейчас в городе ${city} температура ${temp} градусов по цельсию`)
}

getTemp ('кувейт', 40);


const speedOfLight = 299792458

function getSpeed (speed) {
  if (speed > speedOfLight) {
    console.log('сверхсветовая скорость')
  }
}

getSpeed (299792459);


function buyProduct(product, price, budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {
    console.log(`Вам не хватает ${price - budget}$, пополните баланс`)
  }
}

buyProduct("HyperX cloud 2 wireless", 15000, 20000);


function showFact (programming) {
  console.log(`javascript это ${programming}`);
}

showFact ("реально крутая вещь");


const lost = 4815162342
let char = "ghost rider"
var userName = "rerur"