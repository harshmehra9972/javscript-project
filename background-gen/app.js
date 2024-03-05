let color =document.getElementById('input')
let red = document.getElementById('red');
let green=document.getElementById('green')
let blue=document.getElementById('blue')
let grey=document.getElementById('grey')
let colorname=document.getElementById('colorname')

color.addEventListener('input',function(){
    
    colorname.innerHTML= 'Color : '+color.value
    let selcolor=color.value;
    document.body.style.backgroundColor=selcolor;

})

red.addEventListener('click', function() {
    document.body.style.backgroundColor = '#d51a1a';
    
    colorname.innerHTML='Color : #d51a1a'
    color.value='#d51a1a';
    });

green.addEventListener('click', function() {
    document.body.style.backgroundColor = ' #1a940a';
   colorname.innerHTML='Color :  #1a940a';
   color.value='#1a940a';
});
blue.addEventListener('click', function() {
    document.body.style.backgroundColor = '  #0000FF';
   colorname.innerHTML='Color :   #0000FF'
   color.value='#0000FF';

});

grey.addEventListener('click', function() {
    document.body.style.backgroundColor = ' #756c6c';
   colorname.innerHTML='Color :  #756c6c'
   color.value='#756c6c';
});
