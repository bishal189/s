//change nav bar as scroll
window.addEventListener("scroll",()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
    

})
// show hide ans 

let f=Array.from( document.getElementsByClassName('faq'))
// console.log(f)
f.forEach(element => {
    element.addEventListener('click',()=>{

        element.classList.toggle('open');

        //change icon
        let icon=element.querySelector('.faq_icon ion-icon ')
        if(icon.name=='add'){
            icon.name='remove'
        }
        else{
            icon.name='add'
        }
    })
    
});


//to swipe the page of  persons


//show/hide nav menu
let menu=document.querySelector('.nav_menu')
let menu_bar=document.querySelector('#close-menu-bar')
let close_btn=document.querySelector('#close-close-bar')

console.log(menu,1)
menu_bar.addEventListener("click",()=>{
    menu.style.display='block';
    close_btn.style.display='inline-block'
    menu_bar.style.display='none'
})
let close=()=>{
    menu.style.display='none';
    close_btn.style.display='none'
    menu_bar.style.display='inline-block'

}

close_btn.addEventListener('click',close)


