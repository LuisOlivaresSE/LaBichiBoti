<?php

require_once "../../bd.php";

    $id = $_POST["id_otro"];
    $nombre = $_POST["nombre"];
    $precio = $_POST["precio"];
    $imagen= $_POST["imagen"];
    $disponible= $_POST["disponible"];

    $sql = "UPDATE otros SET nombre=? , precio=?, imagen=?, disponible=? WHERE id_otro=?";
    $mysqli = conectar();
    $respuesta = new stdClass();

    if ($nombre=="" || $precio==""|| $imagen=="" || $disponible=="") {
      $respuesta->resultado=false;
    }else{
    if($mysqli){
      $st = $mysqli->prepare($sql);
      $st->bind_param("sisii",$nombre,$precio,$imagen,$disponible,$id);
      $st->execute();
      $st->close();
      $respuesta->resultado = true;
      $respuesta->comentario = "Producto actualizado exitosamente";
    } else{
      $respuesta->resultado = false;
    }
    }
    echo json_encode($respuesta);
