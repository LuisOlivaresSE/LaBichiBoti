window.agregarPromocion= function(){

  let descripcion = document.querySelector("#nombre-txt").value.trim();
  let precioAnterior =document.querySelector("#precio-anterior-txt").value;
  let precioActual=document.querySelector("#precio-txt").value;
  let imagen=document.querySelector("#imagen-txt").value.trim();
  let disponible = document.querySelector('input[name=disponible]:checked').value=="true"?1:0;

    if (descripcion=="" || precioAnterior=="" || precioActual=="" || imagen=="") {
      let msj= document.querySelector("#mensaje-modal .modal-body .alert");
      msj.classList.remove("alert-primary");
      msj.classList.add("alert-danger");
      msj.innerText = "Rellene todos los campos";
      $("#mensaje-modal").modal("show");

    }else{

      let nuevaPromocion= {};
      nuevaPromocion.descripcion = descripcion;
      nuevaPromocion.precioAnterior = precioAnterior;
      nuevaPromocion.precioActual =precioActual;
      nuevaPromocion.imagen = imagen;
      nuevaPromocion.disponible=disponible;

      let formData = new FormData();
      formData.append('descripcion', nuevaPromocion.descripcion);
      formData.append('precio_anterior', nuevaPromocion.precioAnterior);
      formData.append('precio_actual', nuevaPromocion.precioActual);
      formData.append('imagen', nuevaPromocion.imagen);
      formData.append('disponible', nuevaPromocion.disponible);
      axios.post('api/boti/create/createPromocion.php', formData)
      .then(function(respuesta){
        let msj= document.querySelector("#mensaje-modal .modal-body .alert");
        if (respuesta.data.resultado) {
          msj.classList.remove("alert-danger");
          msj.classList.add("alert-primary");
          msj.innerText = respuesta.data.comentario;
          window.limpiar();
        }else{
          msj.classList.remove("alert-primary");
          msj.classList.add("alert-danger");
          msj.innerText = "Fallo en la conexion";
        }
        $("#mensaje-modal").modal("show");
      });
    };

};

window.agregarBebestible = function(){
  //provisionales
  let nombre = document.querySelector("#nombre-txt").value.trim();
  let categoria=document.querySelector("#categoria-cbx").value.trim();
  let precio =document.querySelector("#precio-txt").value.trim();
  let cc=document.querySelector("#cc-txt").value.trim();
  let imagen=document.querySelector("#imagen-txt").value.trim();
  let disponible = document.querySelector('input[name=disponible]:checked').value=="true"?1:0;

  if (nombre=="" || categoria=="" || precio=="" || cc=="" || imagen=="") {
    let msj= document.querySelector("#mensaje-modal .modal-body .alert");
    msj.classList.remove("alert-primary");
    msj.classList.add("alert-danger");
    msj.innerText = "Rellene todos los campos";
    $("#mensaje-modal").modal("show");


  }else{

    let nuevoBebestible = {};
    nuevoBebestible.nombre = nombre;
    nuevoBebestible.categoria = categoria;
    nuevoBebestible.precio = precio;
    nuevoBebestible.cc =cc;
    nuevoBebestible.imagen = imagen;
    nuevoBebestible.disponible=disponible;

    let formData = new FormData();
    formData.append('nombre', nuevoBebestible.nombre);
    formData.append('categoria', nuevoBebestible.categoria);
    formData.append('precio', nuevoBebestible.precio);
    formData.append('cc', nuevoBebestible.cc);
    formData.append('imagen', nuevoBebestible.imagen);
    formData.append('disponible', nuevoBebestible.disponible);

    axios.post('api/boti/create/createBebestible.php', formData)
    .then(function(respuesta){
      let msj= document.querySelector("#mensaje-modal .modal-body .alert");
      if (respuesta.data.resultado) {
        msj.classList.remove("alert-danger");
        msj.classList.add("alert-primary");
        msj.innerText = respuesta.data.comentario;
        window.limpiar();
      }else{
        msj.classList.remove("alert-primary");
        msj.classList.add("alert-danger");
        msj.innerText = "Fallo en la conexion";
      }

      $("#mensaje-modal").modal("show");

    });
  };



};


window.agregarOtros= function(){
  let nombre = document.querySelector("#nombre-txt").value.trim();
  let precio =document.querySelector("#precio-txt").value;
  let imagen=document.querySelector("#imagen-txt").value.trim();
  let disponible = document.querySelector('input[name=disponible]:checked').value=="true"?1:0;

    if (nombre=="" || precio=="" || imagen=="") {
      let msj= document.querySelector("#mensaje-modal .modal-body .alert");
      msj.classList.remove("alert-primary");
      msj.classList.add("alert-danger");
      msj.innerText = "Rellene todos los campos";
      $("#mensaje-modal").modal("show");


    }else{

  let nuevoOtro = {};
  nuevoOtro.nombre = nombre;
  nuevoOtro.precio = precio;
  nuevoOtro.imagen = imagen;
  nuevoOtro.disponible=disponible;

  let formData = new FormData();
  formData.append('nombre', nuevoOtro.nombre);
  formData.append('precio', nuevoOtro.precio);
  formData.append('imagen', nuevoOtro.imagen);
  formData.append('disponible', nuevoOtro.disponible);


  axios.post('api/boti/create/createOtro.php', formData)
  .then(function(respuesta){
    let msj= document.querySelector("#mensaje-modal .modal-body .alert");
    if (respuesta.data.resultado) {
      msj.classList.remove("alert-danger");
      msj.classList.add("alert-primary");
      msj.innerText = respuesta.data.comentario;
      window.limpiar();
    }else{
      msj.classList.remove("alert-primary");
      msj.classList.add("alert-danger");
      msj.innerText = "Fallo en la conexion";
    }

    $("#mensaje-modal").modal("show");
  });
}
};

window.cargarFormulario= function(tipo){

  switch(tipo){

    case "promocion":
    document.querySelector("#categorias").classList.add("d-none");
    document.querySelector("#cc").classList.add("d-none");
    document.querySelector("#precio-anterior").classList.remove("d-none");

    document.querySelector("#agregar-btn").addEventListener('click',function(){
    window.agregarPromocion();

    });

    break;

    case "bebestible":
    document.querySelector("#categorias").classList.remove("d-none");
    document.querySelector("#cc").classList.remove("d-none");
    document.querySelector("#precio-anterior").classList.add("d-none");

    document.querySelector("#agregar-btn").addEventListener('click',function(){
    window.agregarBebestible();

    });
    break;

    case "otro":
    document.querySelector("#categorias").classList.add("d-none");
    document.querySelector("#cc").classList.add("d-none");
    document.querySelector("#precio-anterior").classList.add("d-none");

    document.querySelector("#agregar-btn").addEventListener('click',function(){
    window.agregarOtros();

    });
    break;

  };

};

window.limpiar=function(){

  document.querySelector("#nombre-txt").value="";
  document.querySelector("#precio-txt").value="";
  document.querySelector("#precio-anterior-txt").value="";
  document.querySelector("#cc-txt").value="";
  document.querySelector("#imagen-txt").value="";

};


(function(){

  window.cargarFormulario("promocion");

  //Comprueba los cambios de los radios de las categorias
  let rad = document.tipo.categoria;
  let prev = null;
  for(var i = 0; i < rad.length; i++) {
      rad[i].onclick = function () {
          if(this !== prev) {
              window.cargarFormulario(this.value);
          };
      };
  };




})();
