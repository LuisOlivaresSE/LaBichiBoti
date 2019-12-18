<?php
require_once "../../bd.php";

  $id = $_POST["id_bebestible"];
  $nombre = $_POST["nombre"];
  $categoria = $_POST["categoria"];
  $precio = $_POST["precio"];
  $cc= $_POST["cc"];
  $imagen= $_POST["imagen"];
  $disponible= $_POST["disponible"];

  $sql = "UPDATE bebestibles SET nombre=?, categoria=?, precio=?, cc=?, imagen=?, disponible=?"
  ." WHERE id_bebestible=?";

  $mysqli = conectar();
  $respuesta = new stdClass();
  if ($nombre=="" || $categoria=="" || $precio==""|| $cc=="" || $imagen=="" || $disponible=="") {
    $respuesta->resultado=false;
  }else{
    if($mysqli){

      $st = $mysqli->prepare($sql);
      $st->bind_param("ssiisii",$nombre,$categoria,$precio,$cc,$imagen,$disponible,$id);
      $st->execute();
      $st->close();
      $respuesta->resultado = true;
      $respuesta->comentario = "Bebestible actualizado exitosamente";
    } else{
      $respuesta->resultado = false;
    }
  }
  echo json_encode($respuesta);
