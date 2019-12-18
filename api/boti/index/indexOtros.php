<?php
      require_once "../../bd.php";
  $mysqli = conectar();
  $st = $mysqli->prepare("SELECT id_otro, nombre, precio, imagen, disponible FROM otros");
  $st->execute();
  $result = $st->get_result();

  $otros = array();
  while($fila = $result->fetch_row()){
     $otro = new stdClass();
     $otro->id = $fila[0];
     $otro->nombre = $fila[1];
     $otro->precio = $fila[2];
     $otro->imagen = $fila[3];
     $otro->disponible = $fila[4];
     $otros[] = $otro;
  }
  $st->close();
  echo json_encode($otros);
