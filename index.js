// Select toggle button wrapper
const toggleBtnIcons = document.querySelector('.toggle-icon');
// Select the toggle buttons (bars and times)
const toggleBtnBars = toggleBtnIcons.querySelector('.fa-bars'); // Assuming using FontAwesome
const toggleBtntimes = toggleBtnIcons.querySelector('.fa-times');
// Select the links container and the nav links
const linksContainer = document.querySelector('.links-container');
const navContainer = document.querySelector('.nav-links');

// Set initial state to show only the burger icon
toggleBtntimes.style.display = "none"; // Hide cross icon at start

// Function to toggle icons and menu
function toggleIcons() {
    const linkContainerHeight = linksContainer.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;

    if (linkContainerHeight === 0) {
        linksContainer.style.height = `${navContainerHeight}px`; // Set to full height
        toggleBtnBars.style.display = "none"; // Hide burger icon
        toggleBtntimes.style.display = "block"; // Show cross icon
    } else {
        linksContainer.style.height = 0; // Collapse menu
        toggleBtntimes.style.display = "none"; // Hide cross icon
        toggleBtnBars.style.display = "block"; // Show burger icon
    }
}

// Close menu when clicking a link
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        linksContainer.style.height = 0; // Collapse menu
        toggleBtntimes.style.display = "none"; // Hide cross icon
        toggleBtnBars.style.display = "block"; // Show burger icon
    });
});

// Add event listener for toggle button
toggleBtnIcons.addEventListener('click', toggleIcons);
