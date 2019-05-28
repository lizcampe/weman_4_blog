function peticionAsync(tipo, url, parametros) {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
			if (ajax.status == 200) {
				//El resultado es exitoso!
				//Tomar las acciones necesarias aquí
				let resp =JSON.parse(ajax.response);
				if (resp.error =="0") {
					if (url ==='/comentarios'){
						dibujaPublicaciones(resp.registros);
					}else if (url ==='/login'){
						alert("Bienvenido: "+ resp.nombre);
					}

				} else if (resp.error== "1") {
					alert ("Error de credenciales");
				}

			} else if (ajax.status == 404) {
				//No encontró el servicio o API
			} else {
				//Una respuesta inesperada por parte del servidor
				alert('Saliendo precipitadamente de la aldea por culpa de la escaces de rinocerontes');
			}
		}
	
	};

	//El tipo puede ser GET, POST, PUT, DELETE o cualquier tipo aceptado por HTTP
	//La URL es a dondo hará la petición...
	//Por último, el "true" indica que es una petición asíncrona
	ajax.open(tipo, url, true);
	//Se establece cómo será enviado el contenido.
	ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	//La función encodeURI se encarga que la petición tenga el formato adecuado para ser enviado...
	//un ejemplo de petición puede ser variable=valor&otravariable=otrovalor...
	ajax.send(encodeURI(parametros));
}

	function leerPublicaciones() {
		peticionAsync ('GET', '/comentarios', '');

	};
//* {"error":"0","errmsg":"","registros":[{"id":1,"idusuario":-1,"titulo":"Prueba","contenido":"Comentario de pruebas","momento":"2019-05-23T18:42:01.000Z","imagen":null,"imagen_mime":null},{"id":2,"idusuario":1,"titulo":"prueba front","contenido":"Vamos a mandar un texto desde el front end","momento":"2019-05-23T20:45:01.000Z","imagen":null,"imagen_mime":null},{"id":3,"idusuario":1,"titulo":"prueba front","contenido":"Vamos a mandar un texto desde el front end","momento":"2019-05-23T21:05:52.000Z","imagen":null,"imagen_mime":null},{"id":4,"idusuario":1,"titulo":"asdfsadf","contenido":"asdfs fsd fas","momento":"2019-05-24T02:49:13.000Z","imagen":null,"imagen_mime":null},{"id":5,"idusuario":1,"titulo":"asdfsadf","contenido":"asdfs fsd fassdfsdf","momento":"2019-05-24T02:50:27.000Z","imagen":null,"imagen_mime":null},{"id":6,"idusuario":1,"titulo":"asdfsadf","contenido":"asdfs fsd fassdfsdf","momento":"2019-05-24T02:51:33.000Z","imagen":null,"imagen_mime":null},{"id":7,"idusuario":1,"titulo":"fjasldfjl","contenido":"adlfksdjlfkjsdklfa","momento":"2019-05-24T18:09:02.000Z","imagen":null,"imagen_mime":null},{"id":8,"idusuario":1,"titulo":"prueba","contenido":"vamos a poner la prueba final","momento":"2019-05-24T18:10:25.000Z","imagen":null,"imagen_mime":null},{"id":9,"idusuario":1,"titulo":"Después del refactor","contenido":"Cambiamos y refactoreamos","momento":"2019-05-24T18:33:19.000Z","imagen":null,"imagen_mime":null}]}

	
		function login() {
   var formulario = document.getElementById('frmLogin');
   peticionAsync('Post', '/login', 'usr' + formulario.usr.value + '&pwd=' + formulario.pwd.value) 
};



   	
	function dibujaPublicaciones(publis) {

		let contenedor= document.getElementById('contenedor');
		for (let i=0; i < publis.length; i++) {
			let nuevaPublicacion = '<table class="bloque cuerpo" id ="cuerpo '+publis[i].id+'">\
			<td id=negrita> <h3> '+publis[i].titulo+' <h3> </td>\
			<td> </td>\
			<td class= "date"> '+publis[i].momento+' </td>\
			<td  rowspan="4" > <aside class= "caja_imagen"> (Una imagen) </aside></td>\
			<tr>\
			<td rowspan="3" colspan="2" > <p id="noticia">'+publis[i].contenido+'</p> </td>\
			<td></td>\
			</tr>\
			<tr>\
				<td></td>\
				<td></td>\
				<td></td>\
			</tr>\
			<tr><td id="small">'+publis[i].idusuario+'</td></tr>\
			</table>';			
			contenedor.innerHTML += nuevaPublicacion;
		}

		}


		