const search__results = document.getElementById("search__results");
const searchBar = document.getElementById("input");

/* get ref of the retrieved  data made globally available
to be used anywhere in the code.*/
let hpCharacters = [];

const loadCharacters = async () => {
  try {
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
  const url = `https://www.friscoisd.org/sc/`;
  const NO_DATA_FOUND = `<p>No Data Found </p>`;

  const htmlString = characters
    .map((character) => {
      return `
            <li class="character">
                <a class="search__link" href="${url}${character.u}" >${character.t}</a>
            </li>
        `;
    })
    .join("");

  if (searchBar.length === 0) {
    search__results.innerHTML = NO_DATA_FOUND;
  } else {
    search__results.innerHTML = htmlString;
  }
};

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

loadCharacters();

if (searchBar.length === 0) {
  search__results.innerHTML = "";
}
