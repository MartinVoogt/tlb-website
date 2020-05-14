'use strict'
import Swiper from 'swiper';

const createSwiper = element => options => new swiper.default(element, options);

const experience = e => {
    let options = {
        spaceBetween: 0,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },        
        pagination: {
            el: '.swiper-pagination',
        },
    }; 
    
    let swipert = createSwiper('#experience-carrousel'); 
    let carrousel = swipert(options);

    
}; 

export default experience;