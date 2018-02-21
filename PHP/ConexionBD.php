<?php

	$usuario = "root";
	$password = "";
	$servidor = "localhost";
	$basededatos = "restaurante";
	
	// creación de la conexión a la base de datos con mysql_connect()
	$conexion = new mysqli( $servidor, $usuario, $password, $basededatos );
	if($conexion->connect_error){
		die("No conecta");
	}

	// Selección del a base de datos a utilizar
	//$db = mysqli_select_db( $conexion, $basededatos ) or die ( "No se encontro o conecto a la Base de Datos" );

?>