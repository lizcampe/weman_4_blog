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
					}
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

	function leerPublicaciones(){
		peticionAsync ('GET', '/comentarios', '');
	}
//* <td rowspan="3" colspan="2" ><p class="noticia"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
//*Pellentesque nec velit in massa tempor <font color="red"> porttitor </font>. Praesent cursus volutpat consectetur. Pellentesque sodales suscipit malesuada. Vestibulum bibendum non mauris ut faucibus. Suspendisse quis arcu pulvinar, ultrices elit sit amet, gravida diam.</p> </td>

//* {"error":"0","errmsg":"","registros":[{"id":1,"idusuario":-1,"titulo":"Prueba","contenido":"Comentario de pruebas","momento":"2019-05-23T18:42:01.000Z","imagen":null,"imagen_mime":null},{"id":2,"idusuario":1,"titulo":"prueba front","contenido":"Vamos a mandar un texto desde el front end","momento":"2019-05-23T20:45:01.000Z","imagen":null,"imagen_mime":null},{"id":3,"idusuario":1,"titulo":"prueba front","contenido":"Vamos a mandar un texto desde el front end","momento":"2019-05-23T21:05:52.000Z","imagen":null,"imagen_mime":null},{"id":4,"idusuario":1,"titulo":"asdfsadf","contenido":"asdfs fsd fas","momento":"2019-05-24T02:49:13.000Z","imagen":null,"imagen_mime":null},{"id":5,"idusuario":1,"titulo":"asdfsadf","contenido":"asdfs fsd fassdfsdf","momento":"2019-05-24T02:50:27.000Z","imagen":null,"imagen_mime":null},{"id":6,"idusuario":1,"titulo":"asdfsadf","contenido":"asdfs fsd fassdfsdf","momento":"2019-05-24T02:51:33.000Z","imagen":null,"imagen_mime":null},{"id":7,"idusuario":1,"titulo":"fjasldfjl","contenido":"adlfksdjlfkjsdklfa","momento":"2019-05-24T18:09:02.000Z","imagen":null,"imagen_mime":null},{"id":8,"idusuario":1,"titulo":"prueba","contenido":"vamos a poner la prueba final","momento":"2019-05-24T18:10:25.000Z","imagen":null,"imagen_mime":null},{"id":9,"idusuario":1,"titulo":"Después del refactor","contenido":"Cambiamos y refactoreamos","momento":"2019-05-24T18:33:19.000Z","imagen":null,"imagen_mime":null}]}


	function dibujaPublicaciones(publis) {


		for (let i=0; i < publis.lenght; í++) {
			let nuevaPublicacion ='<div class="entry-notice" id= "noticia'+publis[i].id+' ">\
			<div class= "title-date">\
			<h2 class= "title-notice">'+publis[i].titulo+'</h2>\
			<p class = "date">'+publis[i].momento+'</p>\
			</div>\
			<div class="text-notice">\
			<p>'+publis[i].contenido+'</p>\
			</div>\
			<div class="auth-notice">\
			<p>'+publis[i].idusuario+'</p>\
			</div></div>';
			contenedor.innerHTML +=nuevaPublicacion;
		}

		}
	/* esto es un for each" for (let laPublicacion:publis) {

	} */

/** Ruta: /
 * @brief Obtiene por default el index.html de la aplicación
 */
