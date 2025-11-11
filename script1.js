const imagenes =['./imagenes/moto-Carrusel1.png','./imagenes/moto-Carrusel2.png','./imagenes/moto-Carrusel3.png','./imagenes/moto-Carrusel4.png'];

let indice= 0;

function siguiente() {
    let img = document.getElementById("imgDeCarrusel");
    img.src = imagenes[indice];
    indice++;
    if(indice== imagenes.length){
        indice=0;
    }
}
function atras(){
    
    let img= document.getElementById("imgDeCarrusel");
    
        img.src=imagenes[indice-1];
        indice--;
        if(indice==0){
            indice=imagenes.length;
        }
}

