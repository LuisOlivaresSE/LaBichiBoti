<?php
      require_once "../../bd.php";

    $mysqli = conectar();
    $st = $mysqli->prepare("SELECT id_promocion, descripcion, precio_anterior, precio_actual, imagen, disponible FROM promocion");
    $st->execute();
    $result = $st->get_result();

    $promociones = array();
    while($fila = $result->fetch_row()){
       $promo = new stdClass();
       $promo->id = $fila[0];
       $promo->descripcion = $fila[1];
       $promo->precio_anterior = $fila[2];
       $promo->precio = $fila[3];
       $promo->imagen = $fila[4];
       $promo->disponible = $fila[5];
       $promociones[] = $promo;
    }
    $st->close();
    echo json_encode($promociones);
