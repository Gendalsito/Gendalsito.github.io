
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


//Mav active


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


  //About Ocultar menu de nav con responsive 


  function ocultarMenu() {
     
    if (window.innerWidth <= 1040) {
      menu.style.display = 'none';
      menuBtn.style.display = 'inline-block';
      closeBtn.style.display='none';
    }
  }

  function ocultarMenuConRetraso() {
    setTimeout(ocultarMenu, 400);
  }
  
  if (window.innerWidth <= 1040) {


    const navItems = menu.querySelectorAll('li');

    navItems.forEach(item => {

        const link = item.querySelector('a');
        link.addEventListener('click', () =>{
          
               
            ocultarMenuConRetraso();
            
        })
        
    });



  }

//   Descargar CV con JS y el DOM para controlar mejor la descarga
/* 
var btnDescargar = document.getElementById('btnDescargar');
btnDescargar.addEventListener('click', function() {
  // Crear un enlace oculto
  var link = document.createElement('a');
  link.style.display = 'none';
  document.body.appendChild(link);

  // Obtener la ruta del archivo PDF
  var file = '/Document/CV-EN-ES.pdf';

  // Simular clic en el enlace oculto para descargar el archivo
  link.href = file;
  link.download = file.split('/').pop();
  link.click();

  // Eliminar el enlace oculto del DOM  
  document.body.removeChild(link);
}); */


const btnDescargar = document.getElementById('btnDescargar');

btnDescargar.addEventListener('click', function() {
  btnDescargar.disabled = true;
});


  