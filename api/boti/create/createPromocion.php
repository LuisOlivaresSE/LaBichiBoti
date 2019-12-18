<?php
require_once "../../bd.php";

  $descripcion = $_POST["descripcion"];
  $precio_anterior = $_POST["precio_anterior"];
  $precio_actual = $_POST["precio_actual"];
  $imagen= $_POST["imagen"];
  $disponible= $_POST["disponible"];

  $sql = "INSERT INTO promocion(descripcion,precio_anterior,precio_actual,imagen,disponible)"
  ." VALUES(?,?,?,?,?)";

  $mysqli = conectar();
  $respuesta = new stdClass();

  if ($descripcion=="" || $precio_actual=="" || $precio_anterior=="" || $imagen=="" || $disponible=="") {
    $respuesta->resultado=false;
  }else{
      
      if($mysqli){


        $st = $mysqli->prepare($sql);

        $st->bind_param("siisi",$descripcion,$precio_anterior,$precio_actual,$imagen,$disponible);
        $st->execute();
        $st->close();
        $respuesta->resultado = true;
        $respuesta->comentario = "Promocion ingresada exitosamente";
      } else{
        $respuesta->resultado = false;
      }
  }

  echo json_encode($respuesta);
