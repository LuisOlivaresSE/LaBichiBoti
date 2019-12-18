<?php
      require_once "../../bd.php";
//TODO Preguntar si es mejor tener todo junto o separado

  $mysqli = conectar();
  $st = $mysqli->prepare("SELECT id_bebestible, nombre, categoria, precio, cc, imagen, disponible FROM bebestibles");
  $st->execute();
  $result = $st->get_result();

  $bebestibles = array();
  while($fila = $result->fetch_row()){
     $bebe = new stdClass();
     $bebe->id = $fila[0];
     $bebe->nombre = $fila[1];
     $bebe->categoria = $fila[2];
     $bebe->precio = $fila[3];
     $bebe->cc = $fila[4];
     $bebe->imagen =$fila[5];
     $bebe->disponible =$fila[6];
     $bebestibles[] = $bebe;


  }
  $st->close();
  echo json_encode($bebestibles);
