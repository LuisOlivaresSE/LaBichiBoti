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
<?php
require_once "templates/header.php";
 ?>

 <!doctype html>
 <html lang="es">
   <head>
     <!-- Required meta tags -->
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

     <!-- Bootstrap CSS -->
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

     <title>Resultados de la busqueda</title>
   </head>
   <body>
     <main>
       <div class="container-fluid col-10">
         <div class="mx-auto row d-flex justify-content-around" id="contenedor">

         </div>
       </div>
     </main>

     <!-- Optional JavaScript -->
     <!-- jQuery first, then Popper.js, then Bootstrap JS -->
     <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
     <script src="js/resultados.js"> </script>
   </body>
 </html>
