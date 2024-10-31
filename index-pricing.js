const toggleIcon = document.querySelector('.toggle-icon');
const linksContainer = document.querySelector('.links-container');

// Hide the close icon initially


// Function to toggle menu visibility
function toggleIcons() {
    const isExpanded = linksContainer.classList.toggle('active');

    // Toggle button visibility
    toggleBtnBars.style.display = isExpanded ? "none" : "block";
    toggleBtnTimes.style.display = isExpanded ? "block" : "none";

    // Update aria attribute
    toggleIcon.setAttribute('aria-expanded', isExpanded);

    // Adjust maxHeight based on visibility
    linksContainer.style.maxHeight = isExpanded ? "400px" : "0"; // Adjust as needed
}

// Event listeners for opening and closing the menu



// Optional: Close the menu when a link is clicked (if links exist)
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (linksContainer.classList.contains('active')) {
            toggleIcons(); // Collapse the menu
        }
    });
});

// Optional: Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize menu state if needed
});

const text = "Great services for great prices!";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust typing speed (100ms per character)
    }
}

window.onload = type; // Start typing when the page loads
