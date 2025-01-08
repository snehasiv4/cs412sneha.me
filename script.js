// Load and apply the preferred stylesheet faster on page load
(function() {
    const savedStyle = localStorage.getItem('preferredStyle');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'stylesheet';
    link.href = savedStyle || 'styles.css';
    document.head.appendChild(link);
})();

// Function to toggle the style
function toggleStyle() {
    const styleSheetLink = document.getElementById('stylesheet');
    const currentStyleSheet = styleSheetLink.getAttribute('href');

    const newStyle = currentStyleSheet === 'styles.css' ? 'style2.css' : 'styles.css';

    applyStyle(newStyle);

    const currentPage = window.location.pathname;
    if (currentPage.includes('projects.html')) {
        updateProjectImages(newStyle);
    } else if (currentPage.includes('service.html')) {
        updateServiceImages(newStyle);
    }
}

// Function to apply a new style and store it in localStorage
function applyStyle(style) {
    const styleSheetLink = document.getElementById('stylesheet');
    styleSheetLink.setAttribute('href', style);
    localStorage.setItem('preferredStyle', style);
}

// Functions to update project and service images based on the style
function updateProjectImages(style) {
    const projectImages = [
        document.getElementById("project1"),
        document.getElementById('project2'),
        document.getElementById('project3')
    ];

    changeImages(style, projectImages, 
                 'pics/HWOpixel.png', 'pics/pixelSEC.png', 'pics/spotifyPixel.png', 
                 'pics/HWO.png', 'pics/secLogo.png', 'pics/spotifyLogo.png');
}

function updateServiceImages(style) {
    const serviceImages = [
        document.getElementById("service1"),
        document.getElementById("service2"),
        document.getElementById("service3")
    ];

    changeImages(style, serviceImages, 
                 'pics/halPixel.png', 'pics/JApixel.png', 'pics/secMilepixel.png', 
                 'pics/halVolunteer.jpg', 'pics/JA.jpg', 'pics/secondMile.jpg');
}

// Helper function to change images based on the style
function changeImages(style, images, pixelImage1, pixelImage2, pixelImage3, normalImage1, normalImage2, normalImage3) {
    if (images.some(img => img !== null)) { 
        if (style === 'style2.css') {
            images[0].src = pixelImage1; 
            images[1].src = pixelImage2; 
            images[2].src = pixelImage3; 
        } else {
            images[0].src = normalImage1; 
            images[1].src = normalImage2; 
            images[2].src = normalImage3;
        }
    }
}

// On window load, apply the preferred style and update images accordingly
window.onload = function() {
    const savedStyle = localStorage.getItem('preferredStyle');
    const stylesheet = document.getElementById('stylesheet');

    if (savedStyle) {
        stylesheet.setAttribute('href', savedStyle);
    }

    const currentPage = window.location.pathname;
    if (currentPage.includes('projects.html')) {
        updateProjectImages(savedStyle || 'styles.css');
    } else if (currentPage.includes('service.html')) {
        updateServiceImages(savedStyle || 'styles.css');
    }
};
