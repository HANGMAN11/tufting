
const menuBtn = document.getElementById("menu__btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.getElementById("i")

menuBtn.addEventListener('click', (e)=>{
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line": "ri-menu-line")
})


navLinks.addEventListener("click", (e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
})

document.addEventListener('click', (e)=>{
    if(!navLinks.contains(e.target) && !menuBtn.contains(e.target)){
        navLinks.classList.remove("open")
    }
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
};

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 500
});

ScrollReveal().reveal(".header__container a", {
    ...scrollRevealOption,
    delay: 1000
});

new Swiper('.card-wrapper', {
   
    loop: true,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
        1700:{
            slidesPerView: 4
        }
    }
  });
  
document.addEventListener("DOMContentLoaded", ()=>{
    const buttons = document.querySelectorAll(".nav__actions button");
    const elements = document.querySelectorAll("[data-translate]");

    function setLanguage(lang){
        elements.forEach(el =>{
            const key = el.getAttribute("data-translate");
            if(translations[lang][key]){
                el.textContent = translations[lang][key];
            }
        });
        document.querySelector("input[name='name']").placeholder = translations[lang]["namePlaceholder"];
        document.querySelector("input[name='email']").placeholder = translations[lang]["emailPlaceholder"];
        document.querySelector("textarea[name='message']").placeholder = translations[lang]["messagePlaceholder"];

        localStorage.setItem("selectedLanguage", lang);
    }

    buttons.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            const lang = btn.classList.contains("german") ? "de" : 
            btn.classList.contains("english") ? "en" : "ru";
            setLanguage(lang)
        });
    });

    const savedLanguage = localStorage.getItem("selectedLanguage") || "de";
    setLanguage(savedLanguage)
})
