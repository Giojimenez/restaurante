<?php
ini_set('display_errors','On');
error_reporting(E_ALL | E_STRICT);

$opc= $_POST['opc'];


switch ($opc) {
	case 1:
		$uName = $_POST["idUsuario"];
		$pWord = $_POST["passUsuario"];
		$consulta = "SELECT * FROM usuario WHERE nombre='{$uName}'  and contrasena = '{$pWord}'";
		leerRegistro($consulta);
		break;

	case 10: // Consultar pedidos para ventana Cocina
		$consulta = "SELECT P.idPedido, U.nombre AS nombreMesero, P.numMesa, P.idEstado, E.estado AS estadoPedido FROM pedidos P JOIN usuario U ON P.idMesero = U.idUsuario JOIN estadoPedido E ON  P.idEstado = E.idEstado WHERE P.idEstado > 1 AND P.idEstado < 5";
		leerRegistro($consulta);
		break;
	
	case 20: // consulta pedidos para la ventana cajero
			$consulta= "SELECT p.idPedido, f.valorFactura, estado  FROM factura as f
						inner join pedidos as p ON f.idPedido = p.idPedido
						INNER JOIN estadopedido as e on p.idEstado = e.idEstado";
			leerRegistro($consulta);
			break;	

	default:
		# code...
		break;

}


/****** LEER REGISTRO   ******************************************************
* ejecuta la consulta y devuelve datos en formato JSON
*****************************************************************************/
function leerRegistro($sql){
	include("ConexionBD.php");
	$result = $conexion->query($sql);
	$rows = array();
	if ($result != NULL && $result->num_rows > 0){

		while(($r = mysqli_fetch_assoc($result))) {
			$rows[] = $r;
		}
		mysqli_free_result($result);
	}
	mysqli_close($conexion);
	echo json_encode($rows);
}

?>