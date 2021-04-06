// creador de links hacia whatsapp
  
function obtenerdatos()
{
var nombre = document.getElementById('nombre').value;


  if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
 
    return (document.getElementById("demo").innerHTML =
    "Ingresa un número de WhatsApp")

  
    
  }



var edad =encodeURIComponent( document.getElementById('edad').value);

if( edad == null || edad.length == 0 || /^\s+$/.test(edad) ) {
 
  return (document.getElementById("demo").innerHTML =
  "Ingresa el mensaje");
} else {
  (document.getElementById("demo").innerHTML =
  "");
}



  


    var linkcreado = document.registro.nombreobtenido.value = "https://api.whatsapp.com/send?phone="+ nombre +"&text=" + edad;

var intro = document.getElementById('demo').innerHTML =
"Aqui tienes el link";
demo.style.opacity='1';demo.style.transition='opacity 0.5s linear';


var linkcreado2 =
document.getElementById("divfantasma2");
divfantasma2.style.display='grid';divfantasma2.style.transition='0.5s linear';


} 




// function resetearcopiar()
// {

//   var copiar = document.execCommand("copy");
//   var resetear = document.getElementById("myform").reset();

// }



function myFunction() {
var copyText = document.getElementById("nombreobtenido");
copyText.select();
copyText.setSelectionRange(0, 99999)
document.execCommand("copy");


var nombreobtenido =encodeURIComponent( document.getElementById('nombreobtenido').value);
document.getElementById("demo").innerHTML =
"Link Copiado!";

if( nombreobtenido == "" || nombreobtenido.length == 0 || /^\s+$/.test(nombreobtenido) ) {
 
  return (document.getElementById("demo").innerHTML =
  "Por favor ingresa tu número y el mensaje");
}
var intro = document.getElementById('demo');
demo.style.opacity='1';demo.style.transition='opacity 0.5s linear';
// demo.style.transition= 'opacity 0.5s linear';




}


function resetear()
{
var resetear = document.getElementById("myform").reset();

document.getElementById("demo").innerHTML =
"";
document.getElementById("divfantasma2");
divfantasma2.style.display='none';divfantasma2.style.transition='0.5s linear';



}


// var resetear = document.getElementById("myform").reset();

//   var button = document.getElementById("copyID"),
//   input = document.getElementById("nombreobtenido");

// button.addEventListener("click", function(event) {
//   event.preventDefault();
//   input.select();
//   document.execCommand("copy");
// });






var n1 =document.getElementById("preciod").value;
var n2 =document.getElementById("fichavalor").value;
var multiplicaruno = parseInt(n1) * parseInt(n2) ;
// console.log("La multiplicación es: "+multiplicaruno)


function btnsuma(){

var n1 =document.getElementById("preciod").value;
var n2 =document.getElementById("fichavalor").value;

var btnsuma2= parseInt(n1) * parseInt(n2) ;
console.log(btnsuma2)

}


function btnsuma2(){

var n1 =document.getElementById("preciod2").value;
var n2 =document.getElementById("fichavalor2").value;

var btnsuma3= parseInt(n1) * parseInt(n2) ;
console.log(btnsuma3)

}




function sumaentrefuncionesf(){


alert()


}