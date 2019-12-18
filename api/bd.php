<?php

function conectar(){

  $mysqli = new mysqli ("localhost", "root", "", "clandestinobd");
  if ($mysqli->connect_error) {
    
    return false;
  }else{
    $mysqli->set_charset("utf8");
    return $mysqli;
  }


}
