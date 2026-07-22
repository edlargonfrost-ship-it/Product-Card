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
}

const carSpecs = {
  mark: "toyota",
  model: "corolla",
  year: "2026",
  color: "white",
  transmition: "CVT",
}

carSpecs.owner = user

function addMaxSpeed (carSpecs) {
  carSpecs.maxSpeed??= 180
}

addMaxSpeed (carSpecs)
console.log (carSpecs)

carSpecs.owner = user

function CheckMark (object, key) {
  console.log(object[key])
}

CheckMark(carSpecs, "mark")

const theWitcher = {
  name: "The Witcher",
  Author: "andrzej sapkowski",
  year: 1986,
  color: "colored",
  genre: "dark fantasy"
}

const LOTR = {
  name: "The lord of the rings",
  Author: "John Ronald Reuel Tolkien",
  year: 1954,
  color: "black",
  genre: "fantasy"
}

const Eragon = {
  name: "eragon",
  Author: "kristopher paolini",
  year: 2003,
  color: "sapphire",
  genre: "fantasy"
}

const dune = {
  name: "Dune",
  author: "Frank Herbert",
  year: 1965,
  color: "brown",
  genre: "science fiction"
}

const library = [ 
  theWitcher,
  LOTR,
  Eragon
]

library.push(dune)

console.log(library)


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
]

const mainLibrary = [
  ...library,
  ...witcherBooks
]

console.log(mainLibrary)

const identifyRareBook = mainLibrary.map(function(book) {
  if (book.year > 2000) {
    return true
  } else {
    return false
  }
})

console.log(identifyRareBook)