let count = 0;

let value = document.querySelector("#value")
let btns = document.querySelectorAll(".btn")


btns.forEach(function(btn){
    btn.addEventListener('click',function(a){
        let styles =a.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;

        }
        else if(styles.contains('increase')){
            count++;
                    }
                    else{
                        styles.contains('rest')
                        count=0;
                    }
                    value.textContent=count;
    })
})