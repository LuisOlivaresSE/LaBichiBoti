<?php
  require_once "../../bd.php";

  $id = $_POST["id"];
  $sql = "UPDATE otros SET disponible=0 WHERE id_otro=?";

  $conexion = conectar();

  $respuesta = new stdClass();

  if(conexion){

    $st = $conexion->prepare($sql);
    $st->bind_param("i",$id);
    $st->execute();
    $st->close();
    $respuesta->resultado = true;
  } else {

    $respuesta->resultado = false;
  }

  echo json_encode($respuesta);
