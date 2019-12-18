<?php
require_once "../../bd.php";


  $nombre = $_POST["nombre"];
  $categoria = $_POST["categoria"];
  $precio = $_POST["precio"];
  $cc= $_POST["cc"];
  $imagen= $_POST["imagen"];
  $disponible= $_POST["disponible"];

  $sql = "INSERT INTO bebestibles(nombre,categoria,precio,cc,imagen,disponible)"
  ." VALUES(?,?,?,?,?,?)";

  $mysqli = conectar();
  $respuesta = new stdClass();
  if ($nombre=="" || $categoria=="" || $precio==""|| $cc=="" || $imagen=="" || $disponible=="") {
    $respuesta->resultado=false;
  }else{
    if($mysqli){

      $st = $mysqli->prepare($sql);
      $st->bind_param("ssiisi",$nombre,$categoria,$precio,$cc,$imagen,$disponible);
      $st->execute();
      $st->close();
      $respuesta->resultado = true;
      $respuesta->comentario = "Bebestible ingresado exitosamente";
    } else{
      $respuesta->resultado = false;
    }
  }
  echo json_encode($respuesta);
