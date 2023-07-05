/* Este código selecciona el elemento del documento con el id "header" y le asigna un bloque de código HTML para construir una barra de navegación. El código HTML contiene una estructura de navegación típica de una barra de navegación de Bootstrap, con enlaces a diferentes páginas y un formulario de búsqueda.
El código se encarga de asignar el contenido HTML al elemento con el id "header", lo que resulta en la visualización de la barra de navegación en ese lugar dentro del documento HTML.
*/
document.getElementById(
  "footer"
).innerHTML = `
<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2023 - <strong>Tienda TECNO</strong>.  All rights reserved.</p>
			<p class="text-center">Diseño realizado por Claudio Guzman | Fabián Suárez.</p>
		</div>
	</div>
`;
