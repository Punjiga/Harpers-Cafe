class Metodos{
    revisarBtnContacto(e){
        e.preventDefault();
        // Revisar si los input son exactamente igual a vacio, osea que no tengan nada tire el de error, de otro modo, tire que fue enviado
        if (nombre.value === '' | email.value === '' | mensaje.value === ''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Alguno de los campos quedo vacio",
            });
        }else{
            Swal.fire("¡Muchas gracias por su mensaje!");
            formulario.reset();
        }
    }
}