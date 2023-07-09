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