const res = document.getElementById('output');
let x = 0;
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList;

        if(style.contains('dec')){
            x--;
        }else if(style.contains('inc')){
            x++;
        }else{
            x = 0;
        }

        if(x > 0){
            res.style.color = "green";
        }else if(x < 0){
            res.style.color = "red";
        }else{
            res.style.color = "black";
        }

        res.textContent= x;
    })
})