<?php
    session_start(); //agregar para usar la sesion
    if(!isset($_SESSION["usuario"])){
       header("Location:login.php");
       exit();
    }
    $usuario = $_SESSION["usuario"];
?>

<?php require_once "templates/headerAdmin.php" ?>
<main class="container-fluid">
  <div class="col-lg-5 col-md-10 col-sm-10 mx-auto">

    <div class="modal fade" id="mensaje-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Informacion:</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="alert">Producto modificado existosamente</p>
          </div>
          <div class="modal-footer">
            <div class="row mx-auto">
              <button type="button" class="btn btn-success" data-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div class="card">
      <div class="card-header bg-warning text-center">
        <span class="font-weight-bold" data-ope="modificar" id="operacion" >Modificar productos Registrados</span>
      </div>
      <div class="card-body">
        <form class="form-group row ml-1 justify-content-center" name="tipo" >
          <div class="mr-5">
            <input type="radio" name="categoria" value="promocion" class="radios" checked> Promoción
          </div>
          <div class="mr-5">
            <input type="radio" name="categoria" value="bebestible" class="radios"> Bebestible
          </div>
          <div class="mr-2">
            <input type="radio" name="categoria" value="otro" class="radios"> Otro producto
          </div>
        </form>

        <div id="divCombo">

        </div>

        <div class="form-group">
          <label for="nombre-txt">Nombre</label>
          <input type="text" id="nombre-txt" class="form-control">
        </div>


        <div class="form-group" id="categorias">
          <label for="categoria-cbx">Categoria</label>
          <select class="form-control" id="categoria-cbx">
            <option value="Bebidas">Bebidas</option>
            <option value="Cervezas">Cervezas</option>
            <option value="Vinos">Vinos</option>
            <option value="Destilados">Destilados</option>
            <option value="Whiskey">Whiskey</option>
          </select>
        </div>



        <div class="form-group">
          <label for="precio-txt">Precio</label>
          <input type="number" id="precio-txt" min="0" class="form-control">
        </div>
        <div class="form-group d-none" id="precio-anterior">
          <label for="precio-anterior-txt">Precio anterior (opcional)</label>
          <input type="number" id="precio-anterior-txt" min="0" class="form-control">
        </div>

        <div id="preOcc">

          <div class="form-group" id="cc">
            <label for="cc-txt">CC</label>
            <input type="number" id="cc-txt" min="0" class="form-control">
          </div>
        </div>

        <div class="form-group">
          <label for="imagen">Imagen</label>
          <input type="text" id="imagen-txt" class="form-control">
        </div>
        <div class="form-group row ml-1 mt-2" >
          <label class="mr-5">¿Disponible para la venta?</label>
          <div class="mr-5">
            <input id="si" type="radio" name="disponible" value="true" class="radios" checked> Si
          </div>
          <div class="mr-5">
            <input id="no" type="radio" name="disponible" value="false" class="radios"> No
          </div>

        </div>

      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-info" id="modificar-btn">Modificar</button>

      </div>

    </div>
  </main>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="js/modificar.js"></script>
