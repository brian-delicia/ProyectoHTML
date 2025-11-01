
let validacionGmail = gmail.getElementById("validaciones");

let gmail = document.getElementById("gmail").value;
let tel = document.getElementById("tel").value;

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let mensaje = document.getElementById("mensaje").value;




function validacionFormulario(){


const gmailPatron = /^\w+.+@(gmail|hotmail)(\.com|\.edu|\.ar){1,2}$/;
const teleRegular = /^\d{10}$/;



    if(gmailPatron.test(gmail.value)&&teleRegular.test(tel.value)){

        let correo = document.createElement('p');
        let telefono = document.createElement('p');
        let nom = document.createElement('p');
        let apell=document.createElement('p');
        let men = document.createElement('p');

        nom.textContent= "Nombre: " + nombre ;
        apell.textContent= "Apellido:" +apellido;
        men.textContent="Mensaje: " + mensaje;
        telefono.textContent="Telefono: " + tel;
        correo.textContent= "Gmail: "+gmail;

        validacionGmail.appendChild(nom);
        validacionGmail.appendChild(apell);
        validacionGmail.appendChild(correo);
        validacionGmail.appendChild(telefono);
        

    }else{  
        telefono.textContent= "Telefono, invalido";
        correo.textContent="Gmail, invalido";
    }
    return false;
}

function validacionFormulario1() {
    // 1. OBTENCIÓN DE ELEMENTOS Y VALORES
    // Siempre obtener el valor (.value) de los elementos de formulario para validación
    let gmailElement = document.getElementById("gmail");
    let telElement = document.getElementById("tel");
    let nombreElement = document.getElementById("nombre");
    let apellidoElement = document.getElementById("apellido");
    let mensajeElement = document.getElementById("mensaje");
    
    // Contenedor donde se mostrarán los resultados o errores
    let contenedorValidaciones = document.getElementById('validaciones');
    contenedorValidaciones.innerHTML = ''; // Limpiar resultados anteriores

    // 2. EXPRESIONES REGULARES
    const gmailPatron = /^\w+.+@(gmail|hotmail)(\.com|\.edu|\.ar){1,2}$/;
    // Un patrón de teléfono más robusto podría ser mejor, pero usamos el tuyo:
    const teleRegular = /^\d{10}$/; 

    // 3. VALIDACIÓN (Usando .test() con el valor del input)
    const esGmailValido = gmailPatron.test(gmailElement.value);
    const esTelValido = teleRegular.test(telElement.value);

    // 4. LÓGICA DE MANIPULACIÓN DEL DOM
    
    if (esGmailValido && esTelValido) {
        // --- ÉXITO ---
        // Se crean los elementos P dentro del IF para evitar errores de referencia
        let nom = document.createElement('p');
        let apell = document.createElement('p');
        let men = document.createElement('p');
        let telefono = document.createElement('p');
        let correo = document.createElement('p');
        
        // Se asigna el valor usando la propiedad textContent
        nom.textContent = "Nombre: " + nombreElement.value;
        apell.textContent = "Apellido: " + apellidoElement.value;
        men.textContent = "Mensaje: " + mensajeElement.value;
        telefono.textContent = "Teléfono: " + telElement.value;
        correo.textContent = "Correo: " + gmailElement.value;
        
        // Adjuntar al contenedor
        contenedorValidaciones.appendChild(nom);
        contenedorValidaciones.appendChild(apell);
        contenedorValidaciones.appendChild(men);
        contenedorValidaciones.appendChild(telefono);
        contenedorValidaciones.appendChild(correo);

    } else { 
        // --- ERROR ---
        let mensajeError = document.createElement('p');
        mensajeError.style.color = 'red'; // Estilo para destacar el error
        
        if (!esGmailValido) {
            mensajeError.textContent = "ERROR: El formato de Gmail es inválido o no cumple el patrón.";
            contenedorValidaciones.appendChild(mensajeError);
            gmailElement.style.border = '2px solid red'; // Opcional: Resaltar input
        }
        
        if (!esTelValido) {
            mensajeError = document.createElement('p'); // Crea un nuevo P para el segundo error
            mensajeError.style.color = 'red'; 
            mensajeError.textContent = "ERROR: El formato del Teléfono es inválido (debe tener 10 dígitos).";
            contenedorValidaciones.appendChild(mensajeError);
            telElement.style.border = '2px solid red'; // Opcional: Resaltar input
        }
    }
}