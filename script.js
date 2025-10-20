let imagenes =["./imagenes/moto-Carrusel1.png","./imagenes/moto-carrusel2.png","./imagenes/moto-carrusel3.png","./imagenes/moto-carrusel4.png"]

let indice = 0;


mostrar(indice);

// Next/previous controls
function siguiente(n) {
  mostrar(indice += n);
}

// Thumbnail image controls
function atras(n) {
  mostrar(indice += n);
}

function mostrar(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
}

