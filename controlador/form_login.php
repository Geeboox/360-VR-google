<?php
// error_reporting(0);
include_once("../modelo/conexion.php");
// include_once("../modelo/gestion.php");
include_once("../modelo/form_login.php");

// $objglobal=new gestion();
$obj=new form_login();
//$objglobal=new general();
$accion=$_REQUEST["accion"];

$id=$_REQUEST["id"];
if($accion=="1"){//grabar

	$correo_val=addslashes($_REQUEST["correo_val"]);

	if ($obj->validar_pos($correo)) {
		?>
	<script type="text/javascript">
	swal("La posición ya existe, por favor elegir otra posición.");
	mostrar_form();
	</script>
	<?php
	}else{

		//add_slider($view,$pos,$imagen,$frontend)
		$res=$obj->add_form_login($pos,$descripcion,$imagen,$url,$frontend);

		if($res==true){
			?>
			<script type="text/javascript">
			//alert("<?php echo $imagen;?>");
			swal("Buen trabajo!", "Datos registrados correctamete!", "success");
			// alert("<?php echo $view;?>");
			limpiar_Formulario("form_login");
			cargar_Pantalla("form_login");
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