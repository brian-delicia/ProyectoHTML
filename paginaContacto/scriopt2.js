
const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const gmail = document.getElementById('gmail');
const mensaje= document.getElementById('mensaje');
const tel = document.getElementById('tel');
const validaciones = document.getElementById('validaciones');


form.addEventListener("submit" , e=> {

    e.preventDefault();
    let datos = "";
    let regexEmail=/^\w+.*@(gmail|hotmail|yahoo)(\.com|\.ar|\.es|\.edu){1,2}$/i;
    let regextel= /^\d{10}$/
    let entrar = false;
    validaciones.innerHTML= "";
     if(nombre.value.length<4)  {
        datos+= "Nombre erroneo <br> " 
        nombre.style.backgroundColor= 'red';
    entrar= true
     }else{
            nombre.style.backgroundColor= 'green';
      
     }
    if(apellido.value.length<4){ 
        datos+= "Apellido erroneo <br> " 
    entrar= true
     apellido.style.backgroundColor= 'red';
}else{
            apellido.style.backgroundColor= 'green';
      
     }
     if(!regexEmail.test(gmail.value)){
        datos+= " El gmail es incorrecto <br>"
        entrar= true
         gmail.style.backgroundColor= 'red';

}else{
            gmail.style.backgroundColor= 'green';
      
     }
     if(!regextel.test(tel.value)){
        datos+= "El telefono es incorrecto <br>"
         entrar= true
          tel.style.backgroundColor= 'red';
}else{
            tel.style.backgroundColor= 'green';
      
     }
    if(entrar){
        validaciones.innerHTML= datos;

    }else{
       
        validaciones.innerHTML= "Nombre: "+ nombre.value + " <br> " +
        "Apellido: " + apellido.value + "<br> "+
        "Gmail: "+ gmail.value + "<br> "+
        "Mensaje: "+ mensaje.value + "<br> "+
        "Telefono: "+ tel.value + "<br> "
    }

 
   









} )




