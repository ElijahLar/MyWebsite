const toggleBtnIcons = document.querySelector('.toggle-icon');
const toggleBtnBars = toggleBtnIcons.querySelector('.fa-bars');
const toggleBtnTimes = toggleBtnIcons.querySelector('.fa-times');
const linksContainer = document.querySelector('.links-container');
const userLang = navigator.language || navigator.userLanguage;

toggleBtnTimes.style.display = "none";
linksContainer.style.height = "0";
linksContainer.style.overflow = "hidden";

function toggleIcons() {
    const linkContainerHeight = linksContainer.getBoundingClientRect().height;
    if (linkContainerHeight === 0) {
        linksContainer.style.height = "auto";
        const navContainerHeight = linksContainer.scrollHeight;
        linksContainer.style.height = `${navContainerHeight}px`;
        toggleBtnBars.style.display = "none";
        toggleBtnTimes.style.display = "block";
    } else {
        linksContainer.style.height = "0";
        toggleBtnTimes.style.display = "none";
        toggleBtnBars.style.display = "block";
    }
}

// Collapse menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        linksContainer.style.height = "0";
        toggleBtnTimes.style.display = "none";
        toggleBtnBars.style.display = "block";
    });
});

// Toggle menu on icon click
toggleBtnIcons.addEventListener('click', toggleIcons);
