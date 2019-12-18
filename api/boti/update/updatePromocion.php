<?php
require_once "../../bd.php";

  $id = $_POST["id_promocion"];
  $descripcion = $_POST["descripcion"];
  $precio_actual = $_POST["precio_actual"];
  $precio_anterior = $_POST["precio_anterior"];
  $imagen= $_POST["imagen"];
  $disponible= $_POST["disponible"];

  $sql = "UPDATE promocion SET descripcion=?, precio_anterior=?, precio_actual=?, imagen=?, disponible=? WHERE id_promocion=?";

  $mysqli = conectar();
  $respuesta = new stdClass();

  if ($descripcion=="" || $precio_actual=="" || $precio_anterior=="" || $imagen=="" || $disponible=="") {
    $respuesta->resultado=false;
  }else{

      if($mysqli){

        $st = $mysqli->prepare($sql);

        $st->bind_param("siisii",$descripcion,$precio_anterior,$precio_actual,$imagen,$disponible,$id);
        $st->execute();
        $st->close();
        $respuesta->resultado = true;
        $respuesta->comentario = "Promocion actualizada exitosamente";
      } else{
        $respuesta->resultado = false;
      }
  }

  echo json_encode($respuesta);
