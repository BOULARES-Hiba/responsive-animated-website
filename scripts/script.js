const header =document.querySelector('.header');
window.addEventListener('scroll',()=>{
   header.classList.toggle('scroll',scrollY>15);
})

const icon = document.querySelector('#menu-icon');
const navlink = document.querySelector('.navlinks');
icon.addEventListener('click', () => {
      navlink.classList.toggle('opens');   
      icon.classList.toggle('bx-x')
      
 });

window.addEventListener('scroll',()=>{
navlink.classList.remove('opens');
icon.classList.remove('bx-x');
})