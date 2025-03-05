import Button from "./components/Buttons/Buttons.js";
import Pagination from "./components/Buttons/Pagination.js";
import CharacterCard from "./components/CharacterCard/CharacterCard.js";

const cardContainer = getElement("card-container");
const searchBar = getElement("search-bar");
const navigation = getElement("navigation-container");

function getElement(datajs) {
  return document.querySelector(`[data-js="${datajs}"]`);
}
// States
let currentPage = 1;
const charactersPerPage = 25;
let allCharacters = [];
let filteredCharacters = [];
let maxPage = 20;

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchQuery = searchBar.elements.query.value;
  filteredCharacters = allCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  currentPage = 1;
  displayCharacters();
});

// set functionality pagination

const nextButton = Button("next");
nextButton.addEventListener("click", () => {
  if (currentPage < maxPage) {
    currentPage++;
    displayCharacters();
  }
});

const previousButton = Button("previous");
previousButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayCharacters();
  }
});

const pagination = Pagination();

navigation.append(previousButton, pagination, nextButton);

function updatePagination() {
  previousButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage * charactersPerPage >= allCharacters.length;
}

// fetch API

async function fetchData() {
  const response = await fetch(
    `https://bobsburgers-api.herokuapp.com/characters`
  );
  allCharacters = await response.json();
  filteredCharacters = allCharacters;

  displayCharacters();
}
// display Character Cards

function displayCharacters() {
  cardContainer.innerHTML = "";
  const startIndex = (currentPage - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  filteredCharacters
    .slice(startIndex, endIndex)
    .forEach((character) => cardContainer.append(CharacterCard(character)));
  pagination.textContent = `${currentPage} / ${maxPage}`;
  updatePagination();
}
fetchData();

// before code
//   const charactersWithA = data.filter((character) =>
//     character.name.toLowerCase().startsWith("a")
// );
// cardContainer.innerHTML= "";

//   data.slice(0, 50).forEach((character) =>
//     cardContainer.append(CharacterCard(character))
//   );
//   console.log(data);
// data.forEach((character) => character.name.startsWith("a"));
