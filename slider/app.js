let slider = document.querySelectorAll('.slide')
let nbtn = document.querySelector('.nextBtn')
let pbtn = document.querySelector('.prevBtn')

slider.forEach(function(slide,index){
    slide.style.left =`${index * 100}%`;
});

let counter = 0;
nbtn.addEventListener('click',function(){
    counter++;
    coursel()
})
pbtn.addEventListener('click',function(){
    counter--;
    coursel()
})
function coursel(){
   
    if(counter === slider.length){
        counter = 0;
    }
     
    if(counter < 0){
        counter = slider.length -1  
    }


    slider.forEach(function(slide){
        slide.style.transform = `translatex(-${counter * 100}%)`;
    })
}





