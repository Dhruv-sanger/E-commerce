// const bar=document.getElementById('bar');
// const nav=document.getElementById('navbar');
// if(bar){
//     bar.addEventListener('Click', ()=>{
//         nav.classList.add('active');
//     })
// }

document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close=document.getElementById('close');
    if (bar && nav) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }
    if(close){
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});
