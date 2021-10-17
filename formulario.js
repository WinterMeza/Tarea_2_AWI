/*  Función para el botón borrar*/
function myFunctions() {
    var inputs = document.getElementsByClassName('input');
    for (var winter = 0; winter < inputs.length; winter++) {
        inputs[i].addEventListener('keyup', function () {
            if (this.value.length >= 1) {
                this.nextElementSibling.classList.add('fijar');
            } else {
                this.nextElementSibling.classList.remove('fijar');
            }
            
        })
    }
    var borrar = "Borrado con EXITO!!! :)";
           alert(borrar);
}

/*Primero declaramos todas las variables que se van a utilizar */
var nombre = document.getElementById("Nombre de usuario");
var apellido = document.getElementById('Apellido de usuario');
var telefono = document.getElementById('Teléfono de usuario');
var fechadenacimiento = document.getElementById('dd/mm/aa/');
var correo = document.getElementById('Correo electrónico');
var password = document.getElementById('Contraseña');

/*  Luego se crea una variable llamada error para validar nuestro formulario */
var error = document.getElementById('error');
/* Se crea una función*/
function enviarFormulario() {

    /* Aquí se realiza larespectiva validación de los datos del formulario */
    if (nombre.value === null || nombre.value === '') {
        /*Muestra un mensaje de alerta o error que indicando que el campo a llenar está vacio*/
        alert("Ingrese su nombre");
    }

    if (apellido.value === null || apellido.value === '') {
        alert("Ingrese su apellido");
    }

    if (telefono.value === null || telefono.value === '') {
        alert("Ingrese su número telefónico");
    }

    if (fechadenacimiento.value === null || fechadenacimiento.value === '') {
        alert("Ingrese su fecha de nacimiento");
    }

    if (correo.value === null || correo.value === '') {
        alert("Ingrese su correo electrónico");
    }

    if (password.value === null || password.value === '') {
        alert("Ingrese su contraseña");
    }
    return false;
}
function myFunction() {
    var enviar = "Estimado cliente, su registro ha sido un EXITO!!! :)";
    alert(enviar);

}
