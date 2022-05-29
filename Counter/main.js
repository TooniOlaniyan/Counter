const btn = document.querySelectorAll('.button');
const value = document.querySelector('.result');
let count = 0;

btn.forEach((btns)=>{
    btns.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains('subtract')){
            count--;
            value.style.color = 'red'
        }
        else if(styles.contains('add')){
            count++;
            value.style.color = 'green'
        }
        else{
            count=0;
            value.style.color = '#000'
        }

        value.textContent = count;
    })

})

