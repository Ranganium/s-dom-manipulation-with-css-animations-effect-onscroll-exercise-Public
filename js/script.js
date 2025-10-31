"use strict";

const sections = document.querySelectorAll("section");

// tager fat om browserwindow og gør noget når der scrolles
window.onscroll = () => {
  sections.forEach((sec) => {
    // Får nuværende scroll position
    let scrollDistance = window.scrollY;

    // Får sektionens position fra toppen
    let secDistance = sec.offsetTop;

    // Hvis sektionen er kommet ind i synsfeltet, tilføjes 'show-animate' ellers fjernes
    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

const sectionOne = document.querySelector(".sec1");

// Tilføj scale animation ved mouseover (sikre os at elementet findes først)
if (sectionOne) {
  sectionOne.addEventListener("mouseover", function () {
    this.classList.add("scale");
  });

  // Fjern scale animation ved mouseout
  sectionOne.addEventListener("mouseout", function () {
    this.classList.remove("scale");
  });
} else {
  // Hjælpsom debug-meddelelse hvis strukturen ændres
  console.warn(
    ".sec1 element not found — mouseover scale listeners not attached."
  );
}

const bearImage = document.getElementById("bearElem");
const dogImage = document.getElementById("dogElem");
const horseImage = document.getElementById("horseElem");

const soundBear = new Audio();
soundBear.src = "/sound/bear-sound.mp3";
const soundDog = new Audio();
soundDog.src = "../sound/dog-sound.mp3";
const soundHorse = new Audio();
soundHorse.src = "../sound/horse-sound.mp3";

if (bearImage) {
  bearImage.addEventListener("click", () => {
    soundBear.play();
  });
  if (bearImage) {
}

if (dogImage) {
  dogImage.addEventListener("click", () => {
    soundDog.play(), dogElem.classList.add("anim-scale");
  });
}

if (horseImage) {
  horseImage.addEventListener("click", () => {
    soundHorse.play(), horseElem.classList.add("anim-scale");
  });
}