let btns =document.querySelector('.nav-toggle');
let links =document.querySelector('.links')


btns.addEventListener('click',function(){
    // console.log(links.classList)
    // console.log(links.classList.contains('random'))
    // console.log(links.classList.contains('links'))
  links.classList.toggle('show-links')


})