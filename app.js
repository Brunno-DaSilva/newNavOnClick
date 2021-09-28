document.addEventListener("DOMContentLoaded", () => {
  const logo_lg = document.getElementById("logo-lg");

  /*********************************************
   *
   * Inner School tab
   *
   * ********************************************/

  function onTabClick(event) {
    let activeTabs = document.querySelectorAll(".active");

    // deactivate existing active tab and panel
    // for( let i = 0; i < activeTabs.length; i++) {
    //   activeTabs[i].className = activeTabs[i].className.replace('active', '');
    // }

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
   * Search Icons
   *
   * ********************************************/

  const trigger_search = document.querySelector(".trigger_search");
  const input = document.querySelector(".input");
  const inputSearchFocus = document.getElementById("input");
  const search__results_container = document.getElementById(
    "search__results_container"
  );

  trigger_search.addEventListener("click", () => {
    if (!input.classList.contains("input-open")) {
      input.classList.add("input-open");
      trigger_search.innerHTML = `<i style="color: #ef8469" aria-label="Close search " tabindex="0" class='fas fa-times icon'>  </i>`;
      inputSearchFocus.focus();
    } else {
      input.classList.remove("input-open");
      trigger_search.innerHTML = `<i aria-label="Click to open the search and just tart typing" tabindex="0" class='fas fa-search icon'>  </i>`;
    }
  });

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

  let navOpen = false;

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
    console.log(element);
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
  };
});
