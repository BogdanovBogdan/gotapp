function getResourceId(url) {
  const splittingUrl = url.split("/");
  return splittingUrl[splittingUrl.length - 1];
}

export default class Api {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    const json = await res.json();
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${json}`);
    }
    return json;
  }

  getAllCharacters = async () => {
    const characters = await this.getResource(`/characters?page=5&pageSize=10`);
    return characters.map(this._transformCharacter);
  }

  getCharacter = async (id) => {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }

  getAllBooks = async () => {
    const books = await this.getResource(`/books?page=5&pageSize=10`)
    return books.map(this._transformBook);
  }

  getBook = async (id) => {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBook(book);
  }

  getAllHouses = async () => {
    const houses = await this.getResource(`/houses?page=5&pageSize=10`);
    return houses.map(this._transformHouse);
  }

  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house);
  }

  _transformCharacter = (character) => {
    return {
      id: getResourceId(character.url),
      nameObject: 'Character',
      name: character.name,
      gender: character.gender,
      born: character.born,
      died: character.died,
      culture: character.culture,
    };
  };

  _transformHouse = (house) => {
    return {
      id: getResourceId(house.url),
      nameObject: 'House',
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      ancestralWeapons: house.ancestralWeapons,
    };
  };

  _transformBook = (book) => {
    return {
      id: getResourceId(book.url),
      nameObject: 'Book',
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released,
    };
  };
}
