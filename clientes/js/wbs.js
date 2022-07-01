

  function go(){
        
    if (document.form.password.value=='7777' && document.form.login.value=='demo'){ 

    //    self.close();

    var txt_user = $('#txt-user');
    var txt_password = $('#txt-password');

    //almacenar los valores dentro de localstorage
    localStorage.setItem('usuario',txt_user.value);
    localStorage.setItem('password',txt_password.value);


var txt_user = localStorage.getItem('usuario');
var txt_password =localStorage.getItem('password');



console.log(txt_user);
        
console.log(txt_password);


// if(txt_user != null && txt_password != 'undefined'){
//     //llamamos al documento sesion.html
//     window.location = 'http://127.0.0.1:5500/prueba.html';
// }
       

        } 

   
        else{ 
             alert("Por favor ingresa tus credenciales correctas."); 
    
        } 
        if (localStorage.getItem("usuario") === "demo" && localStorage.getItem("password") === "7777" ) {

            // self.close(); 
            
            
            
            console.log("autentificado");
            
            console.log(txt_user);
            
            console.log(txt_password);
            
            
            }  
        
    }

    



 

    function go2(){
    
       window.opener.location.href="https://web.whatsapp.com/";
       self.close();

}


const mouseEvent = e => {
const shouldShowExitIntent = 
  !e.toElement && 
  !e.relatedTarget &&
  e.clientY < 10;

if (shouldShowExitIntent) {
  document.removeEventListener('mouseout', mouseEvent);
  
  document.querySelector('.exit-intent-popup').classList.add('visible');
}
};

const exit = e => {
if (e.target.className === 'close') {
  document.querySelector('.exit-intent-popup').classList.remove('visible');
}
};

document.querySelector('.exit-intent-popup').addEventListener('click', exit);


setTimeout(() => {
document.addEventListener('mouseout', mouseEvent);
document.addEventListener('keydown', exit);
}, 1_000);


function go3(){

var md = new MobileDetect(window.navigator.userAgent);
 if (md.mobile()) {

  window.open("https://api.whatsapp.com/send?phone=593996517199&text=Hola! solicito ayuda mi nombre es:....") ;
  
  self.close();
    } else {
 
  window.open("https://web.whatsapp.com/send?phone=593996517199&text=Hola! solicito ayuda mi nombre es:....");

  self.close();
 
} 
}

function go5(){    
    window.opener.location.href="https://web.whatsapp.com/";
    self.close(); 
}


function go6(){   
$(".exit-intent-popup").removeClass('visible')  
}

    
    