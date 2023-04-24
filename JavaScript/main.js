
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

//show menu
menuBtn.addEventListener('click', () => {

    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display='inline-block'
    document.querySelector(".style-switcher").classList.remove("open");//cerrar el menu de temas

})
// hide menu
closeBtn.addEventListener('click', () => {

    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display='none';

})

const navItems = menu.querySelectorAll('li');

const changueActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
            link.classList.remove('active');
        })
}


navItems.forEach(item => {

    const link = item.querySelector('a');
    link.addEventListener('click', () =>{
        changueActiveItem();
        link.classList.add('active');
    })
    
});


// add box shadow on scroll

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY > 0)
})


// CDNJS TYPING

var typed = new Typed (".typing",{
    strings:["UI/UX Design","Front Development","Video and image editing","Logo design"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});


//About section


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){

    for(tablink of tablinks){

        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){

        tabcontent.classList.remove("active-tab");

    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

