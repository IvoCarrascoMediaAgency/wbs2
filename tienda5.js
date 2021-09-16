/*
pedido_store : Variable del tipo objeto que se encargara de 
registrar que productos y en que cantidad han sido seleccionados
en el pedido
*/
const pedido_store = {
    /*PROPIEDAD : TIPO LISTA DE OBJETOS*/
    categories:{
      //CATEGORIAS DE PRODUCTOS A OFERTAR
      'C1':{
      items:{
      
  
  
  
        'I1':{
        //NOMBRE DEL ITEM
        name:'Licencia Anual',
        //PRECIO BASE DEL ITEM
        antes:197.99,
        price:99,
        //CANTIDAD ESCOGIDA DEL ITEM
        qty:0,
        //FUENTE DE LA IMAGEN
        img:'img/whatsapp-marketing-precios.webp',
        },
        // 'I2':{
        // name:'Licencia Semestral',
        // price:75,
        // qty:0,
        // img:'img/whatsapp-masivo-precios-6-meses.webp',
        // },
        // 'I3':{
        // name:'Licencia Trimestral',
        // price:45,
        // qty:0,
        // img:'img/whatsapp-masivo-precios-3-meses.webp',
        // },
        // 'I4':{
        // name:'Licencia Mensual',
        // price:19.99,
        // qty:0,
        // img:'img/whatsapp-masivo-precios-mensual.webp',
        // },
      },
        /*NOMBRE CATEGORIA*/
        namec:'Servicio Destacado:',
      },
      // 'C2':{
      //    items:{
          
      //     'I1':{
      //       //NOMBRE DEL ITEM
      //       name:'Mascara Led con Cuello 7 Colores',
      //       //PRECIO BASE DEL ITEM
      //       price:123.20,
      //       //CANTIDAD ESCOGIDA DEL ITEM
      //       qty:0,
      //       //FUENTE DE LA IMAGEN
      //       img:'equipo1.jpg',
      //       },
      //       'I2':{
      //       name:'LUPA CON PEDESTAL',
      //       price:127.00,
      //       qty:0,
      //       img:'equipo2.jpg',
      //       },
      //       'I3':{
      //       name:'EQUIPO 4 EN 1 MICRO GALVÁNICA',
      //       price:343.00,
      //       qty:0,
      //       img:'equipo3.jpg',
      //       },
      //       'I4':{
      //       name:'PRESOTERAPIA',
      //       price:518.00,
      //       qty:0,
      //       img:'equipo4.jpg',
      //       },
      //   },
      //   namec:'Equipos',
      // },
      // 'C3':{
      //   items:{
         
      //     'I1':{
      //       //NOMBRE DEL ITEM
      //       name:'CAMILLA FACIAL Y CORPORAL MÁS TABURETE',
      //       //PRECIO BASE DEL ITEM
      //       price:275.00,
      //       //CANTIDAD ESCOGIDA DEL ITEM
      //       qty:0,
      //       //FUENTE DE LA IMAGEN
      //       img:'mobiliario1.jpg',
      //       },
      //       'I2':{
      //       name:'CAMILLA FACIAL Y CORPORAL',
      //       price:350.00,
      //       qty:0,
      //       img:'mobiliario2.jpg',
      //       },
      //       'I3':{
      //       name:'MESA 3 NIVELES BLANCA CON CAJÓN',
      //       price:80.00,
      //       qty:0,
      //       img:'mobiliario3.jpg',
      //       },
      //       'I4':{
      //       name:'MESA DE 2 NIVELES CON CAJÓN',
      //       price:120.00,
      //       qty:0,
      //       img:'mobiliario4.jpg',
      //       },
      //   },
      //   namec:'Mobiliario',
      // }
    },
    /*items:{
    'I1':{
      //NOMBRE DEL ITEM
      name:'Papas Fritas',
      //PRECIO BASE DEL ITEM
      price:1.99,
      //CANTIDAD ESCOGIDA DEL ITEM
      qty:0,
      //FUENTE DE LA IMAGEN
      img:'papas.png',
    },
    'I2':{
      name:'Hamburguesa',
      price:2.99,
      qty:0,
      img:'hamburguesa.png',
    },
    'I3':{
      name:'Pizza',
      price:1.99,
      qty:0,
      img:'pizza.png',
    },
    'I4':{
      name:'Alitas BBQ',
      price:5.99,
      qty:0,
      img:'alitas.png',
      },
    },*/
    //DATOS A CONTROLAR DEL USUARIO
    user_data:{
      user_name:{
        //VALOR ACTUAL EN EL CAMPO
        value:'',
        //ERROR A DESPLEGAR EN CASO DE NO RELLENAR CAMPO
        error:'',
      },
      user_phone:{
        value:'',
        error:'',
      },
      user_dir:{
        value:'',
        error:'',
      },
      user_zone:{
        value:'',
        error:'',
      },
      user_mail:{
        value:'',
        error:'',
      }
    }
  };
  