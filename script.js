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


window.addEventListener("resize", function(){
if (window.innerWidth === 700) {
  let mijnAchtergrondAfb = document.querySelector(".achtergrondafb img");
  let mijnArray = ["afbeeldingen//afb1.png","afbeeldingen//afb2.jpg","afbeeldingen//afb3.jpg","afbeeldingen//afb4.jpg"];
  setInterval(veranderAchtergrond, 3000)
  function veranderAchtergrond(){
       mijnAchtergrondAfb.setAttribute("src",mijnArray[randomGetal(0,3)])
     }
}
}
)



let mijnHamburger = document.querySelector(".hamburger");
window.addEventListener("scroll", function() {
if (window.pageYOffset > 950) { mijnHamburger.classList.add("hamburgerFixed");
mijnNavigatie.classList.add("hamburgerFixed");
} else if (window.pageYOffset > 650){ mijnHamburger.classList.remove("hamburgerFixed");
} })
