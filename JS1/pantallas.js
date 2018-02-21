/* Contiene los formatos de pantalla*/

/*Presenta tabla de pedidos para preparacion y despacho por el Chef*/


function forPantallaChef1(modulo, empleado){
	var txt =forEncabezado(modulo, empleado);

	txt +='<div id="cont_centro"><div id="tbl_cocina"><table class="table table-hover table-striped">';
	txt +='<thead><tr><th>Pedido</th><th>Mesero</th><th>Mesa</th><th>Estado</th></tr></thead>';
	txt +='<tbody id="tablaPedidos"></tbody></table></div></div>';
	return txt;
}

function insertarPedidosCocina(pedidos){
	var txt = '';
	txt +='<thead><tr><th>Pedido</th><th>Valor</th><th>Estado</th></tr></thead>';
	for (var i = 0; i < pedidos.length; i++){
	 	txt += '<tr><td>' + pedidos[i]["idPedido"] + '</td><td>' + pedidos[i]["nombreMesero"] + '</td>';
	 	txt += '<td>' + pedidos[i]["numMesa"] + '</td>';	
		txt += '<td><button type="button" class="btn '+ tomarColorBoton(pedidos[i]["idEstado"])+' btn-tabla"';
		txt += ' onclick = "cargarDatosPedidoChef1('+ pedidos[i]["idPedido"] +')">'+ pedidos[i]["estadoPedido"] +'</button></td></tr>';
	}

	$('#tablaPedidos').html(txt);
}
//
function ListarPedidos(pedidos){
	var txt = '';

	for (var i = 0; i < pedidos.length; i++){
	 	txt += '<tr><td>' + pedidos[i]["idPedido"] + '</td><td>' + pedidos[i]["valorFactura"] + '</td>';
	 	txt += '<td><button type="button" class="btn '+ tomarColorBoton(pedidos[i]["idEstado"])+' btn-tabla"';
		txt += '+ pedidos[i]["idPedido"] +)">'+ pedidos[i]["estado"] +'</button></td></tr>';
	}

	return txt;
}

//devuelve el nombre de la clase Boostrap, segun estado 
function tomarColorBoton(estado){
	var txt = '';
	switch (estado){
		case "1":
			txt = 'btn-basic';
			break;
		case "2":
			txt = 'btn-danger';
			break;
		case "3":
			txt = 'btn-warning';
			break;
		case "4":
			txt = 'btn-info';
			break;
		case "5":
			txt = 'btn-success';
			break;
		case "6":
			txt = 'btn-primary';
			break;
		default:
			txt = 'btn-default';
			break;

	}

	return txt;
}

/*Presenta tabla de pedidos para generar factura*/

function forPantallaCajero(modulo, empleado){
	var txt =forEncabezado(modulo, empleado);

	txt +='<div id="cont_centro"><table class="table table-hover table-striped">';
	txt +='<thead><tr><th>Pedido</th><th>Valor</th><th>Estado</th><th>Ver Pedido</th></tr></thead>';
	txt +='<tbody id = "tablaCajero"></tbody></table></div>';
	return txt;
}

/*Presenta el encabezado de las pantallas*/
function forEncabezado(modulo, empleado){
	var txt ='<div id="cont_norte"><div id="imagenLogo" class="col-xs-3 col-xs-offset-1 ">';
	txt +='<img src="img/logo1.png" alt="logo" id="imgLoginChef"></div>';
	txt +='<div class="col-xs-6"><div id="logoModulo" class="col-xs-12 col-md-6"><h1>'+ modulo +'</h1></div>';
	txt +='<div id="logoNombre" class="col-xs-12 col-md-6"><h1>'+ empleado +'</h1></div></div>';
	txt +='<div id="cerrarSesion" class="col-xs-2 "><button class="btn" id="btnCerrar"><span class="glyphicon glyphicon-off"></span></button></div></div>';
	return txt;
}

function forEmergente(){

}

// funcion para cargal el modal********************

function cargarModalChef1(){
	var txt='<!-- Modal --><div class="modal fade" id="myModal" role="dialog">';
	txt += '<div class="modal-dialog">';
	txt += '<!-- Modal content--><div class="modal-content">';
	txt += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button>';
	txt += '<div id="numeroPedido"><h1>NUMERO PEDIDO</h1></div></div>';
	txt += '<div class="modal-body"><div id="detallePedidoCocina"><div class="tbl_cocina" id="tablaCocinaDetalle">';
	txt += '<table class="table table-bordered"><thead><tr><th scope="col">Productos</th><th scope="col">Cantidad</th></tr>';
	txt += '</thead><tbody><tr><td>arroz con huevo</td><td>5</td></tr><tr><td>arroz con huevo</td><td>5</td></tr><tr><td>arroz con huevo</td><td>5</td></tr><tr><td>arroz con huevo</td><td>5</td></tr><tr><td>arroz con huevo</td><td>5</td></tr><tr><td>arroz con huevo</td><td>5</td></tr></tbody></table></div></div></div>';
	txt += '<div class="modal-footer"><div id="pedidoCocinaSur"><button type="button" class="btn btn-warning">PREPARAR</button>';
	txt += '<button type="button" class="btn btn-success">ENTREGAR</button></div>';
	txt += '</div></div></div></div>';
	return txt;
}


