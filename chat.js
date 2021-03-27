
  function obtenerdatos2(){
    var nombre = document.getElementById('edad').value;
  
 
  
    $('#cerrarchat').on('click', function(){
   
        document.getElementById("whaterror").style="display: none";
      })

    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
       
        return (document.getElementById("whaterror").innerHTML =
        "¿Como podemos ayudarte? 😽👇",document.getElementById("whaterror").style=" color: #25d366; position: relative; padding: 15px;  margin: 0 26px 20px; border-radius: 15px; background-color: #fff; color: #4a4a4a; box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%); transition: 0.5s ease-in-out;")
      }

   
  

  

      document.getElementById('edad').value = '';
      document.getElementById('edad').style ="height 0";

    var myWindow = "&text="+nombre;
  
    var md = new MobileDetect(window.navigator.userAgent);
       if (md.mobile()) {
  
        window.open(document.getElementById("enviarwa2").href = "https://api.whatsapp.com/send?phone=593996517199" + myWindow);
  
      } else {
       
        window.open(document.getElementById("enviarwa2").href = "https://web.whatsapp.com/send?phone=593996517199" + myWindow);
   
       
   
   
      }
   
  }

