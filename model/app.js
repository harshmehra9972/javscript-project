var mBtn = document.querySelector(".btn")
var cBtn = document.querySelector(".close-btn")
var tab2 = document.querySelector(".modal-overlay")

mBtn.addEventListener("click", openBtn)
cBtn.addEventListener("click",closeBtn)

function openBtn (){
    tab2.classList.add("overlay-hide")
}

function closeBtn () {
    tab2.classList.remove("overlay-hide")
}