function cargarModal(){
	var txt='<!-- Modal --><div class="modal fade" id="myModal" role="dialog">';
	txt += '<div class="modal-dialog">';
	txt += '<!-- Modal content--><div class="modal-content">';
	txt += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" >&times;</button>';
	txt += '<h4 class="modal-title"></h4></div>';
	txt += '<div class="modal-body">'+cargarDatosPedido(4)+'</div><div class="modal-footer">';
	txt += '<button type="button" class="btn btn-success" data-dismiss="modal" >Imprimir Fact.</button>';
	txt += '</div></div></div></div>';
	return txt;
}

//**** HTML con datos de un Pedido a cargar en ventana modal, PROVISIONAL??? ***********************
//CONTINUAR CON ESTE METODO
function cargarDatosPedidoChef1(idPedido){
	var txt = '<h5>Encabezado pedido '+ pedidos[i]["idPedido"] +' </h5>';
	var txt = '<table class="table table-hover table-striped">';
	txt +='<thead><tr><th>Descripcion</th><th>Cantidad</th><th>Valor Uunit.</th><th>Total</th></thead>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td></td><td></td><td>Sub Total</td><td>$150.000</td></tr>';
	txt +='<tr><td></td><td></td><td>Iva</td><td>$15.000</td></tr>';
	txt +='<tr><td></td><td></td><td>Total</td><td>$165.000</td></tr>';
	txt +='</tbody></table>';
	return txt;		
}

function cargarDatosPedido(idPedido){
	var txt = '<h5>Encabezado pedido '+ idPedido +'</h5>';
	var txt = '<table class="table table-hover table-striped">';
	txt +='<thead><tr><th>Descripcion</th><th>Cantidad</th><th>Valor Uunit.</th><th>Total</th></thead>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td>Churrasco Argentino</td><td>3</td><td>3</td><td>3</td></tr>';
	txt +='<tr><td></td><td></td><td>Sub Total</td><td>$150.000</td></tr>';
	txt +='<tr><td></td><td></td><td>Iva</td><td>$15.000</td></tr>';
	txt +='<tr><td></td><td></td><td>Total</td><td>$165.000</td></tr>';
	txt +='</tbody></table>';
	return txt;		
}


//MESERO

/*Encabezado módulo mesero*/
function forEncabezadoMesero(modulo, empleado){
	var txt='<div class="div-center"><div class="content"><div id="head"><img class="img-responsive" src="img/logo1.png" alt="logo" id="imgLogin"><div id="txtHead">';
	txt +='<h4 class="pull-right">'+modulo+': '+empleado+';</h4><hr/></div></div><div id="asignar">';
	return txt;
}

/*Ventana inicial del mesero donde se solicitan un y visualizan los pedidos*/ 
function forNuevoPedido(modulo, empleado){
	var txt= forEncabezadoMesero(modulo, empleado);
	txt += '<table class="table table-bordered table-light" ><thead><tr class="table-active">';
	txt += '<th scope="col">Pedido</th><th scope="col">Mesa</th><th scope="col"></span></th></tr></thead><tbody><tr><td scope="row">1</td><td>15</td><td><button onClick="mostrarDescripcionPedido()" class="btn btn-info" >Solicitar</button></td>';
	txt += '</tr><tr><td scope="row">2</td><td>8</td><td><button onClick="mostrarDescripcionPedido()" class="btn btn-info">Solicitar</button></td></tr><tr><td scope="row">3</td><td>12</td><td><button onClick="mostrarDescripcionPedido()" class="btn btn-info">Solicitar</button></td>';
	txt += '</tr></tbody></table></div><hr/><div id="campoBtn"><button onclick="mostrarVentanaMesas()" type="button" class="btn btn-default pull-right">Nuevo</button></div></div></div>';		
	return txt;
}

/*Ventana de asignacion de mesas disponibles*/ 
function forSeleccionarMesa(){
var txt='<div class="div-center"><div class="content"><div id="head"><img src="img/logo1.png" alt="logo" id="imgLogin"><h2></h2>';
txt += '<hr /></div><div id="asignar"><table class="table table-bordered table-light" ><thead><tr class="table-active">';
txt += '<th scope="col">Mesa</th><th scope="col">Capacidad</th><th scope="col"></th></tr></thead><tbody><tr><td scope="row">15</td>';
txt += '<td>4</td><td><button onClick="mostrarCategoriaProduto()" class="btn btn-info"><span class="glyphicon glyphicon-ok"></span></button></td></tr><tr><td scope="row">8</td>';
txt += '<td>2</td><td><button onClick="mostrarCategoriaProduto()" class="btn btn-info"><span class="glyphicon glyphicon-ok"></span></button></td></tr><tr><td scope="row">12</td>';
txt += '<td>8</td><td><button onClick="mostrarCategoriaProduto()" class="btn btn-info"><span class="glyphicon glyphicon-ok"></span></button></td></tr></tbody></table></div>';
txt += '<hr/><div id="campoBtn"></div></div></div>';
/*<button class="btn btn-info pull-left" onClick="regresar()" id="btnRegreso"><span class="glyphicon glyphicon-chevron-left"></span></button>*/
	return txt;	
}

