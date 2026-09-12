const modalController = ({ modal, btnOpen, btnClose }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: 300ms ease-in-out;
  `;

  const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest(btnClose)) {
      modalElem.style.visibility = 'hidden';
      modalElem.style.opacity = 0;
      document.body.classList.remove("overlay")
    }
  }
  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    document.body.classList.add("overlay")
  };

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  modalElem.addEventListener('click', closeModal);
};

modalController({
  modal: '.modal_registration',
  btnOpen: '.modal__registration-button',
  btnClose: '.modal__exit'
})

modalController({
  modal: '.modal_login',
  btnOpen: '.modal__login-button',
  btnClose: '.modal__exit'
})

const formEmail = document.querySelectorAll("form");

console.log(formEmail);
let data;
formEmail.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    data = Object.fromEntries(formData.entries());
    console.log(data);
    console.log(event);
    const date = data.createdOn = new Date()
    console.log(date)
  });
});

const form = document.querySelector('.modal_registration form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = document.querySelector('#password').value;
  const secondPassword = document.querySelector('#second-password').value;

  if (password !== secondPassword || !form.checkValidity()) {
    alert('Регистрация отклонена');
  } else {

    const user = data;
    console.log(user)
    document.querySelector('.modal_registration').style.visibility = 'hidden';
    document.querySelector('.modal_registration').style.opacity = 0;
    document.body.classList.remove("overlay");
  }
});
