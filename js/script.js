$(document).ready(function(){

  $('#formatotabla').dataTable({
                 "language": {
                "lengthMenu": "Ver los _MENU_ Primeros Registros",
                "zeroRecords": "Nothing found - sorry",
                "info": "Pagina Nº _PAGE_ de _PAGES_",
                "infoEmpty": "No se encontraron registros",
                "infoFiltered": "(filtered from _MAX_ total records)",
                "sSearch":         "BUSCAR:",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",

                 "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
                },
                 "fnInfoCallback": null}
     });


$("#home-form_register").on("submit",function (e){//se mpregunta si ya se preiocnó el boton submit, que en este cdaso es el mguardar

   e.preventDefault();//no se
   var f = $(this);//tampoco se

    swal({   title: "Esta seguro de enviar los datos",
          text: "Esta a punto de enviar los datos",
          type: "info",
          confirmButtonText: "Enviar",
          cancelButtonText: "Cancelar",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,},
          function(){
            var formData= new FormData(document.getElementById("form_register"));//se crea el formato de datos, para enio de archivos y datos
            formData.append("dato", "valor");//colocar esto
            $.ajax({//envia por ajax
            url: "controlador/form_register.php",//url
            type: "post",//tipo post
            dataType: "html",
            data: formData,//se manda con todo por la foto
            cache: false,
            contentType: false,
            processData: false,
            success:function(data){
                  $("#Resultado_general1").html(data);//aqui se muestra el resultado
                  window.location.reload();
            }
        });

      });

});



  $("#form_login").on("submit",function (e){//se mpregunta si ya se preiocnó el boton submit, que en este cdaso es el mguardar

   e.preventDefault();//no se
   var f = $(this);//tampoco se

    swal({   title: "Esta seguro de enviar la imagen",
          text: "Esta a punto de enviar la imagen",
          type: "info",
          confirmButtonText: "Enviar",
          cancelButtonText: "Cancelar",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,},
          function(){
            var formData= new FormData(document.getElementById("form_login"));//se crea el formato de datos, para enio de archivos y datos
            formData.append("dato", "valor");//colocar esto
            $.ajax({//envia por ajax
            url: "controlador/form_login.php",//url
            type: "post",//tipo post
            dataType: "html",
            data: formData,//se manda con todo por la foto
            cache: false,
            contentType: false,
            processData: false,
            success:function(data){
                  $("#Resultado_general2").html(data);//aqui se muestra el resultado
                  //window.location.reload();
            }
        });

      });

});


});


function toDateTime(date) {
    var str = '';
    var year, month, day, hour, min;
    year = date.getUTCFullYear();
    month = date.getUTCMonth() + 1;
    month = month < 10 ? '0' + month : month;
    day = date.getUTCDate();
    day = day < 10 ? '0' + day : day;
    hour = date.getUTCHours();
    hour = hour < 10 ? '0' + hour : hour;
    min = date.getUTCMinutes();
    min = min < 10 ? '0' + min : min;

    str += year + '-' + month + '-' + day;
    str += ' ' + hour + ':' + min;
    return str;
}

function consultar_Especifico(pantalla,id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego modfiicarlo
  var url = "controlador/"+pantalla+".php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   $("input:text:visible:first").focus();
               }
             });
}

function consultar_usuario(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/usuario.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}

function consultar_sliders(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/sliders.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}

function consultar_videos(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/videos.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}

function consultar_slider_logros(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/slider_logros.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}

function consultar_departamento(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/departamento.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}


function consultar_recetas_departamento(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/recetas_departamento.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}


function consultar_provincia(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/provincia.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}


function consultar_productos(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/productos.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}

function consultar_eventos_recursos(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/eventos_recursos.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}


function consultar_locales(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/locales.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}


function consultar_preg_frecuentes(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/preg_frecuentes.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}


