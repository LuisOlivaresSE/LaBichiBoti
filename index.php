<?php
session_start();
if (isset($_SESSION["usuario"]) ) {
  $usuario = $_SESSION["usuario"];
  ?>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Gestion de Productos: </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
          <a class="nav-link" href="ingresar.php">Ingresar<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="actualizar.php">Actualizar</a>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link" href="eliminar.php">Eliminar</a>
      </li>
    </ul>
  </div>
  <div class="text-center">
    <p>Bienvenido <?php
    if ($usuario->usuario=="root") {
      echo "super administrador";
    }else{
      echo $usuario->usuario;
    }
     ?></p>
    <a href="cerrar_sesion.php" class="text-weight-bold">Cerrar Sesion</a>
  </div>
</nav>
  <?php
}

  ?>



<?php require_once "templates/header.php" ?>
  <main>
    <!--Inicio del nav -->
    <div class="mb-5">
      <ul class="nav nav-pills nav-fill col-10 m-auto">
        <li class="nav-item">
          <a class="nav-link border border-light bg-light text-dark mx-1" id="todo">Todo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link border border-light bg-light text-dark mx-1" id="bebidas">Bebidas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link border border-light bg-light text-dark mx-1" id="cervezas">Cervezas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link border border-light bg-light text-dark mx-1" id="vinos">Vinos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link border border-light bg-light text-dark mx-1" id="destilados">Destilados</a>
        </li>
        <li class="nav-item">
          <a class="nav-link border border-light bg-light text-dark mx-1" id="otros">Otros</a>
        </li>
      </ul>
    </div>

    <!--Termina el nav -->

    <!--Inicio del carrusel de imagenes -->
    <div id="carrusel-promociones" class="carousel slide col-lg-8 col-md-10 col-sm-12 m-auto" data-ride="carousel">

    </div>
    <!--Termino del carrusel de imagenes -->

    <!--Inicio del listado de producto-->
    <div class="mt-5">
    <div class="col-10 container-fluid">
      <div class="row d-flex justify-content-around" id="contenedor">

      </div>
    </div>

    <!--Inicio del paginado-->
    <div class="col-12 mt-3 text-center">
      <button class="btn btn-outline-light mb-5" onclick="primeraPagina()" type="button" id="primero">Primera pág.</button>
      <button class="btn btn-outline-light mb-5" onclick="siguientePagina()" type="button" id="siguiente">Siguiente</button>
      <button class="btn btn-outline-light mb-5" onclick="anteriorPagina()" type="button" id="anterior">Anterior</button>
      <button class="btn btn-outline-light mb-5" onclick="ultimaPagina()" type="button" id="ultimo">Última pág.</button>
    </div>
    <!--Termino del paginado-->
    </div>

  </main>
<?php require_once "templates/footer.php" ?>
