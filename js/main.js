const elButton = document.querySelector('.burger__btn')
const elNavbar = document.querySelector('.navbar')

elButton.addEventListener('click' , function(){
    elNavbar.classList.toggle('navbar--open')
})