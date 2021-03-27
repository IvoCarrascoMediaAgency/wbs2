  
 //texterea
 $('#edad').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:auto;');
}).on('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});


$('.menuwbs, .colormenu2,.q').on('click', function(){
    $('#nav').toggleClass('mostrarmenu2');
  })
  
  $('#nav').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
  })
  
  
  $('.mostrarmenu2').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
    // $('#nav').removeClass('mostrarmenu2');
  
  })
  
  
  function moverseA(reservar) {
    location.hash = "#" + reservar;
  }
  
  
  $('.menuwbs, .menumovil2').on('click', function(){ 
    $('.menuwbs').toggleClass('iconnone');
  })
  
  
  $('.eti1 , .eti1b').on('click', function(){
    $('.datos1 , .datos1b').addClass('show');
    $('.datos2 , .datos2b').removeClass('show');
    $('.datos3 , .datos3b').removeClass('show');
    $('.datos4 , .datos4b').removeClass('show');
    $('.datos5 , .datos5b').removeClass('show');
    $('.datos6 , .datos6b').removeClass('show');
    $('.datos7 , .datos7b').removeClass('show');
    $('.datos8 , .datos8b').removeClass('show');
  })
  
  $('.eti2 , .eti2b').on('click', function(){
    $('.datos2 , .datos2b').addClass('show');
    $('.datos1 , .datos1b').removeClass('show');
    $('.datos3 , .datos3b').removeClass('show');
    $('.datos4 , .datos4b').removeClass('show');
    $('.datos5 , .datos5b').removeClass('show');
    $('.datos6 , .datos6b').removeClass('show');
    $('.datos7 , .datos7b').removeClass('show');
    $('.datos8 , .datos8b').removeClass('show');
  })
  
  
    $('.eti3 , .eti3b').on('click', function(){
      $('.datos3 , .datos3b').addClass('show');
      $('.datos1 , .datos1b').removeClass('show');
      $('.datos2 , .datos2b').removeClass('show');
      $('.datos4 , .datos4b').removeClass('show');
      $('.datos5 , .datos5b').removeClass('show');
      $('.datos6 , .datos6b').removeClass('show');
      $('.datos7 , .datos7b').removeClass('show');
      $('.datos8 , .datos8b').removeClass('show');
    })
  
    $('.eti4 , .eti4b').on('click', function(){
      $('.datos4 , .datos4b').addClass('show');
      $('.datos1 , .datos1b').removeClass('show');
      $('.datos2 , .datos2b').removeClass('show');
      $('.datos3 , .datos3b').removeClass('show');
      $('.datos5 , .datos5b').removeClass('show');
      $('.datos6 , .datos6b').removeClass('show');
      $('.datos7 , .datos7b').removeClass('show');
      $('.datos8 , .datos8b').removeClass('show');
    })
  
    $('.eti5 , .eti5b').on('click', function(){
      $('.datos5 , .datos5b').addClass('show');
      $('.datos1 , .datos1b').removeClass('show');
      $('.datos2 , .datos2b').removeClass('show');
      $('.datos3 , .datos3b').removeClass('show');
      $('.datos4 , .datos4b').removeClass('show');
      $('.datos6 , .datos6b').removeClass('show');
      $('.datos7 , .datos7b').removeClass('show');
      $('.datos8 , .datos8b').removeClass('show');
    })
  
    $('.eti6 , .eti6b').on('click', function(){
      $('.datos6 , .datos6b').addClass('show');
      $('.datos1 , .datos1b').removeClass('show');
      $('.datos2 , .datos2b').removeClass('show');
      $('.datos3 , .datos3b').removeClass('show');
      $('.datos4 , .datos4b').removeClass('show');
      $('.datos5 , .datos5b').removeClass('show');
      $('.datos7 , .datos7b').removeClass('show');
      $('.datos8 , .datos8b').removeClass('show');
    })
  
  
    $('.eti7 , .eti7b').on('click', function(){
      $('.datos7 , .datos7b').addClass('show');
      $('.datos1 , .datos1b').removeClass('show');
      $('.datos2 , .datos2b').removeClass('show');
      $('.datos3 , .datos3b').removeClass('show');
      $('.datos4 , .datos4b').removeClass('show');
      $('.datos5 , .datos5b').removeClass('show');
      $('.datos6 , .datos6b').removeClass('show');
      $('.datos8 , .datos8b').removeClass('show');
    })
  
    $('.eti8 , .eti8b').on('click', function(){
      $('.datos8 , .datos8b').addClass('show');
      $('.datos1 , .datos1b').removeClass('show');
      $('.datos2 , .datos2b').removeClass('show');
      $('.datos3 , .datos3b').removeClass('show');
      $('.datos4 , .datos4b').removeClass('show');
      $('.datos5 , .datos5b').removeClass('show');
      $('.datos6 , .datos6b').removeClass('show');
      $('.datos7 , .datos7b').removeClass('show');
      
    })
  
  
  $('.eti1 , .eti1b').on('click', function(){
      $('.eti1 , .eti1b').addClass('select tripimg');
      $('.eti2 , .eti2b').removeClass('select tripimg');
      $('.eti3 , .eti3b').removeClass('select tripimg');
      $('.eti4 , .eti4b').removeClass('select tripimg');
      $('.eti5 , .eti5b').removeClass('select tripimg');
      $('.eti6 , .eti6b').removeClass('select tripimg');
      $('.eti7 , .eti7b').removeClass('select tripimg');
      $('.eti8 , .eti8b').removeClass('select tripimg');
  
    })
  
    
  $('.eti2 , .eti2b').on('click', function(){
      $('.eti2 , .eti2b').addClass('select tripimg');
      $('.eti1 , .eti1b').removeClass('select tripimg');
      $('.eti3 , .eti3b').removeClass('select tripimg');
      $('.eti4 , .eti4b').removeClass('select tripimg');
      $('.eti5 , .eti5b').removeClass('select tripimg');
      $('.eti6 , .eti6b').removeClass('select tripimg');
      $('.eti7 , .eti7b').removeClass('select tripimg');
      $('.eti8 , .eti8b').removeClass('select tripimg');
  
    })
  
    $('.eti3 , .eti3b').on('click', function(){
      $('.eti3 , .eti3b').addClass('select tripimg');
      $('.eti1 , .eti1b').removeClass('select tripimg');
      $('.eti2 , .eti2b').removeClass('select tripimg');
      $('.eti4 , .eti4b').removeClass('select tripimg');
      $('.eti5 , .eti5b').removeClass('select tripimg');
      $('.eti6 , .eti6b').removeClass('select tripimg');
      $('.eti7 , .eti7b').removeClass('select tripimg');
      $('.eti8 , .eti8b').removeClass('select tripimg');
  
    })
  
    $('.eti4 , .eti4b').on('click', function(){
      $('.eti4 , .eti4b').addClass('select tripimg');
      $('.eti1 , .eti1b').removeClass('select tripimg');
      $('.eti2 , .eti2b').removeClass('select tripimg');
      $('.eti3 , .eti3b').removeClass('select tripimg');
      $('.eti5 , .eti5b').removeClass('select tripimg');
      $('.eti6 , .eti6b').removeClass('select tripimg');
      $('.eti7 , .eti7b').removeClass('select tripimg');
      $('.eti8 , .eti8b').removeClass('select tripimg');
  
    })
  
    $('.eti5 , .eti5b').on('click', function(){
      $('.eti5 , .eti5b').addClass('select tripimg');
      $('.eti1 , .eti1b').removeClass('select tripimg');
      $('.eti2 , .eti2b').removeClass('select tripimg');
      $('.eti3 , .eti3b').removeClass('select tripimg');
      $('.eti4 , .eti4b').removeClass('select tripimg');
      $('.eti6 , .eti6b').removeClass('select tripimg');
      $('.eti7 , .eti7b').removeClass('select tripimg');
      $('.eti8 , .eti8b').removeClass('select tripimg');
  
    })
  
    $('.eti6 , .eti6b').on('click', function(){
      $('.eti6 , .eti6b').addClass('select tripimg');
      $('.eti1 , .eti1b').removeClass('select tripimg');
      $('.eti2 , .eti2b').removeClass('select tripimg');
      $('.eti3 , .eti3b').removeClass('select tripimg');
      $('.eti4 , .eti4b').removeClass('select tripimg');
      $('.eti5 , .eti5b').removeClass('select tripimg');
      $('.eti7 , .eti7b').removeClass('select tripimg');
      $('.eti8 , .eti8b').removeClass('select tripimg');
  
    })
  
    $('.eti7 , .eti7b').on('click', function(){
      $('.eti7 , .eti7b').addClass('select tripimg');
      $('.eti1 , .eti1b').removeClass('select tripimg');
      $('.eti2 , .eti2b').removeClass('select tripimg');
      $('.eti3 , .eti3b').removeClass('select tripimg');
      $('.eti4 , .eti4b').removeClass('select tripimg');
      $('.eti5 , .eti5b').removeClass('select tripimg');
      $('.eti6 , .eti6b').removeClass('select tripimg');
      $('.eti8 , .eti8b').removeClass('select tripimg');
  
    })
  
    $('.eti8 , .eti8b').on('click', function(){
      $('.eti8 , .eti8b').addClass('select tripimg');
      $('.eti1 , .eti1b').removeClass('select tripimg');
      $('.eti2 , .eti2b').removeClass('select tripimg');
      $('.eti3 , .eti3b').removeClass('select tripimg');
      $('.eti4 , .eti4b').removeClass('select tripimg');
      $('.eti5 , .eti5b').removeClass('select tripimg');
      $('.eti6 , .eti6b').removeClass('select tripimg');
      $('.eti7 , .eti7b').removeClass('select tripimg');
  
    })
  
    
  
    
  
  //   Whatsapp Chat
  
  
  
  $('.cardnegocio').on('click', function(){
    $('#cardmenu').addClass('mostrarcardmenu');
  })
  
  $('#cerrarchat').on('click', function(){
    $('#cardmenu').toggleClass('mostrarcardmenu');
  })
    
    // $('.cardmenu').on('click', function(){
    //   $('#cardmenu').removeClass('mostrarcardmenu');
    //    $('#cardmenu').removeClass('cardmenu');
    
    // })
    
    // mostrar despues de 2 segundos el mensaje a whatsapp falso
    
    
      setTimeout(function() {
          $(".unowhat").fadeIn(1000);
      },8500);
  
  
    //   setTimeout(function() {
    //     $(".unowhat").fadeOut(3000);
    // },19500); oculta despues de 3 segundos el 1
    
  
    
  // $('.num').counterUp({delay:1,time:200});
    
  
  
  // new slider
  
  //almacenar slider en una variable
  var slider = $('#slider');
  //almacenar botones
  var siguiente = $('#btn-next');
  var anterior = $('#btn-prev');
  
  //mover ultima imagen al primer lugar
  $('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
  //mostrar la primera imagen con un margen de -100%
  slider.css('margin-left', '-'+100+'%');
  
  function moverD() {
      slider.animate({
          marginLeft:'-'+200+'%'
      } ,700, function(){
          $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
          slider.css('margin-left', '-'+100+'%');
      });
  }
  
  function moverI() {
      slider.animate({
          marginLeft:0
      } ,700, function(){
          $('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
          slider.css('margin-left', '-'+100+'%');
      });
  }
  
  // function autoplay() {
  // 	interval = setInterval(function(){
  // 		moverD();
  // 	}, 9000);
  // }
  siguiente.on('click',function() {
      moverD();
      clearInterval(interval);
      // autoplay();
  });
  
  anterior.on('click',function() {
      moverI();
      clearInterval(interval);
      // autoplay();
  });
  
  
   autoplay();
  
  //  smooth sroll navbar 
  //  const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  //  	speed: 2000 });
  
  //  contador de clientes
  
  function goToPage(){
    var nombre = document.getElementById('entry.865577691').value;
    var nombrenegocio = document.getElementById('entry.116133504').value;
    var tipodenegocio = document.getElementById('entry.516082604').value;
    var whatsapp = document.getElementById('entry.751884520').value;
    // var diaprueba = document.getElementById('entry.1087253973').value;
    // var horaprueba = document.getElementById('entry.1527657423').value;
  
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
       
      return (document.getElementById("demo").innerHTML =
      "Ingresa tu nombre completo")
    }
    if( nombrenegocio == null || nombrenegocio.length == 0 || /^\s+$/.test(nombrenegocio) ) {
       
      return (document.getElementById("demo").innerHTML =
      "Ingresa el nombre de tu negocio")
    }
    if( tipodenegocio == null || tipodenegocio.length == 0 || /^\s+$/.test(tipodenegocio) ) {
       
      return (document.getElementById("demo").innerHTML =
      "Selecciona el tipo de negocio")
    }
    if( whatsapp == null || whatsapp.length == 0 || /^\s+$/.test(whatsapp) ) {
       
      return (document.getElementById("demo").innerHTML =
      "Ingresa un número de WhatsApp")
    }
    // if( diaprueba == null || diaprueba.length == 0 || /^\s+$/.test(diaprueba) ) {
       
    //   return (document.getElementById("demo").innerHTML =
    //   "Selecciona el día para la prueba")
    // }
    // if( horaprueba == null || horaprueba.length == 0 || /^\s+$/.test(horaprueba) ) {
       
    //   return (document.getElementById("demo").innerHTML =
    //   "Selecciona una hora")
    // }
  
//   var myWindow = window.open ("https://api.whatsapp.com/send?phone=593996517199&text="+"Capacitación y Prueba gratis de" + "%20" + "*WhatsBulkSender™*" + "%0A"+"✅ _Registro confirmado_" + "%0A"+"_________________________" + "%0A"+"%0A"+ "*Nombre*" +"%0A" + nombre + "%20" +"%0A"+"%0A" +"*Nombre del Negocio*" +"%0A" + nombrenegocio +  "%20" + "%0A"+"%0A"+"*Tipo de Negocio*"+"%0A" + tipodenegocio + "%20" +"%0A"+ "%0A"+ "_________________________" + "%0A" + "%0A"+"*P.D.*"+ "%20"+ "Guarda nuestro contacto como *WhatsBulkSender* para recibir actualizaciones y soporte 😉👍");
  
  
  //  window.location = "https://api.whatsapp.com/send?phone=593996517199&text="+ "*Hola me llamo:*" + "%0A" + nombre + "%20" +"%0A" + nombrenegocio +  "%20" + "%0A" + tipodenegocio + "%20" + "%0A";
  
  
  
  

var whatsapp_number ="&text=Capacitación y Prueba gratis de" + "%20" + "*WhatsBulkSender™*" + "%0A"+"✅ _Registro confirmado_" + "%0A"+"_________________________" + "%0A"+"%0A"+ "*😃 Nombre:*" +"%0A" + nombre + "%20" +"%0A"+"%0A" +"*💼 Nombre del Negocio:*" +"%0A" + nombrenegocio +  "%20" + "%0A"+"%0A"+"*🛒 Tipo de Negocio:*"+"%0A" + tipodenegocio + "%20" + "%0A"+"_________________________" + "%0A"+"%0A"+"*🤖 Descarga el software en el siguiente link:*"+"%0A"+"http://bit.ly/WhatsAppMasivoGRATIS"+"%0A"+"%0A"+ "*🚀 Video tutorial paso a paso Vende con WhatsApp Masivo 2021:*"+"%0A"+"https://youtu.be/E9q_Skg3unw"+"%0A"+"%0A"+ "_________________________" + "%0A" + "%0A"+"*P.D.*"+ "%20"+ "Guarda nuestro contacto como *WhatsBulkSender* para recibir actualizaciones y soporte 😉👍";
  
  
  
   var md = new MobileDetect(window.navigator.userAgent);
   if (md.mobile()) {
   

  //   if (mostrarpedidof===''){

   
   
  //     document.getElementById("demo").innerHTML =
  //        "Aún no haz selecionado prodcutos"

  //       $('.demo').addClass('showmsg');


  //       setTimeout(function() {
  //         $(".showmsg").fadeOut(1500);
  //         },500);
        
      
      


  //     // return (document.getElementById("demo").innerHTML =
  //     //   "Aún no haz selecionado prodcutos")
  //   }
  //  else{
    window.open(document.getElementById("enviarwa").href = "https://api.whatsapp.com/send?phone=593996517199" + whatsapp_number);
  //  }
      
    

  
     

    
   

   } else {
   
     window.open(document.getElementById("enviarwa").href = "https://web.whatsapp.com/send?phone=593996517199" + whatsapp_number);

    


   }

  
  
  }
  
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
  
  
      // console.log("La multiplicación es: "+multiplicaruno)
      
  // var linkcreado5 = document.nombreobtenido2.value = multiplicaruno;
  // alert(linkcreado5)
  
  
  
  // function multiplicar2() {
  //   var n3 = document.getElementById("preciod2").value;
  //   var n4 = document.getElementById("fichavalor2").value;
  //   var multiplicardos = parseInt(n3) * parseInt(n4);
  //     alert("La multiplicación es: "+multiplicardos)
  
  
   
  
  // }
  
  // function total(){
  
  // alert("multiplicaruno+multiplicardos")
  // alert("La multiplicación es: "+multiplicaruno+multiplicardos)
          // var linkcreado = document.nombreobtenido2.value = "https://api.whatsapp.com/send?phone="+ multiplicaruno +"&text=" + multiplicardos;
  
  
  
  
  
  
  
  // document.getElementById("nombreobtenido2").write= parseInt(multiplicar1) + parseInt(multiplicar2);
  
  
  // function carritototal(){
  
  
  
  
  
  
  // var total = document.nombreobtenido2.value=  a1+a2;
  
    // document.getElementById("nombreobtenido2").write= parseInt(multiplicar1) + parseInt(multiplicar2);
  
  
      // alert("La multiplicación es: "+multiplicar1 + multiplicar2 )
  
    
    // var linkcreado2 = document.registro.nombreobtenido2.value =  carritototal;
    
  
  
  // document.write(carritototal);
  
   
  
  
    // var myWindow = window.open ("https://api.whatsapp.com/send?phone=593996517199&text="+"Tu pedido ha sido registrado con éxito" + "%20" + "*:)*" + "%0A"+"✅ _Detalle de su pedido_" + "%0A"+"_________________________" + "%0A"+"%0A"+ "*Nombre*" +"%0A" + nombre + "%20" +"%0A"+"%0A" +"*Nombre del Negocio*" +"%0A" + nombrenegocio +  "%20" + "%0A"+"%0A"+"*Tipo de Negocio*"+"%0A" + tipodenegocio + "%20" +"%0A"+ "%0A"+"*Día y hora de la prueba*"+"%0A" +diaprueba+"%0A" +carritototal+ "%0A"+ "_________________________" + "%0A" + "%0A"+"*P.D.*"+ "%20"+ "Guarda nuestro contacto como *Software de WhatsApp Marketing* para recibir 15 minutos antes el link de Zoom. Empezamos puntual 😉👍");
    // var linkcreado2 = document.registro.nombreobtenido2.value =  carritototal;
  
  
  

  
  
  //chatsend


  
  
  function obtenerdatos(){
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


  