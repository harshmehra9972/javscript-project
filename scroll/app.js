const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight===0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});


const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function(){
var scrollhight = window.pageYOffset;
var navheight = navbar.getBoundingClientRect().height;
if(scrollhight > navheight){
  navbar.classList.add('fixed-nav');
}
else{
  navbar.classList.remove('fixed-nav')
}

if(scrollhight > 500){
  topLink.classList.add('show-link')
}
else 
{
  topLink.classList.remove('show-link')
}
})

   











