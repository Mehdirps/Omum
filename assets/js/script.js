const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

let compteur = 0;
let timer, elements, slides, slideWidth

window.onload = () => {
    const diapo = document.querySelector(".slider")

    elements = document.querySelector(".elements")

    slides = Array.from(elements.children)

    slideWidth = diapo.getBoundingClientRect().width

    let next = document.querySelector(".right")
    let prev = document.querySelector(".left")

    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)

    // timer = setInterval(slideNext, 4000)

    // diapo.addEventListener("mouseover", stopTimer)
    // diapo.addEventListener("mouseout", startTimer)

    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    });

    var slideArray = document.querySelectorAll('.slider-image');
    let sliderCounter = document.querySelector('.slider-count');

    for (let i = 0; i < slideArray.length; i++) {
        sliderCounter.insertAdjacentHTML('beforeend', '<span class="count"></span>');
    }

    var btns = document.querySelectorAll('.count');
    btns[0].classList.toggle('selected')
}

function slideNext() {
    compteur++

    if (compteur == slides.length) {
        compteur = 0
    }

    var btns = document.querySelectorAll('.count');

    for (btn of btns) {
        btn.classList.remove('selected')
    }
    btns[compteur].classList.toggle('selected')

    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

function slidePrev() {
    compteur--

    if (compteur < 0) {
        compteur = slides.length - 1
    }

    var btns = document.querySelectorAll('.count');

    for (btn of btns) {
        btn.classList.remove('selected')
    }
    btns[compteur].classList.toggle('selected')

    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

// function stopTimer() {
//     clearInterval(timer)
// }

// function startTimer() {
//     timer = setInterval(slideNext, 4000)
// }