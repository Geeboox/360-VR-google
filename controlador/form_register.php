<?php
// error_reporting(0);
include_once("../modelo/conexion.php");
// include_once("../modelo/gestion.php");
include_once("../modelo/form.php");

// $objglobal=new gestion();
$obj=new form_register();
//$objglobal=new general();
$accion=$_REQUEST["accion"];

$id=$_REQUEST["id"];
if($accion=="1"){//grabar

	$nombre=addslashes($_REQUEST["nombre"]);
	$correo=addslashes($_REQUEST["correo"]);


	if ($obj->validar_correo($correo)) {
		?>
	<script type="text/javascript">
	swal("El correo ya existe, por favor elegir otro correo.");
	</script>
	<?php
	}else{
		//add_slider($view,$pos,$imagen,$frontend)
		$res=$obj->add_form_register($nombre,$correo);

		if($res==true){
			?>
			<script type="text/javascript">
			//alert("<?php echo $imagen;?>");
			swal("Buen trabajo!", "Datos registrados correctamete!", "success");
			// alert("<?php echo $view;?>");
    		window.open("pagina_final.html");
			</script>
			<?php
			}else{
			?>
			<script type="text/javascript">
			swal("Mal trabajo!", "Datos no registrados", "error");
			</script>
			<?php
		}
	}

}