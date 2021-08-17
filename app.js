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

trigger_search.addEventListener("click", () => {
  if (!input.classList.contains("input-open")) {
    input.classList.add("input-open");
    trigger_search.innerHTML = "<i class='fas fa-times'>  </i>";
  } else {
    input.classList.remove("input-open");
    trigger_search.innerHTML = "<i class='fas fa-search'>  </i>";
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
const btn_close = document.getElementById("btn_close");

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
      var dropdowns = document.getElementsByClassName("display__onClick_about");
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

btn_close.addEventListener("click", () => {
  hideMenuItem(onClick_schools, classItem_schools);
});

// const about = document.getElementById("about");
// // const school = document.getElementById("school");
// // const employment = document.getElementById("employment");

// let display_hide_El_news = document.getElementById("display__onClick_news");
// let display_hide_El_about = document.getElementById("display__onClick_about");
// // let display_hide_El_school = document.getElementById("display__onClick_school");
// // let display_hide_El_employment = document.getElementById(
// //   "display__onClick_employment"
// // );

// const lastEl_news = document.getElementById("lastEl_news");
// const lastEl_about = document.getElementById("lastEl_about");
// const lastEl = document.getElementById("lastEl_news");
// // const lastEl = do  cument.getElementById("lastEl_news");

// news.addEventListener("click", () => {
//   showNavItems(display_hide_El_news);
// });
// about.addEventListener("click", () => {
//   showNavItems_about(display_hide_El_about);
// });

// function showNavItems(x) {
//   if (x.style.display === "none") {
//     x.style.display = "flex";
//     x.style.flexDirection = "column";
//     x.style.minWidth = "20rem";
//     x.style.padding = "0.5rem";
//     x.style.boxShadow = `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)`;
//   } else {
//     x.style.display = "none";
//   }
// }

// function showNavItems_about(x) {
//   if (x.style.display === "none") {
//     x.style.display = "flex";
//     x.style.flexDirection = "column";
//     x.style.minWidth = "20rem";
//     x.style.padding = "0.5rem";
//     x.style.boxShadow = `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)`;
//   } else {
//     x.style.display = "none";
//   }
// }

// // Last element gets a focus out event
// function focusOut(x) {
//   x.style.display = "none";
//   console.log("Focus out");
// }

// lastEl_news.addEventListener("focusout", () => {
//   focusOut(display_hide_El_news);
// });

// lastEl_about.addEventListener("focusout", () => {
//   focusOut(display_hide_El_about);
// });
