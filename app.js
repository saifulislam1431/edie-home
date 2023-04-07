const open = document.getElementById('btn-open');
const close = document.getElementById('btn-close');
const nav = document.getElementById('nav-items');

open.addEventListener('click',()=>{
    nav.style.display='block';
    close.style.display='block';
    open.style.display='none';
})

close.addEventListener('click',()=>{
    nav.style.display='none';
    close.style.display='none';
    open.style.display='block';
})