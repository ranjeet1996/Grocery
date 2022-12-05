const searchform=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =()=>{
    searchform.classList.toggle('active');
    soppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
const soppingcart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick =()=>{
    soppingcart.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
const loginform=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick =()=>{
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    soppingcart.classList.remove('active');
    navbar.classList.remove('active');
}

const navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    soppingcart.classList.remove('active');
    loginform.classList.remove('active');
}

window.onscroll =()=>{
   searchform.classList.remove('active');
   soppingcart.classList.remove('active');
   loginform.classList.remove('active');
   navbar.classList.remove('active');

}