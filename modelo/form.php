<?php
	class form
	{

		/*se declaran las variables privadas*/
		private $con;
		private $datos;

		/*se crea el contructor*/

		public function __construct()
		{
			$this->con=Conexion::connect();
			$this->datos=array();

		}

		public function add_form_register($nombre,$correo){
			$fecha=date("Y-m-d h:i:s");
			$sql=$this->con->query("insert into registro values('','$nombre','$correo','$fecha')");//se envian los datos al call

			if($sql==true){
				return true;
			}else{
				return false;
			}
		}


		public function validar_pos($correo){
			$sql=$this->con->query("select * from registro where correo='$correo'");
			while($rw=$sql->fetch_array())
			{
				$this->datos[]=$rw;
			}
			return $this->datos;
		}

		public function get_rows(){

			$sql=$this->con->query("select * from slider_logros where frontend='1' and estado='1' order by id_logros desc");
			
			while($rw=$sql->fetch_array())
			{
				$this->datos[]=$rw;
			}

			return $this->datos;
		}
		
	}
 ?>


