let menuIcone = document.querySelector('#menu-icon');
menuIcone.addEventListener("click",()=>{
    let hMenu= document.querySelector('.h-menu');
    hMenu.classList.remove('h-menu-show');
    let hBg= document.querySelector('.h-bg');
    hBg.classList.remove('d-none');
})
let hBg= document.querySelector('.h-bg');
hBg.addEventListener("click",()=>{

    let hMenu= document.querySelector('.h-menu');
    hMenu.classList.add('h-menu-show');
    let hBg= document.querySelector('.h-bg');
    hBg.classList.add('d-none');
    
})
let hMenu= document.querySelector('.h-menu');
hMenu.addEventListener('click',()=>{
    
    hMenu.classList.add('h-menu-show');
    let hBg= document.querySelector('.h-bg');
    hBg.classList.add('d-none');
})
