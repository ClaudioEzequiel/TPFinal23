/* Este código selecciona el elemento del documento con el id "header" y le asigna un bloque de código HTML para construir una barra de navegación. El código HTML contiene una estructura de navegación típica de una barra de navegación de Bootstrap, con enlaces a diferentes páginas y un formulario de búsqueda.
El código se encarga de asignar el contenido HTML al elemento con el id "header", lo que resulta en la visualización de la barra de navegación en ese lugar dentro del documento HTML.
*/
document.getElementById(
  "header"
).innerHTML = ` <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-menu">
<div class="container">
  <a class="navbar-brand" href="index.html">
        <img src="img/logo Tienda TECNO.png" width="150" alt="Tienda TECNO"> <strong style="color:red;font-style: italic;vertical-align:bottom">Sistema CRUD</strong>
  </a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <!-- ul class="navbar-nav me-auto mt-2 mt-lg-0" -->
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link" href="detalle_productos.html">Detalle productos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="producto-create.html">Alta</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="productos.html">Editar</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="detalle_productos-delete.html">Eliminar</a>
        </li>
     </ul>
      <form class="d-flex my-2 my-lg-0">
          <input class="form-control me-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>

  </div>
</div>
</nav>
`;
