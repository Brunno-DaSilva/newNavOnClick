const search__results = document.getElementById("search__results");
const searchBar = document.getElementById("input");

// get ref of the retrieved  data made globally available
// to be used anywhere in the code.
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const userInput = e.target.value.toLowerCase();
  console.log(userInput);
  const filterChar = hpCharacters.filter((character) => {
    return (
      character.t.toLowerCase().includes(userInput) ||
      character.u.toLowerCase().includes(userInput)
    );
  });
  displayCharacters(filterChar);
});

const loadCharacters = async () => {
  try {
    // const res = await fetch("https://hp-api.herokuapp.com/api/characters");
    const res = await fetch(
      "https://www.friscoisd.org/searchData/searchTerms.json"
    );
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
            <li class="character">
                <h2>${character.t}</h2>
                <p>House: ${character.u}</p>
            </li>
        `;
    })
    .join("");
  search__results.innerHTML = htmlString;
};

loadCharacters();
