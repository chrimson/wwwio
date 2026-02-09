// Function to handle the intersection changes
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is entering the viewport
      entry.target.classList.add('is-visible');
      entry.target.classList.remove('is-hidden');
    } else {
      // Element is leaving the viewport
      entry.target.classList.remove('is-visible');
      entry.target.classList.add('is-hidden');
    }
  });
};

// Set up the options for the observer
const observerOptions = {
  root: null, // Observe relative to the viewport
  rootMargin: '0px',
  threshold: 0.1 // Trigger when 10% of the element is visible
};

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Select all elements to observe and start observing them
const animatedElements = document.querySelectorAll('.animate-text');
animatedElements.forEach(element => {
  observer.observe(element);
});



/* Set the width of the side navigation to 250px and the left margin of the main content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the main content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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
