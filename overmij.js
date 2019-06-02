function randomGetal(min, max){
min = Math.ceil(min);
max = Math.floor(max);
let Getal = Math.floor(Math.random() * (max - min + 1)) + min;
return Getal;
}

let mijnNavigatie = document.querySelector("nav");
function  myfunction(X){
  X.classList.toggle("change");
  mijnNavigatie.classList.toggle("open");
}

let mijnHamburger = document.querySelector(".hamburger");
let mijnParagraaf1 = document.querySelector(".intro1");
let mijnParagraaf2 = document.querySelector(".intro2");
let mijnFoto = document.querySelector(".foto");
let mijnParagraaf3 = document.querySelector(".intro3");
let mijnParagraaf4 = document.querySelector(".intro4");
let mijnParagraaf5 = document.querySelector(".intro5");
let mijnParagraaf6 = document.querySelector(".intro6");
let mijnFoto2 = document.querySelector(".foto2");
let mijnParagraaf7 = document.querySelector(".intro7");
let mijnParagraaf8 = document.querySelector(".intro8");
let mijnFoto3 = document.querySelector(".foto3");
let mijnParagraaf9 = document.querySelector(".intro9");
let mijnParagraaf10 = document.querySelector(".intro10");
let mijnFoto4 = document.querySelector(".foto4");
let mijnParagraaf11 = document.querySelector(".intro11");
let mijnParagraaf12 = document.querySelector(".intro12");
window.addEventListener("scroll", function() {
if (window.pageYOffset > 550) { mijnHamburger.classList.add("hamburgerFixed");
mijnNavigatie.classList.add("hamburgerFixed");
} else if (window.pageYOffset < 650){ mijnHamburger.classList.remove("hamburgerFixed");
}
if (window.pageYOffset > 20) {
  mijnParagraaf1.classList.add("opacity1");
}
if (window.pageYOffset > 330) {
  mijnFoto.classList.add("opacity1");
}
if (window.pageYOffset > 530) {
  mijnParagraaf3.classList.add("opacity1");
}
if (window.pageYOffset > 830) {
  mijnParagraaf4.classList.add("opacity1");
}
if (window.pageYOffset > 1030) {
  mijnParagraaf5.classList.add("opacity1");
}
if (window.pageYOffset > 1250) {
  mijnParagraaf6.classList.add("opacity1");
  mijnFoto2.classList.add("opacity1");
}
if (window.pageYOffset > 1300) {
  mijnParagraaf7.classList.add("opacity1");
}
if (window.pageYOffset > 1650) {
  mijnParagraaf8.classList.add("opacity1");
  mijnFoto3.classList.add("opacity1");
}
if (window.pageYOffset > 1800) {
  mijnParagraaf9.classList.add("opacity1");
}
if (window.pageYOffset > 2000) {
  mijnParagraaf10.classList.add("opacity1");
  mijnFoto4.classList.add("opacity1");
}
if (window.pageYOffset > 2100) {
  mijnParagraaf11.classList.add("opacity1");
}
if (window.pageYOffset > 2100) {
  mijnParagraaf12.classList.add("opacity1");
}

})
