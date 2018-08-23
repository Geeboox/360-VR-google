<?php
	class form_register
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

		public function add_slider_logros($posicion,$descripcion,$ruta,$url,$frontend){
			$fecha=date("Y-m-d h:i:s");
			$sql=$this->con->query("insert into slider_logros values('','$posicion','$descripcion','$ruta','$url','$frontend','1')");//se envian los datos al call

			if($sql==true){
				return true;
			}else{
				return false;
			}
		}

		public function get_Tabla_slider_logros(){

			$sql=$this->con->query("select * FROM slider_logros WHERE estado=1");

			$tabla='<table class="table table-condensed" id="formatotabla">
			    <thead>
			        <tr>
			             <th>N°</th>
					        <th>Descripción</th>
					        <th>Posición</th>
					        <th>Imagen</th>
					        <th>Redirección</th>
					        <th>Estado</th>
					        <th>Opciones</th>
			        </tr>
			    </thead>
			    <tbody>';

			if($sql){
				$contador=1;
				while($rw=$sql->fetch_array()){
					$tabla.='<tr class="">';
					$tabla.='<td>'.$contador.'</td>';
					$tabla.='<td>'.$rw["descripcion"].'</td>';
					$tabla.='<td>'.$rw["posicion"].'</td>';
					$tabla.='<td>'.$rw["ruta"].'</td>';
					$tabla.='<td>'.$rw["url"].'</td>';
					if ($rw["frontend"]=="1") {
						$tabla.='<td><span class="label label-success">Activo</span></td>';
					}else{
						$tabla.='<td><span class="label label-danger">Inactivo</span></td>';
					}
					$tabla.='<td><div class="dropdown">
								    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Opciones
								    <span class="caret"></span></button>
								    <ul class="dropdown-menu">
								     <li><a onclick="consultar_slider_logros('.$rw["id_logros"].')">Consultar</a></li>
								     <li><a onclick="eliminar_Especifico('."'slider_logros'".','.$rw["id_logros"].')">Eliminar</a></li>
								    </ul>
								  </div></td>';
			        $tabla.='</tr>';
			        $contador++;
			    }

			}else{

			}
			$tabla.='</tbody></table>';
			return $tabla;
		}

		/*funcion para modificar los datos ingresados*/

		public function update_slider_logros($posicion,$descripcion,$ruta,$url,$frontend,$id){

			$sql=$this->con->query("UPDATE slider_logros set posicion='$posicion', descripcion='$descripcion', url='$url', ruta='$ruta', frontend='$frontend'
				where id_logros='$id' and estado='1'");

			if($sql){//se pregunta que cumnplan las dos consultas.
				return true;
			}else{
				return false;
			}
		}

		public function delete_slider_logros($id){

			$sql=$this->con->query("UPDATE slider_logros set estado='0'
				where id_logros='$id'");

			if($sql){//se pregunta que cumnplan las dos consultas.
				return true;
			}else{
				return false;
			}
		}

        /*funcion que permite mostrar losdatos de un usuario en especifico, por el id de registro.*/
		public function get_slider_logros_especifico($id){

			$sql=$this->con->query("select * from slider_logros
				where id_logros='$id' and estado='1' order by 1 desc");

			while($rw=$sql->fetch_array())
			{
				$this->datos[]=$rw;
			}

			return $this->datos;
		}

		public function validar_pos($posicion){
			$sql=$this->con->query("select * from slider_logros where posicion='$posicion' and estado='1'");
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

		public function get_active(){

			$sql=$this->con->query("select count(*) as num from slider_logros where frontend='1' and estado='1' order by 1 desc");
			
			$rw=$sql->fetch_array();
			return $rw["num"];
		}


	}
 ?>


