const themeButton = document.getElementById('themeButton');
const html = document.documentElement;

themeButton.addEventListener('click', () => {
    html.classList.toggle('white-theme');
});