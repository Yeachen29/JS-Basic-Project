const btn = document.getElementById('toggleBtn');
const sideBarActive = document.querySelector('.side-bar');

//add click event in the menu icon
btn.addEventListener('click', function(){
    sideBarActive.classList.toggle('active');
    this.classList.toggle('active');
})