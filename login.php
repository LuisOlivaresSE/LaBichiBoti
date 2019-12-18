<?php
  session_start();
  if (isset($_SESSION["usuario"])) {
    header("Location:index.php");
    exit();
  }
  require_once "api/bd.php";
  if (count($_POST)>0) {
    $usuario=$_POST["usuario-txt"];
    $contraseña=sha1($_POST["clave-txt"]);

    $sql = "SELECT id_admin, usuario, contraseña, root, habilitado
    FROM administrador WHERE usuario=? AND contraseña=?";

    $conexion = conectar();

    $st = $conexion->prepare($sql);

    $st-> bind_param("ss",$usuario,$contraseña);
    $st-> execute();
    $res =$st->get_result();
    if($fila = $res->fetch_row()){
      $usuario = new stdClass();
      $usuario->id_admin = $fila[0];
      $usuario->usuario =$fila[1];
      $usuario->contraseña =$fila[2];
      $usuario->root =$fila[3];
      $usuario->habilitado =$fila[4];

      $_SESSION["usuario"] = $usuario;
      header("Location:index.php");
      exit();
    }else{
      $error ="Datos incorrectos";
    }

  }


 ?>

<!doctype html>
<html lang="es">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/master.css">
<body>
  <header>

          <div class="logo col-lg-3 col-md-5 col-sm-5 text-center m-auto">
            <h2 class="text-light mb-4">¡Bienvenido!</h2>
          </div>
        </header>
          <main class="container-fluid mt-5">
            <?php if(isset($error)){
              ?>
              <div class="alert alert-warning mx-auto col-lg-3 col-md-5 col-sm-5">
                <span><?php echo $error; ?></span>
              </div>
              <?php
            }?>
            <form method="POST" class="row ">
            <div class="col-lg-6 col-md-6 col-sm-12 mx-auto mt-5">
              <div class="card">
              <div class="card-header bg-warning text-white">
                <span>Iniciar Sesion</span>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <label for="usuario-txt">Usuario</label>
                  <input type="text" required class="form-control" name="usuario-txt" value="">
                </div>
                <div class="form-group">
                  <label for="clave-txt">Clave</label>
                  <input type="password" required class="form-control" name="clave-txt" value="">
                </div>
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-primary" name="ingresar-btn">Iniciar Sesión</button>
              </div>
                  </div>
            </div>
          </form>
          </main>


  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

  </body>
  </html>
