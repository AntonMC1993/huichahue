window.onload = init; // .onload funciona cuando todos los objetos del DOM (imágenes, flash, scripts, frames) han terminado de cargarse.
    function init(){ // init -> inicia la función
        document.querySelector(".pop-up .no").addEventListener("click",noPuedesIngresar);
        document.querySelector(".pop-up .si").addEventListener("click",bienvenido);
    }
        
    function noPuedesIngresar(){
        location.href="https://www.google.cl/";
    }    
    function bienvenido(){
        document.querySelector(".pop-up").style.display="none";
        document.querySelector("#container").style.opacity="1";
    }
