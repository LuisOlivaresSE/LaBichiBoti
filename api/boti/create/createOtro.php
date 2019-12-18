<?php
require_once "../../bd.php";

    $nombre = $_POST["nombre"];
    $precio = $_POST["precio"];
    $imagen= $_POST["imagen"];
    $disponible= $_POST["disponible"];

    $sql = "INSERT INTO otros(nombre,precio,imagen,disponible)"
    ." VALUES(?,?,?,?)";
    $mysqli = conectar();
    $respuesta = new stdClass();
    if ($nombre=="" || $precio==""|| $imagen=="" || $disponible=="") {
      $respuesta->resultado=false;
    }else{
    if($mysqli){

      $st = $mysqli->prepare($sql);

      $st->bind_param("sisi",$nombre,$precio,$imagen,$disponible);
      $st->execute();
      $st->close();
      $respuesta->resultado = true;
      $respuesta->comentario = "Producto ingresado exitosamente";
    } else{
      $respuesta->resultado = false;
    }
    }
    echo json_encode($respuesta);
