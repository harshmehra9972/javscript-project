var qus = document.querySelectorAll ('.question-btn');

qus.forEach (function(btn){
    btn.addEventListener("click",function(e) {
        const qe = e.currentTarget.parentElement.parentElement;
        qe.classList.toggle("show-text");
    })
})


