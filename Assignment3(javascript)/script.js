// ==== Hide/Show Navbar on Scroll ====
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});


// ==== Back to Top Button ====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==== Hero Section Background Slider ====
// ==== Hero Section Background Slider ====
const heroSection = document.getElementById('heroSection');
const heroImages = [
    'ring.jpg',
    'necklace.jpg'
];

let heroIndex = 0;

// Set initial image
heroSection.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
heroSection.style.backgroundSize = 'cover';
heroSection.style.backgroundPosition = 'center';

// Change image every 4 seconds
setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroSection.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
}, 4000);


// ==== Category Image Hover Sliders ====
const menCategory = document.getElementById('menCategory');
const womenCategory = document.getElementById('womenCategory');

const menImages = ['men1.jpg', 'men2.jpg', 'men3.jpg'];
const womenImages = ['women1.jpg', 'women2.jpg', 'women3.jpg'];

let menInterval, womenInterval;

function startSlider(imgElement, images, intervalRef) {
    let index = 0;
    intervalRef = setInterval(() => {
        imgElement.src = images[index];
        index = (index + 1) % images.length;
    }, 1000);
    return intervalRef;
}

function stopSlider(intervalRef) {
    clearInterval(intervalRef);
}

// Men Hover
menCategory.addEventListener('mouseenter', () => {
    menInterval = startSlider(menCategory, menImages, menInterval);
});
menCategory.addEventListener('mouseleave', () => {
    stopSlider(menInterval);
    menCategory.src = menImages[0];
});

// Women Hover
womenCategory.addEventListener('mouseenter', () => {
    womenInterval = startSlider(womenCategory, womenImages, womenInterval);
});
womenCategory.addEventListener('mouseleave', () => {
    stopSlider(womenInterval);
    womenCategory.src = womenImages[0];
});
