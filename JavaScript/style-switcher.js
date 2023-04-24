/* ======================= TOGGLE STYLE SWITCHER ============================== */


const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll
window.addEventListener('scroll', () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }

})

// ======================== THEME COLORS =============================

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");

        }
        else {
            style.setAttribute("disabled", "true");

        }
    })
}
// ======================== LENGUAGE TRANSLATION ==============================



// ======================== THEME LIGHT DARK MODE =============================
const dayNight = document.querySelector(".day-night");
let dayON = false;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // si el usuario prefiere el modo oscuro, agregamos la clase "dark" al cuerpo
  document.body.classList.add("dark");
  dayON = true;
}

dayNight.addEventListener('click', () => {
  document.body.classList.toggle("dark");
  dayNight.querySelector("i").classList.toggle("uil-sunset");
  dayNight.querySelector("i").classList.toggle("uil-moonset");
  dayON = !dayON;

  if (dayON) {
    $(".ser-text").css("color", "black");
    

   

  } else {
    $(".ser-text").css("color", "white");
    

    
  }
});



window.addEventListener('load', () => {

    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("uil-sunset");


    }

    else {
        dayNight.querySelector("i").classList.add("uil-moonset");

    }

})


// Colores de las fuentes en los cuadros de habilidades



    $(document).ready(function () {

        $(".card").hover(function () {

           
            $(this).find(".ser-text").css("color", "white");

            if (dayON) {

                $(".card").mouseleave(function () {

                    if (dayON) {

                        $(this).find(".ser-text").css("color", "black");
                    
                    }
                });

            }
            else {

                $(this).find(".ser-text").css("color", "white");
            

            }


        });


    });





