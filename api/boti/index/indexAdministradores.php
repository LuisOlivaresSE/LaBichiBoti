<?php
    require_once "../../bd.php";

  $mysqli = conectar();
  $st = $mysqli->prepare("SELECT id_admin, usuario, contraseña, root, habilitado FROM administrador");
  $st->execute();
  $result = $st->get_result();

  $administradores = array();
  while($fila = $result->fetch_row()){
     $admin = new stdClass();
     $admin->id_admin = $fila[0];
     $admin->usuario = $fila[1];
     $admin->contraseña = $fila[2];
     $admin->root = $fila[3];
     $admin->habilitado = $fila[4];
     $administradores[] = $admin;


  }
  $st->close();
  echo json_encode($administradores);
