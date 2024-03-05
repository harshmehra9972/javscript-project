var qus = document.querySelectorAll ('.question-btn');

qus.forEach (function(btn){
    btn.addEventListener("click",function(e) {
        const qe = e.currentTarget.parentElement.parentElement;
        qe.classList.toggle("show-text");
    })
})


let questions = document.querySelectorAll('.question');

questions.forEach(function (question) {

    const btn = question.querySelector('.question-btn')
    btn.addEventListener("click", function () {
        questions.forEach(function(item){
            if(item!==question){
                item.classList.remove("show-text")
            }
        })
    })

}) 