function consultar_contenido_file(id){

  document.getElementById("accion").value="3";//se envia valor de la accion al input para luego consultarlo
  var url = "controlador/contenido_file.php";//url
  var accion="2";//consultar, esta opcion se envia para procesarlo

        $.ajax({
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//Como no se envia formnulario se especifican los valores a enviar por post
               success: function(data)
               {
                mostrar_form();
                   $("#Resultado_general").html(data);//aqui se muestra el resultado del proceso
                   //$("input:text:visible:first").focus();
               }
             });
}

function limpiar_Formulario(formulario){
  document.getElementById(formulario).reset();
  $("#accion").val("1");
  $("#id").val("");
  $("#nombrepantalla").val(formulario);
  $("input:text:visible:first").focus();
}

function eliminar_Especifico(pantalla,id){

   var accion="4";//se inicializa la accion
   if(id==""){//se pregunta si se ha consultado
   }else{//caso contrario hace esto

    swal({   title: "¿Está seguro de eliminar este registro?",
      text: "Esta a punto de eliminar este registro",
      type: "info",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
      closeOnConfirm: false,
      showLoaderOnConfirm: true, },
      function(){

      var url = "controlador/"+pantalla+".php";//url

          $.ajax({//envio por ajax
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//se envia los datos para procesarlos
               success: function(data)
               {
                   $("#Resultado_general").html(data);//respuesta
               }
             });
    });
   }

}

function eliminar_usuario(pantalla,id){

   var accion="4";//se inicializa la accion
   if(id==""){//se pregunta si se ha consultado
   }else{//caso contrario hace esto

    swal({   title: "¿Está seguro de eliminar este registro?",
      text: "Esta a punto de eliminar este registro",
      type: "info",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
      closeOnConfirm: false,
      showLoaderOnConfirm: true, },
      function(){

      var url = "controlador/"+pantalla+".php";//url

          $.ajax({//envio por ajax
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//se envia los datos para procesarlos
               success: function(data)
               {
                   $("#Resultado_general").html(data);//respuesta
               }
             });
    });
   }

}


// Para autocompletar

    function autocompletar(pantalla) {
      var min_length = 0; // variable length

      var nombre = $('#'+pantalla).val();//obtener el nombre y/o termino de busqeuda
      var formulario = $('#nombrepantalla').val();//obtener el nombre y/o termino de busqeuda

      if(formulario=="proceso_compra" && pantalla=="producto"){
        var accion = "7";
      }else{
        var accion = "6";
      }

      if (nombre.length > min_length) {
        $.ajax({
          url: 'controlador/'+pantalla+'.php',
          type: 'POST',
          data: {nombre:nombre,accion:accion},
          success:function(data){
            $('#lista'+pantalla).show();//mistrar la lista
            $('#lista'+pantalla).html(data);//mostrar resultado de consulta en la lista
          }
        });
      } else {
        $('#lista'+pantalla).hide();
      }
    }


    // funcion que setea valores a los input despues de busqueda
    function set_item(pantalla,id,nombre,cantidad) {

      $('#'+pantalla).val(nombre);$('#id_'+pantalla).val(id);$('#lista'+pantalla).hide();

      if(pantalla=="insumo"){
        $('#cantidad_actual').val(cantidad);
      }
    }

function verficiar_Stock(){

    var canti=$("#cantidad").val().trim();
    var cantidad_actual=$("#cantidad_actual").val().trim();

    if(cantidad_actual==""){

      alert("Debe seleccionar un producto");
      $("#cantidad").val('0.1');
       $("#producto").focus();

    }else{
        if(cantidad_actual=="0"){
           alert("Usted no puede comprar este producto");
           $("#cantidad").val('');
           $("#producto").focus();
        }
    }

}

function multiplicar_Entrada(){
  var precio=$("#precio").val();var cantidad=$("#cantidad").val();
  if(precio==""){
    precio=0;
  }

  if(cantidad==""){
    cantidad=1;
  }
  multi=precio*cantidad;
  $("#total").val(multi);
}

