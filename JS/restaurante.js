/* CONTROLADOR */

//variable de navegacion por las ventanas, indica en que ventana se encuentra
var nav=0;

var datosUsuario = []; //estructura que contiene los datos del usuario

/* Toma usuario y contraseña, los busca en la BD, */

function validarUsuario(){

	var user = $("#usuario").val();
	var pass = $("#password").val();

	var parametros ={"opc": 1, "idUsuario":user, "passUsuario":pass};
	ejecutarAjax(parametros, 1);
}

/*
	recibe como parametro el arreglo que contiene los datos necesarios para la consulta en php
*/
function ejecutarAjax(datos, opc){
	$.ajax({
		type: 'post',
		url: 'PHP/consultas.php',
		data: datos,

		//recibe como parametro la respuesta del servidor 
		success : function(respuesta){
			 leerDatos(respuesta, opc);
		},

		error : function(xhr, status) {
	    	mostrarAlerta(' No se pudo realizar la conexión al servidor. ' + status)
	    },

	});
}
/*20
	toma el arreglo enviado desde el archivo php en forma de arreglo y lo convierte en arreglo tipo JSON
*/
function leerDatos(response1a, opc){
	var response = JSON.parse(response1a);
	switch(opc){
		case 1: 	// Validar usuario al ingresar 
			if(response.length > 0 ){//Si la respuesta trae algo
				datosUsuario = response;
				mostrarVentanaInicio();
			} else {
				//Mensaje error, no recibe consulta
				alert("Usuario no existe");
			}
 			break;

		case 10: 	// Mostrar pedidos en ventana Cocina
			insertarPedidosCocina(response);	
			break;

		case 20: 	// Mostrar pedidos en ventana cajero
			$('#tablaCajero').html(ListarPedidos(response));	//	lista la tabla de pedido	
			break; 
	}
}


//********** MOSTRAR VENTANAS **************//

//Segun rol se muestra la primera ventana
function mostrarVentanaInicio(){
	//verificar el rol
	if (datosUsuario[0]["idRol"] == 3) {
		mostrarVentanaChef1(datosUsuario[0]["nombre"]);	// Invoca la ventana de Cocina y envia nombre del empleado
	}
	else if(datosUsuario[0]["idRol"] == 2) {
		mostrarVentanaCajero(datosUsuario[0]["nombre"]);	//Invoca la ventana de Cajero y envia nombre del empleado
	}
	else{
		mostrarVentanaMesero(datosUsuario[0]["nombre"]);	//Invoca la ventana de Mesero y envia nombre del empleado
	}

}


//Ventana Inicial de Cocina
function mostrarVentanaChef1(nombre){
	nav = 10;
	var parametros ={"opc": nav};
	ejecutarAjax(parametros, nav);

	var txt= forPantallaChef1('COCINA', nombre);
	$('#contenedor').html(txt);
	$('#contenedor').append(cargarModalChef1());//Agrega HTML del formulario modal
}


function mostrarVentanaPedidoCocina(idPedido){
	$(".modal-title").html('Datos del Pedido No. '+ idPedido);
	$(".modal-body").html(cargarDatosPedidoChef1(idPedido));
	$("#myModal").collapse('show'); 
}

//Despliega datos de un pedido en la ventana modal ***********************
function mostrarVentanaCajero(){
	nav = 20;
	var nombre = datosUsuario[0]["nombre"];
	var txt= forPantallaCajero('Cajero', nombre);
	$('#contenedor').html(txt);
	$('#contenedor').append(cargarModal());//Agrega HTML del formulario modal
	var parametros ={"opc": nav};
	ejecutarAjax(parametros, nav);
}


function mostrarVentanaPedidoCajero(idPedido){
	$(".modal-title").html('Datos del Pedido No. '+ idPedido);
	$(".modal-body").html(cargarDatosPedido(idPedido));
	$("#myModal").collapse('show'); 
}


//Cierra el formulario modal **********************************************
function cerrarModal(){
	$("#myModal").collapse('hide');
}


//***************************
//MESERO


function mostrarVentanaMesero(nombre){
	var txt= forNuevoPedido('MESERO', nombre);
	$('#contenedor').html(txt);
	nav = 30;
}

function mostrarVentanaMesas(){
	var txt = forSeleccionarMesa();
	$('#contenedor').html(txt);
	nav = 31;
}

function mostrarDescripcionPedido(){
	var txt = forDescripcionPedido();
	$('#contenedor').html(txt);
	nav = 32;
}

function mostrarCategoriaProduto(){
	var txt = forCategoria();
	$('#contenedor').html(txt);
	nav = 33;
}

function mostrarProductos(){
	var txt = forVistaProductos();
	$('#contenedor').html(txt);
	nav = 34;
}

function mostrarConfirmacionPedido(){
	var txt = forDetalleProducto();
	$('#contenedor').html(txt);
	nav = 35;
}

function regresar(){
	switch(nav){
		case 32:
			mostrarVentanaMesero();
			break;
		case 33:
			mostrarDescripcionPedido();
			break;
		case 34:
			mostrarCategoriaProduto();
			break;
		case 35:
			 mostrarProductos();
			 break;
	}

}
