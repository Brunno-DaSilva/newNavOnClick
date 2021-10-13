document.addEventListener("DOMContentLoaded", () => {
  const logo_lg = document.getElementById("logo-lg");

  /*********************************************
   *
   * Inner School tab
   *
   * ********************************************/

  function onTabClick(event) {
    let activeTabs = document.querySelectorAll(".active");

    activeTabs.forEach(function (tab) {
      tab.className = tab.className.replace("active", "");
    });

    // activate new tab and panel
    event.target.parentElement.className += " active";
    document.getElementById(event.target.href.split("#")[1]).className +=
      " active";
  }

  const element = document.getElementById("nav-tab");
  element.addEventListener("click", onTabClick, false);

  /*********************************************
   *
   * Search Icon
   *
   * ********************************************/

  const trigger_search = document.querySelector(".trigger_search");
  const input = document.querySelector(".input");
  const search__results = document.getElementById("search__results");
  const searchBar = document.getElementById("input");
  const header = document.getElementsByTagName("header")[0];
  const icons__search = document.getElementById("icons__search");

  const baseURL = "https://www.friscoisd.org/searchData/searchTerms.json";

  const searchTermsArr = [];

  trigger_search.addEventListener("click", () => {
    if (!input.classList.contains("input-open")) {
      input.classList.add("input-open");
      trigger_search.innerHTML = `
      <i 
      id="searchIcon"
      style="color: 
      #ef8469" 
      aria-label="Close search" 
      
      class='fas fa-times icon'>  </i>`;
      searchBar.focus();
    } else {
      input.classList.remove("input-open");
      trigger_search.innerHTML = `
      <i 
      id="searchIcon" 
      aria-label="Click to open the search and just tart typing" 
      
      class='fas fa-search icon'>  </i>`;
      console.log("searchIcon: ", searchIcon);
    }
  });

  function getSearchTermsData() {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        searchTermsArr.push(...data);
        init();
      })
      .catch((error) => {
        search__results.innerHTML = ` ${error}`;
      });
  }

  function init() {
    //html data to display in browser
    const htmlData = ({ u, t }) => {
      const url = `https://www.friscoisd.org/sc/`;
      return `<li tabindex="-1" class="character">
                  <a tabindex="0" class="search__link" href="${url}${u}" >${t}</a>
              </li>`;
    };

    //find Matches Regex
    const findMatches = (wordToMatch, searchTermsArr) => {
      return searchTermsArr.filter((data) => {
        //Regex
        // gi: pass the char typed and match globally regardless of caseType
        //
        const regex = new RegExp(wordToMatch, "gi");
        return data.t.match(regex);
      });
    };

    // Display Matches
    function displayMatches() {
      const findMatch = findMatches(this.value, searchTermsArr);

      const htmlDataToDisplay = findMatch
        .map((data) => {
          return htmlData(data);
        })
        .join("");

      if (htmlDataToDisplay.length > 0) {
        search__results.innerHTML = htmlDataToDisplay;
      } else {
        const urlFISD =
          "https://www.friscoisd.org/search-results?cx=017951229044668060468%3Anrd98uepiu8&cof=FORID%3A11&q=";

        searchBar.addEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            window.location.href = `${urlFISD} ${this.value}`;
          }
        });

        search__results.innerHTML = `
        <li tabindex="-1" class="character">
              <a 
              tabindex="0" 
              class="search__link" 
              href="${urlFISD} ${this.value}"> Go to: Frisco ISD Website Search page</a>
        </li>`;
      }
      if (
        this.value === "" ||
        this.value == 0 ||
        this.value === null ||
        this.value.length <= 1
      ) {
        search__results.innerHTML = "";
      }
    }

    searchBar.addEventListener("input", displayMatches);
  }

  /*const searchStates = async (searchText) => {
    const res = await fetch(
      "https://www.friscoisd.org/searchData/searchTerms.json"
    );
    const states = await res.json();

    // Get match to current text input

    let matches = states.filter((state) => {
      const regex = new RegExp(searchText, "gi");

      return state.t.match(regex) || state.u.match(regex);
    });

    if (searchText.length === 0) {
      console.log("MATCHS IF");
      matches = [];
      search__results.innerHTML = "";
    }
    if (searchText.length < 2) {
      matches = [];
      search__results.innerHTML = "";
    }
    displayDataHTML(matches);
  };*/

  // show data to HTML page

  /* const displayDataHTML = (matches) => {
=======
  const displayDataHTML = (matches) => {
>>>>>>> d39f6b329d52e74baa80ba064fb8fcd88b1f03a0
=======
  /*const displayDataHTML = (matches) => {
>>>>>>> 0e0d8bf7850901257a7b59b7f25310867454f6fc
    if (matches.length > 2) {
      const url = `https://www.friscoisd.org/sc/`;

      const htmlData = matches
        .map((match) => {
          return `
            <li tabindex="-1" class="character">
                <a tabindex="0" class="search__link" href="${url}${match.u}" >${match.t}</a>
            </li>
        `;
        })
        .join("");
      search__results.innerHTML = htmlData;
    }
  };*/

  const onFocusOut = (event) => {
    event.target.value = "";

    search__results.reset();
  };

  const clearData = () => {
    search__results.innerHTML = "";
    matches = [];
  };

  // searchBar.addEventListener("input", () => );

  header.addEventListener("focusout", onFocusOut);

  search__results.addEventListener("click", function (e) {
    if (e.target && e.target.matches("li.character")) {
      search__results.innerHTML = "";
      e.target.focus();
    }
  });

  //[ x ] Get arrow keys to work in a keydown event

  function focusTransferOnKeyDown(e) {
    const focusableInputElements = search__results.getElementsByTagName("a");
    const focusable = [...focusableInputElements];
    const index = focusable.indexOf(document.activeElement);
    let lastItem = focusable[focusable.length - 1];
    let nextIndex = 0;

    if (e.keyCode === 38 || e.keyCode === 37) {
      // up and left arrow
      e.preventDefault();
      nextIndex = index > 0 ? index - 1 : 0;
      focusableInputElements[nextIndex].focus();
    } else if (e.keyCode === 40 || e.keyCode === 39) {
      // down and right arrow
      e.preventDefault();
      nextIndex = index + 1 < focusable.length ? index + 1 : index;
      focusableInputElements[nextIndex].focus();

      if (document.activeElement === lastItem) {
        if (e.keyCode === 40 || e.keyCode === 39) {
          setTimeout(function () {
            trigger_search.focus();
          }, 2500);
        }
      }
    }
  }

  trigger_search.addEventListener("click", clearData);
  trigger_search.addEventListener("focus", clearData);
  icons__search.addEventListener("keydown", focusTransferOnKeyDown);

  /*********************************************
   *
   * On click event to help keyboard only users
   *
   * ********************************************/

  const btnNews = document.getElementById("btn__news");
  const btnAbout = document.getElementById("btn__about");
  const btnSchools = document.getElementById("btn__schools");
  const btnEmployment = document.getElementById("btn__employment");
  const btnClose = document.getElementById("btn__close");
  const btnMobileOpen = document.getElementById("btn__mobile_open");
  const btnMobileClose = document.getElementById("btn__mobile_close");

  const onClick_news = document.getElementById("display__onClick_news");
  const onClick_about = document.getElementById("display__onClick_about");
  const onClick_schools = document.getElementById("display__onClick_schools");
  const onClick_employment = document.getElementById(
    "display__onClick_employment"
  );

  const classItem_news = "show";
  const classItem_about = "show_about";
  const classItem_schools = "show_schools";
  const classItem_employment = "show_employment";

  function showMenuItem(containerID, classItem) {
    containerID.classList.toggle(`${classItem}`);
  }
  function hideMenuItem(containerID, classItem) {
    containerID.classList.remove(`${classItem}`);
  }

  btnNews.addEventListener("click", () => {
    hideMenuItem(onClick_about, classItem_about);
    hideMenuItem(onClick_schools, classItem_schools);
    hideMenuItem(onClick_employment, classItem_employment);
    showMenuItem(onClick_news, classItem_news);
    //Click outside the element close the modal
    window.onclick = function (event) {
      if (!event.target.matches("#btn__news")) {
        var dropdowns = document.getElementsByClassName("display__onClick");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  });

  btnAbout.addEventListener("click", () => {
    hideMenuItem(onClick_news, classItem_news);
    hideMenuItem(onClick_schools, classItem_schools);
    hideMenuItem(onClick_employment, classItem_employment);

    showMenuItem(onClick_about, classItem_about);
    //Click outside the element close the modal
    window.onclick = function (event) {
      if (!event.target.matches("#btn__about")) {
        var dropdowns = document.getElementsByClassName(
          "display__onClick_about"
        );
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show_about")) {
            openDropdown.classList.remove("show_about");
          }
        }
      }
    };
  });

  btnSchools.addEventListener("click", () => {
    hideMenuItem(onClick_news, classItem_news);
    hideMenuItem(onClick_about, classItem_about);
    hideMenuItem(onClick_employment, classItem_employment);

    showMenuItem(onClick_schools, classItem_schools);
  });

  btnEmployment.addEventListener("click", () => {
    hideMenuItem(onClick_news, classItem_news);
    hideMenuItem(onClick_about, classItem_about);
    hideMenuItem(onClick_schools, classItem_schools);
    showMenuItem(onClick_employment, classItem_employment);
    //Click outside the element close the modal
    window.onclick = function (event) {
      if (!event.target.matches("#btn__employment")) {
        var dropdowns = document.getElementsByClassName(
          "display__onClick_employment"
        );
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show_employment")) {
            openDropdown.classList.remove("show_employment");
          }
        }
      }
    };
  });

  btnClose.addEventListener("click", () => {
    hideMenuItem(onClick_schools, classItem_schools);
  });

  /*******************************************************
=====================================
==>        Mobile
=====================================
*******************************************************/

  btnMobileOpen.addEventListener("click", () => {
    document.getElementById("nav").style.left = "0%";
  });

  btnMobileClose.addEventListener("click", () => {
    console.log("mobileMenu btn work");
    document.getElementById("nav").style.left = "150%";
  });

  window.onload = function () {
    logo_lg.focus();
    getSearchTermsData();
  };
});
