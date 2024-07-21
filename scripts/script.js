const header =document.querySelector('.header');
window.addEventListener('scroll',()=>{
   header.classList.toggle('scroll',scrollY>15);
})