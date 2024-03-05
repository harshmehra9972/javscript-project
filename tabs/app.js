let btns = document.querySelectorAll('.tab-btn')
let about = document.querySelector('.about')
let artical = document.querySelectorAll('.about article')

about.addEventListener('click',function (e){
let id = e.target.dataset.id;

if(id){
    btns.forEach(function(btn){
        btn.classList.remove('active');
        e.target.classList.add('active')
    })
    artical.forEach(function(articals){
        articals.classList.remove('active')
    })
    let element = document.getElementById(id);
    element.classList.add('active')
}
})

                                                                                         