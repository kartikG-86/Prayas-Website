'use strict'

 let gallery = document.querySelectorAll('.gallery__img');
 let index ;

 let changePosition = function()
 {

    let random = Math.floor(Math.random()*14)+1;

    index = random;

    console.log(index);
 }

 changePosition();

 gallery.forEach((ele) => {

    if(index>14)
    {
        index = 0;
    }

    if(index == 0) {
        index=1;
    }

    if(index!=0 && index <= 14)
    {
        ele.style.background = `url(./Pics/Collection-Drive/gal-${index}.jpg)`;
        ele.style.backgroundSize = `cover`;
        
        index++;
    }
    
 })

 
 let setPhotos = (folder) => {

    let inc = 1;

    gallery.forEach((ele) => {
      
        if(index <= 14)
        {
    
            ele.style.background = `url(./Pics/${folder}/gal-${inc}.jpg)`;
            ele.style.backgroundSize = `cover`;
            
            inc++;
        }
        
     })
    
}

let events = ['Collection Drive','Kriti','Picnic 2019','Picnic 2020','Unleash the Talent']
let circles = document.querySelectorAll('.circle');
let text = document.querySelector('.main-text-event')

circles.forEach((ele,index) => {

    ele.addEventListener('click',()=>{
        
        text.textContent = events[index];

        let folder = events[index].split(" ").join("-");
        console.log(folder);

        setPhotos(folder);

    })
})