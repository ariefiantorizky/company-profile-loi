const swiper = new Swiper(".main-slider", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const reviewSlide = new Swiper(".review-slider", {
    autoplay: true,
    spaceBetween: 20,
});