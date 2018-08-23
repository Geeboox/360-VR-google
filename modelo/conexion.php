<?php

class conexion{

		public static function connect(){

			$con=new mysqli("database.mood.pe", "rcastillo", "MoodDigital", "bd_viajes");
			$con->query("SET NAMES utf8");

			if($con){
				return $con;
			}else{
				return false;
			}

		}
	}

// $con=new mysqli("database.mood.pe", "rcastillo", "MoodDigital", "pansoy");

?>