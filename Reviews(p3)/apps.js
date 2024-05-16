getText('./reviews.json');

//all content are here
const cName = document.querySelector('.rev-author');
const job = document.querySelector('.rev-job');
const text = document.querySelector('.rev-info');
const img = document.querySelector('#cusImg');

//all buttton handle are here
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const ranBtn = document.querySelector('.ran');



async function getText(file){
    let myObj = await fetch(file);
    let response = await myObj.json();

    //show fetch data here
    let currentItem = 0;
    showPerson();


    //previous button to change reviews
    prevBtn.addEventListener('click', function(){
        currentItem--;
        if(currentItem < 0){
            currentItem = response.length - 1;
        }

        showPerson();
    });

    //next button to change reviews
    nextBtn.addEventListener('click', function(){
        currentItem++;
        if(currentItem > response.length - 1){
            currentItem = 0;
        }

        showPerson();
    })

    //rendom button is here
    ranBtn.addEventListener('click', function(){
        currentItem = Math.floor(Math.random() * response.length);
        showPerson()
    })

    //person content show function here
    function showPerson(){
        const item = response[currentItem];
        img.src = item.img;
        job.textContent = item.job;
        cName.textContent = item.name;
        text.textContent = item.des;
    }
}
