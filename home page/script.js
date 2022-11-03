/* Variables */
const menuBtn = document.querySelector('[data-menu]');
const xBtn = document.querySelector('[data-xBtn]');
const list = document.querySelector('[data-visibility]');

menuBtn.addEventListener('click', () => {
    list.setAttribute('data-visibility', 'true');
    menuBtn.style.display = "none";
    xBtn.style.display = "block";
})

xBtn.addEventListener('click', () => {
    list.setAttribute('data-visibility', 'false');
    menuBtn.style.display = "block";
    xBtn.style.display = "none";
})
