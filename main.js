let menuVisible = false;
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive"
        menuVisible = true;
    }
}

function seleccionar(){
   
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

function img1(){
    document.getElementById("img2").innerHTML = "adjasjdasjdsaidj";
}
