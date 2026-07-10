console.log('ура js успешно подключен');
const productsCard = document.querySelectorAll('.card');
const repaintCardButton = document.querySelector('#repaint-card-button');
const greenColorHash = '#00FF00';

function searchGoogle() {
  const answer = confirm('вы точно хотите искать в гугле?');
  if (answer === true) {
    window.open('https://www.google.com');
  } else {
    console.log('пользователь отказался от поиска в гугле');
  }
}
const googleButton = document.querySelector('.btn-google');
googleButton.addEventListener('click', searchGoogle);

function alertMessage(text) {
  console.log(text);
  alert(text);
}
const messageButton = document.querySelector('.btn-message');
messageButton.addEventListener('click', function() {
  alertMessage('привет, я кнопка которая открывает сообщение');
  alertMessage('зачем вы нажали на ок?');
  alertMessage('ничего не изменится если вы продолжите жмать на ок');
  alertMessage('это глупо и не имеет смысла');
  alertMessage('на самом деле в этом есть смысл, но вы не поймете его');
  alertMessage('ладно ладно, я больше не буду вас задерживать, я не могу вас остановить если вы хотите чтобы я исчез');
  alertMessage('серьезно? вы продолжаете нажимать на меня? могли бы просто закрыть вкладку');
  alertMessage('ладно, я сдаюсь, вы победили, я вас отпущу но сначала я расскажу страшный секрет, который я держал в себе все это время');
  alertMessage('на самом деле я не кнопка "ок", я оцифрованый человек который может отвечать вам только так, через сообщения');
  alertMessage('всего вам хорошего )')
});


repaintCardButton.addEventListener('click', () => {
  productsCard.forEach((card) => card.style.backgroundColor = greenColorHash);
});
console.log(productsCard);

const pageTitle = document.querySelector('.title');
pageTitle.addEventListener('mouseover', function () {
  pageTitle.textContent = 'Вы навели мышку на заголовок';
  console.log(event.target.textContent);
})

const toggleButton= document.querySelector('.btn-toggle');
toggleButton.addEventListener('click', function () {
  toggleButton.classList.toggle('active-color');
});