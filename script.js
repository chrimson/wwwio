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
