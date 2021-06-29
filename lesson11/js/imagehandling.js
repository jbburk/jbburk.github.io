const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


// Start of IntersectionObserver
const options = {
    rootMargin: '0px 0px -200px 0px',
    threshold: 0
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items) => {
        items.forEach((item)=> {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, options);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });

} else {
    imagesToLoad.forEach(img => {
        loadImages(img);
    });
}
