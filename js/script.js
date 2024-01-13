window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar');
    let scrollPosition = document.documentElement.scrollTop;

    if(scrollPosition > 0){
        navbar.classList.add('bg-textdark');
    }
    else {
        navbar.classList.remove('bg-textdark');
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
