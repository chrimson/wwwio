const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; // Target the <html> element
const storageKey = 'theme-preference';

function setInitialTheme() {
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme) {
        htmlElement.setAttribute('data-theme', storedTheme);
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
    }
}

function toggleTheme() {
    let currentTheme = htmlElement.getAttribute('data-theme');
    let newTheme = (currentTheme === 'dark') ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(storageKey, newTheme); // Save preference
}

toggleButton.addEventListener('click', toggleTheme);

setInitialTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(storageKey)) {
        const newColorScheme = e.matches ? "dark" : "light";
        htmlElement.setAttribute('data-theme', newColorScheme);
    }
});

function bgr() {
  const elem = document.getElementById("bgr-mnu");
  if (elem.style.height != "200px") {
    elem.style.borderColor = "var(--text-color)";
    elem.style.height = "200px";
  } else {
    elem.style.borderColor = "var(--bg-color)";
    elem.style.height = "0px";
  }
}
