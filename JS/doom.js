const metodos = new Metodos();
//Ubicar el boton que es para contacto donde necesita escuchar el click
const btnContact = document.getElementById('btnContact');
//Ahora necesito ubicar y guardar en variables los inputs que voy a revisar que tengan algo
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
//El formulario lo necesito ubicar pora resetearlo o limpiarlo, y no puede ser con tag name porque me agarra un htmlCollection como si fueran varios entonces obviamente el codigo nova a entender que resetear
const formulario = document.getElementById('formulario');
cargarMetodos();
function cargarMetodos (){
    btnContact.addEventListener('click', (e) => {metodos.revisarBtnContacto(e)});
}