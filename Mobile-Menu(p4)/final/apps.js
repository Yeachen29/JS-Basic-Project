const btn = document.getElementById('mobile-btn');
const navMenu = document.querySelector('.menu');

btn.addEventListener('click', ()=>{
    /*if(navMenu.classList.contains('active')){
        navMenu.classList.remove('active');
    }else{
        navMenu.classList.add('active');
    }*/
    navMenu.classList.toggle('active');    
})