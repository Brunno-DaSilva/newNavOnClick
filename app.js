// In Branch School tab
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

/******************
 *
 * On click event to help keyboard only users
 *
 * ****************/

const news = document.getElementById("news");
const about = document.getElementById("about");
// const school = document.getElementById("school");
// const employment = document.getElementById("employment");

let display_hide_El_news = document.getElementById("display__onClick_news");
let display_hide_El_about = document.getElementById("display__onClick_about");
// let display_hide_El_school = document.getElementById("display__onClick_school");
// let display_hide_El_employment = document.getElementById(
//   "display__onClick_employment"
// );

const lastEl_news = document.getElementById("lastEl_news");
const lastEl_about = document.getElementById("lastEl_about");
const lastEl = document.getElementById("lastEl_news");
// const lastEl = do  cument.getElementById("lastEl_news");

news.addEventListener("click", () => {
  showNavItems(display_hide_El_news);
});
about.addEventListener("click", () => {
  showNavItems_about(display_hide_El_about);
});

function showNavItems(x) {
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.flexDirection = "column";
    x.style.minWidth = "20rem";
    x.style.padding = "0.5rem";
    x.style.boxShadow = `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)`;
  } else {
    x.style.display = "none";
  }
}

function showNavItems_about(x) {
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.flexDirection = "column";
    x.style.minWidth = "20rem";
    x.style.padding = "0.5rem";
    x.style.boxShadow = `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)`;
  } else {
    x.style.display = "none";
  }
}

// Last element gets a focus out event
function focusOut(x) {
  x.style.display = "none";
  console.log("Focus out");
}

lastEl_news.addEventListener("focusout", () => {
  focusOut(display_hide_El_news);
});

lastEl_about.addEventListener("focusout", () => {
  focusOut(display_hide_El_about);
});
