const themeButton = document.getElementById('themeButton');
const html = document.documentElement;

themeButton.addEventListener('click', () => {
    themeButton.textContent = html.classList.toggle('white-theme') ? '🌙' : '☀️';
});