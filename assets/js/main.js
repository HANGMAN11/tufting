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
  