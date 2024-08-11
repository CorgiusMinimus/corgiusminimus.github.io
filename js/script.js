// AOS

AOS.init();

window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar');
    let scrollPosition = document.documentElement.scrollTop;

    if(scrollPosition > 0){
        navbar.classList.add('bg-thememain');
    }
    else {
        navbar.classList.remove('bg-thememain');
    }
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('about-mask-animation');
            return;
        }

        entry.target.classList.remove('about-mask-animation');

    })
})

observer.observe(document.getElementById('about-mask'));

// load galleries

// hero image 

let heroCount = 0
let divbg = document.getElementById('hero-img-container')

setInterval(() => {
    if(heroCount < 2){
        heroCount++
    }
    else {
        heroCount = 0
    }

    switch(heroCount){
        case 0:
            divbg.style.backgroundColor = "#3888FF"
            break;
        case 1:
            divbg.style.backgroundColor = "#38ff59"
            break;
        case 2:
            divbg.style.backgroundColor = "#ff5338"
            break;
    }

}, 3000);

function changeHero() {
    
}
