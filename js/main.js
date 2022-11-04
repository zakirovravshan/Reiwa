const elButton = document.querySelector('.burger__btn')
const elNavbar = document.querySelector('.navbar')
const moreBtn = document.querySelector('.information__btn')
const infoItems = document.querySelectorAll('.information__item')
const infoList = document.querySelector('.information__list')
const elArrow = document.querySelector('.arrow__span')


elButton.addEventListener('click' , function(){
    elNavbar.classList.toggle('navbar--open')
})
moreBtn.addEventListener('click' , function(){
    infoItems.forEach((items) =>{
        items.classList.toggle('information__item--active')
        
        if(items.classList.contains('information__item--active')){
            moreBtn.textContent = "Yopish"
        }else{
            moreBtn.textContent = "Barchasini ko'rish"
        }
    })
    
    
    
})

window.addEventListener('scroll' , function(){
    console.log(window.scrollY);
    if(window.scrollY > 400){
        elArrow.classList.toggle('arrow__span--open')
    }
})