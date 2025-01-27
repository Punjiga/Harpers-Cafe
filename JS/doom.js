const metodos = new Metodos();
//Ubicar el boton que es para contacto donde necesita escuchar el click
const btnContact = document.getElementById('btnContact');
//Ahora necesito ubicar y guardar en variables los inputs que voy a revisar que tengan algo
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
//El formulario lo necesito ubicar pora resetearlo o limpiarlo, y no puede ser con tag name porque me agarra un htmlCollection como si fueran varios entonces obviamente el codigo nova a entender que resetear
const formulario = document.getElementById('formulario');
//Ubicar los 3 cafes de la sección de cafeteria y la zona de la cafeteria
const coffe1 = document.getElementById('coffe1');
const coffe2 = document.getElementById('coffe2');
const coffe3 = document.getElementById('coffe3');
//Ubicar las flechas que van a controlar la interacción en el carousel de group team
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
//Ubicar el carousel que va a cambiar de posición con los clicks
const carouselGroup = document.getElementById('carouselGroup');
cargarMetodos();
function cargarMetodos (){
    btnContact.addEventListener('click', (e) => {metodos.revisarBtnContacto(e)});
    document.addEventListener('DOMContentLoaded', () => {metodos.carouselCafeteria()});
    arrowLeft.addEventListener('click', (e) =>{metodos.carouselGroupLeft(e)});
    arrowRight.addEventListener('click', (e) =>{metodos.carouselGroupRight(e)});
}