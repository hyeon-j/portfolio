const toggleBtn = document.querySelector('.navbar-button');
const menu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
