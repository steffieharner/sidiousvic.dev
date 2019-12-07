// SELECTORS ////////////////////
const title = document.querySelector(".title");
const svTitle = document.querySelector("#sv-title");
const projectsTitle = document.querySelector("#projects-title");
const titleOverlay = document.querySelector(".title-overlay");
const projects = document.querySelector(".projects");
const nav = document.querySelector(".nav");
const pNav = document.querySelector(".pnav");
const body = document.querySelector("body");
const html = document.querySelector("html");
const vsSkullLogo = document.querySelector(".vskullogo");

// EVENT LISTENERS ////////////////////

// hide title on logo click
vsSkullLogo.addEventListener("click", e => {
  toggleTitle();
});
// change title on nav hover
nav.addEventListener("mouseover", e => {
  changeTitle(e);
});
// @SIDIOUSVIC on nav leave
nav.addEventListener("mouseleave", e => {
  svTitle.textContent = "@SIDIOUSVIC";
});
// @SIDIOUSVIC <-> JUST DO SH*T on click
titleOverlay.addEventListener("click", e => {
  if (title.textContent === "JUST DO SH*T.") title.textContent = "@SIDIOUSVIC";
  else if (title.textContent === "@SIDIOUSVIC")
    title.textContent = "JUST DO SH*T.";
});

// FUNCTIONS ////////////////////

// hide title
function titleToggler() {
  let bool = true;
  return () => {
    if (bool) {
      title.style.transition = "0.5s ease-in-out";
      title.style.opacity = 0;
      bool = false;
    } else {
      title.style.opacity = 1;
      bool = true;
    }
  };
}
let toggleTitle = titleToggler();

// change title text
function changeTitle(e) {
  let cl = e.target.classList;
  if (cl.contains("github")) svTitle.textContent = "DEVELOPER";
  else if (cl.contains("twitter")) svTitle.textContent = "TWEETER";
  else if (cl.contains("spotify")) svTitle.textContent = "AXEWIELDER";
  else if (cl.contains("behance")) svTitle.textContent = "DESIGNER";
  else if (cl.contains("medium")) svTitle.textContent = "INDITER";
  else if (cl.contains("linkedin")) svTitle.textContent = "HUSTLER";
}

// THREE.JS ////////////////////

// mouse coords
let mouseX = 0;
let mouseY = 0;
// 3D skull
const skull = new Skull();
skull.init();
// pause holding s key
document.body.onkeydown = function(e) {
  if (e.keyCode == 83) {
    skull.stop();
  }
};
// play releasing s key
document.body.onkeyup = function(e) {
  if (e.keyCode == 83) {
    skull.play();
  }
};
