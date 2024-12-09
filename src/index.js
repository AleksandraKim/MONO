import './styles/css/styles.css';
import MenuImage from "../src/assets/images/Меню.svg";
import ImageSravn from "../src/assets/images/Сравение.svg";
import ImagePoisk from "../src/assets/images/Поиск.svg";
import ImageLogo from "../src/assets/images/Group.svg";
import ImageLogoSecond from "../src/assets/images/Лого.svg";

const menu = document.querySelector(".header__nav-menu");
const sravn = document.querySelector(".header__nav-sravn");
const poisk = document.querySelector(".header__nav-poisk");
const logo = document.querySelector(".header__nav-logo");
const texts = document.querySelectorAll('.inputs__text');
const textarea = document.querySelector('.textarea');

const LogoImage = document.createElement('img');
LogoImage.src = ImageLogo;
logo.appendChild(LogoImage);

const sravnImage = document.createElement('img');
sravnImage.src = ImageSravn;
sravn.appendChild(sravnImage);

const poiskImage = document.createElement('img');
poiskImage.src = ImagePoisk;
poisk.appendChild(poiskImage);

const img = document.createElement('img');
img.src = MenuImage;
menu.appendChild(img);

window.addEventListener("resize", function () {
   if (window.matchMedia("(min-width:400px) and (max-width: 800px)").matches) {
      LogoImage.src = ImageLogoSecond
   } else if (window.matchMedia("(min-width:800px)").matches) {
      LogoImage.src = ImageLogo
   } else if (window.matchMedia("(max-width:400px)").matches) {
      LogoImage.src = ImageLogo
   }})

document.querySelector('form').onsubmit = function (event) {
   event.preventDefault();
   for (let text of texts) {
      if (text.firstElementChild.value === "") {
         text.firstElementChild.classList.add("error");
         text.firstElementChild.classList.remove("blur");
         text.lastElementChild.classList.add("error");}
      if (textarea.value === "") {
         textarea.classList.add("error");
         textarea.classList.remove("blur");
      }}}

for (let text of texts) {
   text.firstElementChild.addEventListener('input', function () {
      if (text.firstElementChild.value !== "") {
         text.firstElementChild.classList.add("check");
         text.lastElementChild.classList.add("template");
         text.firstElementChild.classList.remove("error");
         text.lastElementChild.classList.remove("error");
      } else {
         text.firstElementChild.classList.remove("check");
         text.lastElementChild.classList.remove("template");
      }
   })
   text.firstElementChild.addEventListener('blur', function () {
      if (text.firstElementChild.value !== "") {
         text.firstElementChild.classList.add("blur");
      } else {
         text.firstElementChild.classList.remove("blur");
      }
   })
}

textarea.addEventListener('input', function () {
   if (textarea.value !== "") {
      textarea.classList.add("check");
      textarea.classList.remove("error");
   } else {
      textarea.classList.remove("check");
   }
})

textarea.addEventListener('click', function () {
   textarea.classList.remove("blur");
   textarea.classList.add("check");
   textarea.classList.remove("error");
   
})

textarea.addEventListener('blur', function () {
   textarea.classList.remove("check");
   textarea.classList.add("blur");
})




