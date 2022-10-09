 document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

 function mostrar_menu(){
    
    document.querySelector(".menu").classList.toggle("mostrar_menu");
 }

window.onscroll = function (){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var will = document.getElementById("icon_heart");
    var luz  = document.getElementById("icon_fire");
    will.style.bottom = posicion * 0.1 + "px";
    luz.style.top = posicion * 0.1 + "px"
}