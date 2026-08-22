const user = {
  name: "Ahmad",
  lastName: "Triki",
  mail: "edlargonfrost@gmail.com",
  job: "frontend developer",
  position: "junior",
  country: "Russia",
  city: "Ufa",
  relationship: "single",
  phone: "+9659809599"
};

const carSpecs = {
  mark: "toyota",
  model: "corolla",
  year: "2026",
  color: "white",
  transmition: "CVT",
};

carSpecs.owner = user;

function addMaxSpeed(carSpecs) {
  if (!Object.hasOwn(carSpecs, "maxSpeed")){
    carSpecs.maxSpeed = 180
  }
}

addMaxSpeed(carSpecs);
console.log(carSpecs);

function checkMark(object, key) {
  console.log(object[key])
}

checkMark(carSpecs, "mark");

const theWitcher = {
  name: "The Witcher",
  Author: "andrzej sapkowski",
  year: 1986,
  color: "colored",
  genre: "dark fantasy"
};

const lotr = {
  name: "The lord of the rings",
  Author: "John Ronald Reuel Tolkien",
  year: 1954,
  color: "black",
  genre: "fantasy"
};

const eragon = {
  name: "eragon",
  Author: "kristopher paolini",
  year: 2003,
  color: "sapphire",
  genre: "fantasy"
};

const dune = {
  name: "Dune",
  author: "Frank Herbert",
  year: 1965,
  color: "brown",
  genre: "science fiction"
};

const library = [ 
  theWitcher,
  lotr,
  eragon
];

library.push(dune);

console.log(library);

const witcherBooks = [
  {
    name: "Последнее желание",
    author: "Анджей Сапковский",
    year: 1993,
    genre: "dark fantasy",
    type: "сборник рассказов"
  },
  {
    name: "Меч Предназначения",
    author: "Анджей Сапковский",
    year: 1992,
    genre: "dark fantasy",
    type: "сборник рассказов"
  },
  {
    name: "Кровь эльфов",
    author: "Анджей Сапковский",
    year: 1994,
    genre: "dark fantasy",
    type: "роман"
  },
  {
    name: "Час Презрения",
    author: "Анджей Сапковский",
    year: 1995,
    genre: "dark fantasy",
    type: "роман"
  },
  {
    name: "Крещение огнём",
    author: "Анджей Сапковский",
    year: 1996,
    genre: "dark fantasy",
    type: "роман"
  },
  {
    name: "Башня Ласточки",
    author: "Анджей Сапковский",
    year: 1997,
    genre: "dark fantasy",
    type: "роман"
  },
  {
    name: "Владычица Озера",
    author: "Анджей Сапковский",
    year: 1999,
    genre: "dark fantasy",
    type: "роман"
  },
  {
    name: "Сезон гроз",
    author: "Анджей Сапковский",
    year: 2013,
    genre: "dark fantasy",
    type: "роман-приквел"
  }
];

const mainLibrary = [
  ...library,
  ...witcherBooks
];

console.log(mainLibrary);

const bookWithIsRareProperty = mainLibrary.map(function(book){
  return {
    ...book,
    isRare: book.year > 2000,
    forzaHorizon: "good game"
  };
});

console.log("!!!",bookWithIsRareProperty);