function forDescripcionPedido(){
	var txt='<div class="div-center"><div class="content"><div id="head"><img src="img/logo1.png" alt="logo" id="imgLogin"><h3>Menú del Día</h3>';
	txt +='<hr /></div><div id="asignar"><table class="table table-bordered table-light" ><thead><tr class="table-active"><th scope="col">Descripción</th>';
	txt +='<th scope="col">Cantidad</th></tr></thead><tbody><tr><th scope="row">Arroz con Pollo</th><td>1</td></tr><tr><th scope="row">Churrasco</th>';
	txt +='<td>3</td></tr></tbody></table><div align="right"><p class="valorT"><b>Valor Total:</b></p><h4 class="valorT">$50000</h4></div></div><br>';
	txt +='<hr /><div="campoBtn"><button class="btn btn-info" onClick="regresar()" id="btnRegreso"><span class="glyphicon glyphicon-chevron-left pull-left"></span></button>';
	txt +='<button type="button" id="btnNuevaSolicitud" onClick="mostrarCategoriaProduto()" id="addCantidad" class="btn btn-default pull-right">Adicionar</button></div></div></div>';
		return txt;
	}

/*Ventana de seleccion de categoria (Bebidas, Platos, etc)*/ 
function forCategoria(){
	var txt='<div class="div-center"><div class="content"><div id="head"><img src="img/logo1.png" alt="logo" id="imgLogin"><h2>PEDIDO</h2><hr /></div><div id="asignar">';
	txt +='<button type="button" onClick=" mostrarProductos()" class="btn btn-default btn-lg btn-block categoria" >Platos</button><button type="button" class="btn btn-default btn-lg btn-block categoria" >Bebidas</button>';
	txt +='<button type="button" class="btn btn-default btn-lg btn-block categoria" >Pasabocas</button></div><hr/><div id="campoBtn"><button class="btn btn-info" onClick="regresar()" id="btnRegreso"><span class="glyphicon glyphicon-chevron-left"></button>';
	txt +='</div></div></div>';
		return txt;
}

/*Ventana de numero de productos a solicitar*/ 
function forDetalleProducto(){
	var txt= '<div class="div-center"><div class="content"><div id="head"><img src="img/logo1.png" alt="logo" id="imgLogin"><h2>PLATOS</h2>';
	txt += '<hr /></div><div id="asignar"><div><img class="col-xs-6" src="img/menu/Arroz_con_Pollo.jpg" alt="Plato" id="imgProducto">';
	txt += '<div class="col-xs-6"><h5>Arroz con Pollo</h5><h5>precio: $ 8000</h5></div></div><div id="contenedorContador"><img src="img/flecha_abajo.png" class="imgFlechas">';
	txt += '<h3 id="contador">1</h3><img src="img/flecha_arriba.png" class="imgFlechas"></div></div><hr/><div id="campoBtn"><button class="btn btn-info pull-left" onClick="regresar()" id="btnRegreso"><span class="glyphicon glyphicon-chevron-left"></span></button>';
	txt += '<button type="button" id="btnNuevaSolicitud" onClick="mostrarDescripcionPedido()" class="btn btn-default pull-right">Aceptar</button></div></div></div>';
		return txt;
}

/*Ventana de descripcion de los productos (nombre, precio)*/ 
function forVistaProductos(){
	var txt= '<div class="div-center"><div class="content"><div id="head>"<img src="img/logo1.png" alt="logo" id="imgLogin"><h2>PLATOS</h2><hr /></div>';
	txt +='<div id="asignar"><table class="table table-bordered table-light" ><thead><tr class="table-active"><th scope="col">Producto</th>';
	txt +='<th scope="col">Precio</th><th scope="col"></th></tr></thead><tbody><tr><th scope="row">Arroz con pollo</th><td>$8000</td><td>';
	txt +='<button onClick="mostrarConfirmacionPedido()" class="btn btn-info"><span class="glyphicon glyphicon-eye-open"></span></button></td></tr><tr><th scope="row">Bandeja Paisa</th>';
	txt +='<td>$10000</td><td><button class="btn btn-info"><span class="glyphicon glyphicon-eye-open"></span></button></td></tr><tr><th scope="row">Churrasco</th>';
	txt +='<td>$14000</td><td><button class="btn btn-info"><span class="glyphicon glyphicon-eye-open"></span></button></td></tr></tbody>';
	txt +='</table></div><hr /><div id="campoBtn"><button class="btn btn-info pull-left" onClick="regresar()" id="btnRegreso"><span class="glyphicon glyphicon-chevron-left"></span></button>';
	txt +='</div></div></div>';
		return txt;
}

