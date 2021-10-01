// const search__results = document.getElementById("search__results");
// const searchBar = document.getElementById("input");
// const header = document.getElementsByTagName("header")[0];
// const clsChar = document.querySelectorAll(".character");

// const searchStates = async (searchText) => {
//   const res = await fetch(
//     "https://www.friscoisd.org/searchData/searchTerms.json"
//   );
//   const states = await res.json();

//   // Get match to current text input

//   let matches = states.filter((state) => {
//     const regex = new RegExp(`${searchText}`, "gi");
//     return state.t.match(regex) || state.u.match(regex);
//   });

//   if (searchText.length === 0) {
//     matches = [];
//     search__results.innerHTML = "";
//   }
//   displayDataHTML(matches);
// };

// // show data to HTML page
// const displayDataHTML = (matches) => {
//   if (matches.length > 0) {
//     const url = `https://www.friscoisd.org/sc/`;
//     const htmlData = matches
//       .map((match) => {
//         return `
//             <li tabindex="-1" class="character">
//                 <a tabindex="0" class="search__link" href="${url}${match.u}" >${match.t}</a>
//             </li>
//         `;
//       })
//       .join("");
//     search__results.innerHTML = htmlData;
//   }
// };

// const onFocusOut = (event) => {
//   event.target.value = "";
// };

// searchBar.addEventListener("input", () => searchStates(searchBar.value));
// header.addEventListener("focusout", onFocusOut);

// search__results.addEventListener("click", function (e) {
//   if (e.target && e.target.matches("li.character")) {
//     search__results.innerHTML = "";
//     alert("Click" + e.target.innerText);
//   }
// });
