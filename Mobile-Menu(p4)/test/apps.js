const headerMenu = document.querySelector('.header-section');
const navBtn = document.querySelector('.nav-toggle');
navBtn.addEventListener('click', function(){
    headerMenu.classList.toggle('active');
})