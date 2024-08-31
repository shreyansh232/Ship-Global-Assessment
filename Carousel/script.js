'use strict';

const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlide = document.querySelector('.carousel-slide--main');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');

rightBtn.addEventListener('click', function() {
    currentSlide = document.querySelector('.carousel-slide--right');
    const leftSlide = document.querySelector('.carousel-slide--main');
    carouselSlides.forEach((slide) => {
        slide.classList = 'carousel-slide';
    });
    currentSlide.classList.add('carousel-slide--main');
    leftSlide.classList.add('carousel-slide--left');
    const currentId = Array.from(carouselSlides).indexOf(currentSlide);
    const nextSlide = currentId === carouselSlides.length - 1 ? carouselSlides[0] : carouselSlides[currentId + 1];
    nextSlide.classList.add('carousel-slide--right');
});
    
leftBtn.addEventListener('click', function() {
    currentSlide = document.querySelector('.carousel-slide--left');
    const rightSlide = document.querySelector('.carousel-slide--main');
    carouselSlides.forEach((slide) => {
        slide.classList = 'carousel-slide';
    });
    currentSlide.classList.add('carousel-slide--main');
    rightSlide.classList.add('carousel-slide--right');
    const currentId = Array.from(carouselSlides).indexOf(currentSlide);
    const prevSlide = currentId === 0 ? carouselSlides[carouselSlides.length - 1] : carouselSlides[currentId - 1];
    prevSlide.classList.add('carousel-slide--left');
});