function numeros(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " 0123456789";
    especiales = [8,37,39,46];

    tecla_especial = false
    for(var i in especiales){
     if(key == especiales[i]){
         tecla_especial = true;
         break;
            }
        }

    if(letras.indexOf(tecla)==-1 && !tecla_especial)
        return false;
}

function cancelar(formulario){
  document.getElementById(formulario).reset();
  $("#accion").val("1");$("#id").val("");$("#nombrepantalla").val(formulario);$("input:text:visible:first").focus();
  no_mostrar_form();
  document.getElementById("preview").src="";
}


function cancelar_compra(formulario,id){

  document.getElementById(formulario).reset();
  $("#accion").val("1");$("#id").val("");$("#nombrepantalla").val(formulario);$("input:text:visible:first").focus();

   var accion="6";//se inicializa la accion
   if(id==""){//se pregunta si se ha consultado
   }else{//caso contrario hace esto

      swal({   title: "¿Está seguro de eliminar este registro?",
        text: "Esta a punto de eliminar este registro",
        type: "info",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true, },
        function(){

        var url = "controlador/"+formulario+".php";//url

            $.ajax({//envio por ajax
                 type: "POST",
                 url: url,
                 data: {accion:accion,id:id},//se envia los datos para procesarlos
                 success: function(data)
                 {
                     $("#Resultado_general").html(data);//respuesta
                 }
               });
      });
   }
}


function cancelar_venta(formulario,id){

  document.getElementById(formulario).reset();
  $("#accion").val("1");
  $("#id").val("");
  $("#nombrepantalla").val(formulario);
  $("input:text:visible:first").focus();

   var accion="6";//se inicializa la accion
   if(id==""){//se pregunta si se ha consultado
   }else{//caso contrario hace esto

    swal({   title: "¿Está seguro de eliminar este registro?",
      text: "Esta a punto de eliminar este registro",
      type: "info",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
      closeOnConfirm: false,
      showLoaderOnConfirm: true, },
      function(){

      var url = "controlador/"+formulario+".php";//url

          $.ajax({//envio por ajax
               type: "POST",
               url: url,
               data: {accion:accion,id:id},//se envia los datos para procesarlos
               success: function(data)
               {
                   $("#Resultado_general").html(data);//respuesta
               }
             });
    });
   }
}


function cargar_Pantalla(pantalla){
 var accion="5";//cargar nuevamente los datos en la tabla
 var url = "controlador/"+pantalla+".php";//url

         $.ajax({//envio por ajax
              type: "POST",
              url: url,
              data: {accion:accion},//se envia los datos para procesarlos
              success: function(data){
                  $("#tablaprincipal").html(data);//respuesta
                  
              }
            });
}


function seleccionar_img(e){
  //alert('ingresa');
  $(e).css("border","7px solid #ccc");
  //$(this).css("border","7px solid #ccc");
}

function mostrar_form(){
  $("#formno").css("display","block");
}

function no_mostrar_form(){
  $("#formno").css("display","none");
}


function ver_provincias(){
  var accion="6";
  var departamento=$("#depar").val();
  var url = "controlador/accion.php";//url
            $.ajax({//envio por ajax
                         type: "POST",
                         url: url,
                         data: {accion:accion,departamento:departamento},//se envia los datos para procesarlos
                         success: function(data)
                         { 
                          $("#provincia_m").html(data);//respuesta
                         }
                       });
}

function ver_provincias_2(departamento,id_provincia){
  var accion="7";
  var url = "controlador/accion.php";//url
            $.ajax({//envio por ajax
                         type: "POST",
                         url: url,
                         data: {accion:accion,departamento:departamento,id_provincia:id_provincia},//se envia los datos para procesarlos
                         success: function(data)
                         { 
                          $("#provincia_m").html(data);//respuesta
                         }
                       });
}


