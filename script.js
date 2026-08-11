const images = [
    'AerospaceEngineering.jpg',
    'FarmersMarketOgden.jpg',
    'HikingApp.jpg',
    'GrandCanyonTrifold.jpg',
    'ConcertPoster.jpg',
    'JungleBook.jpg',
    'SpacePatch.jpg',
    'Bonsai.jpg',
];

let currentIndex = 0;
const imgElement = document.getElementById('viewer');

const preloadedImages = [];
images.forEach((src) => {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img);
});

document.getElementById('backBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
    window.scrollTo(0, 0);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
    window.scrollTo(0, 0);
});
