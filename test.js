const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; // Target the <html> element
const storageKey = 'theme-preference';

// Function to set the theme on page load, prefers system setting if no local storage item
function setInitialTheme() {
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme) {
        htmlElement.setAttribute('data-theme', storedTheme);
    } else {
        // Check user's OS preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
    }
}

// Function to toggle between light and dark modes
function toggleTheme() {
    let currentTheme = htmlElement.getAttribute('data-theme');
    let newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(storageKey, newTheme); // Save preference
}

// Event listener for the button click
toggleButton.addEventListener('click', toggleTheme);

// Initialize theme when the script loads
setInitialTheme();

// Optional: Listen for changes in the OS theme setting and update the site theme dynamically
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only update if no explicit preference is stored
    if (!localStorage.getItem(storageKey)) {
        const newColorScheme = e.matches ? "dark" : "light";
        htmlElement.setAttribute('data-theme', newColorScheme);
    }
});
