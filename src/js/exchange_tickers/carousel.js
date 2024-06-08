

const carouselContent = document.querySelector('.mainNews');

export const slide=()=> {
        const firstItem = carouselContent.children[0];
        carouselContent.style.transition = 'transform 0.5s ease-out';
        carouselContent.style.transform = 'translateX(-' + firstItem.offsetWidth + 'px)';
        setTimeout(function() {
            carouselContent.appendChild(firstItem);
            carouselContent.style.transition = 'none';
            carouselContent.style.transform = 'translateX(0)';
        }, 500);
}

 export const prevSlide=()=> {
        const lastItem = carouselContent.children[carouselContent.children.length - 1];
        carouselContent.insertBefore(lastItem, carouselContent.children[0]);
        carouselContent.style.transition = 'none';
        carouselContent.style.transform = 'translateX(-' + lastItem.offsetWidth + 'px)';
        setTimeout(function() {
            carouselContent.style.transition = 'transform 0.5s ease';
            carouselContent.style.transform = 'translateX(0)';
        }, 10);
    }

 export const nextSlide=()=> {
        const firstItem = carouselContent.children[0];
        carouselContent.style.transition = 'transform 0.5s ease';
        carouselContent.style.transform = 'translateX(-' + firstItem.offsetWidth + 'px)';
        setTimeout(function() {
            carouselContent.appendChild(firstItem);
            carouselContent.style.transition = 'none';
            carouselContent.style.transform = 'translateX(0)';
        }, 500);
    }