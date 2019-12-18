<?php
require_once "../../db/php";

    $nombre = $_POST["nombre"];
    $precio = $_POST["precio"];
    $imagen= $_POST["imagen"];
    $disponible= $_POST["disponible"];
    $sql = "INSERT INTO administrador(usuario,contraseña,root,habilitado)"
    ." VALUES(?,?,?,?)";
    $mysqli = conectar();
    $respuesta = new stdClass();
    if($mysqli){

      $st = $mysqli->prepare($sql);

      $st->bind_param("sisi",$nombre,$precio,$imagen,$habilitado);
      $st->execute();
      $st->close();
      $respuesta->resultado = true;
      $respuesta->comentario = "Administrador ingresado exitosamente";
    } else{
      $respuesta->resultado = false;
    }
    echo json_encode($respuesta);
