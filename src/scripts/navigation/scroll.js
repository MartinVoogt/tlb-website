const scrollToElement = require('scroll-to-element');

const scroll = e => {
    e.preventDefault();
    let source = e.currentTarget.getAttribute('href'); 
    scrollToElement(source, {
        offset: 0,
        ease: 'inOutSine',
        duration: 500
    });
}

const isNotAlink = item => item.getAttribute('href').includes('#');

const setListener = item => item.addEventListener('click', scroll);

const init = e => {
    let list = [...document.querySelectorAll('header#main nav a, .button.scroll')]; 
    list.filter(isNotAlink)
        .forEach(setListener);
}

export default init;