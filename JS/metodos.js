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
    carouselGroupLeft() {
        carouselGroup.style.transform= 'translateX(-33.3%)';
    }
    
    carouselGroupRight() {
        carouselGroup.style.transform = 'translatex(+33.3%)';
    }
    carouselCafeteria(){
    //Necesito en una constante guardar las variables en modo de arreglo
    const containersCafes = [coffe1, coffe2, coffe3];
    //Necesito una variable que va a manejar que se mueva en el arreglo para quitar y poner la clase visible
    let currentIndex = 0;
    function cambiarCafe(){
        //Esta funcion lo que va a hacer es ocultar el contenedor que este en ese momento y pasarle a la posicón del otro para mostrarlo y asi sucesivamente
        containersCafes[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % containersCafes.length;
        containersCafes[currentIndex].classList.add('visible');
    }
    //Para llamar a la funcion cada 8 segundos
    setInterval(cambiarCafe, 8000);
    containersCafes[currentIndex].classList.add('visible')
    }
}