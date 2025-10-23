const carrusel = document.querySelector('.deslizar');
const imagenes = document.querySelectorAll('.deslizar img');

let indice = 0;
let anchoImagen = imagenes[0].clientWidth;
let cantidadImagenes= imagenes.length;


function deslizar(){
  if (!carrusel) return;
  carrusel.style.transform = 'translateX(' + (-anchoImagen * indice) + 'px)';
}
function siguienteImagen() {
  if (indice >= cantidadImagenes - 1) {
    indice = 0;
  } else {
    indice++;
  }
  deslizar();
}
function anteriorImagen() {
  if (indice <= 0) {
    indice = cantidadImagenes - 1;
  } else {
    indice--;
  }
  deslizar();
  }