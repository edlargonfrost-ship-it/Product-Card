function getTemp() {
  let city = 'кувейт'
  let temp = '40' 
  console.log(`сейчас в городе ${city} температура ${temp} градусов по цельсию`)
}

getTemp ();

function getSpeed () {
  const speedOfLight = 299792458
  let speed = 299792459
  if (speedOfLight < speed) {
    console.log('сверхсветовая скорость')
  }
}

getSpeed ();

function buyProduct(product, price, budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {
    console.log(`Вам не хватает ${price - budget}$, пополните баланс`)
  }
}

buyProduct("HyperX cloud 2 wireless", 15000, 20000);

let programming = "реально крутая вещь"
console.log(`javascript это ${programming}`);


const lost = 4815162342
let char = "ghost rider"
var name = "rerur"