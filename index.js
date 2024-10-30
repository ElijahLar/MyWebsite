// Select toggle button wrapper
const toggleBtnIcons = document.querySelector('.toggle-icon');
// Select the toggle buttons (bars and times)
const toggleBtnBars = toggleBtnIcons.querySelector('.fa-bars');
const toggleBtnTimes = toggleBtnIcons.querySelector('.fa-times');
// Select the links container
const linksContainer = document.querySelector('.links-container');

// Set initial state to show only the burger icon and collapse the menu
toggleBtnTimes.style.display = "none"; // Hide cross icon at start
linksContainer.style.height = "0"; // Ensure the menu starts collapsed
linksContainer.style.overflow = "hidden"; // Hide overflow

// Function to toggle icons and menu
function toggleIcons() {
    const linkContainerHeight = linksContainer.getBoundingClientRect().height;

    if (linkContainerHeight === 0) {
        // Open menu
        linksContainer.style.height = "auto"; // Temporarily set to auto to calculate height
        const navContainerHeight = linksContainer.scrollHeight; // Get the full height
        linksContainer.style.height = "0"; // Set to 0 to allow transition
        setTimeout(() => {
            linksContainer.style.height = `${navContainerHeight}px`; // Set to full height after a short delay
        }, 20); // Short delay for transition effect

        // Animate icons
        toggleBtnBars.style.display = "none"; // Hide bars icon
        toggleBtnTimes.style.display = "block"; // Show times icon
    } else {
        // Close menu
        linksContainer.style.height = "0"; // Collapse menu

        // Animate icons
        toggleBtnTimes.style.display = "none"; // Hide times icon
        toggleBtnBars.style.display = "block"; // Show bars icon
    }
}


// Close menu when clicking a link
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        linksContainer.style.height = "0"; // Collapse menu
        toggleBtnTimes.style.display = "none"; // Hide times icon
        toggleBtnBars.style.display = "block"; // Show bars icon
    });
});

// Add event listener for toggle button
toggleBtnIcons.addEventListener('click', toggleIcons);
