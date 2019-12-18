

window.preCargaBebestibles =function(elementos){

  let div= document.querySelector("#divCombo");
  div.innerHTML="";
  let form= document.createElement("div");
  form.classList.add("form-group");

  let label= document.createElement("label");
  label.setAttribute("for","elementos-cbx");
  label.innerText="Bebestibles registrados:"

  let select = document.createElement("select");
  select.classList.add("form-control");
  select.setAttribute("id","elementos-cbx");
  select.setAttribute("onchange","llenarFormularioBebestibles();");

    for (let i = -1; i < elementos.length; i++) {
      let option= document.createElement("option");
      if (i==-1) {
        option.innerText="Seleccione";
        option.setAttribute("value",-1);
        select.appendChild(option);
      }else{
      option.setAttribute("value",elementos[i].id);
      option.innerText=elementos[i].nombre + " " + elementos[i].cc+"cc";
      select.appendChild(option);
    }
  };
  form.appendChild(label);
  form.appendChild(select);
  div.appendChild(form);
}

window.preCargaPromociones =function(elementos){

  let div= document.querySelector("#divCombo");
  div.innerHTML="";
  let form= document.createElement("div");
  form.classList.add("form-group");

  let label= document.createElement("label");
  label.setAttribute("for","elementos-cbx");
  label.innerText="Promociones registradas:"

  let select = document.createElement("select");
  select.classList.add("form-control");
  select.setAttribute("id","elementos-cbx");
  select.setAttribute("onchange","llenarFormularioPromociones();");

    for (let i = -1; i < elementos.length; i++) {
      let option= document.createElement("option");
      if (i==-1) {
        option.innerText="Seleccione";
        option.setAttribute("value",-1);
        select.appendChild(option);
      }else{
      option.setAttribute("value",elementos[i].id);
      option.innerText=elementos[i].descripcion + " $"+elementos[i].precio;
      select.appendChild(option);
    }
  };
  form.appendChild(label);
  form.appendChild(select);
  div.appendChild(form);
}

window.preCargaOtros =function(elementos){

  let div= document.querySelector("#divCombo");
  div.innerHTML="";
  let form= document.createElement("div");
  form.classList.add("form-group");

  let label= document.createElement("label");
  label.setAttribute("for","elementos-cbx");

  label.innerText="Otros productos registrados:"

  let select = document.createElement("select");
  select.classList.add("form-control");
  select.setAttribute("id","elementos-cbx");
  select.setAttribute("onchange","llenarFormularioOtros();");

    for (let i = -1; i < elementos.length; i++) {
      let option= document.createElement("option");
      if (i==-1) {
        option.innerText="Seleccione";
        option.setAttribute("value",-1);
        select.appendChild(option);
      }else{
        option.setAttribute("value",elementos[i].id);
        option.innerText=elementos[i].nombre + " " + "$"+elementos[i].precio;
        select.appendChild(option);
      }


  };
  form.appendChild(label);
  form.appendChild(select);
  div.appendChild(form);
}

window.llenarFormularioPromociones=function(){

  let id = document.querySelector("#elementos-cbx").value;

  for (var i = 0; i < window.elementos.length; i++) {
    let elemento=window.elementos[i];
    if (id==-1) {
      window.limpiar();
    }else{
    if (id==elemento.id) {
      document.querySelector("#nombre-txt").value=elemento.descripcion;
      document.querySelector("#precio-txt").value=elemento.precio;
      document.querySelector("#precio-anterior-txt").value=elemento.precio_anterior;
      document.querySelector("#imagen-txt").value=elemento.imagen;
      if (elemento.disponible==1) {
        document.querySelector("#si").checked=true;
        document.querySelector("#no").check=false;
      }else{
        document.querySelector("#no").checked=true;
        document.querySelector("#si").check=false;
      }
    }
  }
  }

}

window.llenarFormularioOtros=function(){
  let id = document.querySelector("#elementos-cbx").value;
  for (var i = 0; i < window.elementos.length; i++) {
    let elemento=window.elementos[i];
    if (id==-1) {
      window.limpiar();
    }else{
      if (id==elemento.id) {
        document.querySelector("#nombre-txt").value=elemento.nombre;
        document.querySelector("#precio-txt").value=elemento.precio;
        document.querySelector("#imagen-txt").value=elemento.imagen;
        if (elemento.disponible==1) {
          document.querySelector("#si").checked=true;
          document.querySelector("#no").check=false;
        }else{
          document.querySelector("#no").checked=true;
          document.querySelector("#si").check=false;
        }
      }
    }


  }

}

window.llenarFormularioBebestibles=function(){
  let id = document.querySelector("#elementos-cbx").value;
  for (var i = 0; i < window.elementos.length; i++) {
    let elemento=window.elementos[i];
    if (id==-1) {
      window.limpiar();
    }else{
      if (id==elemento.id) {
        document.querySelector("#nombre-txt").value=elemento.nombre;
        document.querySelector("#categoria-cbx").value=elemento.categoria;
        document.querySelector("#precio-txt").value=elemento.precio;
        document.querySelector("#cc-txt").value=elemento.cc;
        document.querySelector("#imagen-txt").value=elemento.imagen;
        if (elemento.disponible==1) {
          document.querySelector("#si").checked=true;
          document.querySelector("#no").check=false;
        }else{
          document.querySelector("#no").checked=true;
          document.querySelector("#si").check=false;
        }
      }
    }


  }

}

window.limpiar=function(){

  document.querySelector("#nombre-txt").value="";
  document.querySelector("#precio-txt").value="";
  document.querySelector("#precio-anterior-txt").value="";
  document.querySelector("#cc-txt").value="";
  document.querySelector("#imagen-txt").value="";

};

window.cargarFormulario= function(tipo){

  switch(tipo){

    case "promocion":
    document.querySelector("#categorias").classList.add("d-none");
    document.querySelector("#cc").classList.add("d-none");
    document.querySelector("#precio-anterior").classList.remove("d-none");

    axios.get('api/boti/index/indexPromociones.php')
    .then(function(respuesta){
      window.elementos=respuesta.data;
      window.preCargaPromociones(window.elementos);
    })

    document.querySelector("#modificar-btn").addEventListener('click',function(){
    window.actualizarPromociones();

    });


    break;

    case "bebestible":
    document.querySelector("#categorias").classList.remove("d-none");
    document.querySelector("#cc").classList.remove("d-none");
    document.querySelector("#precio-anterior").classList.add("d-none");

    axios.get('api/boti/index/indexBebestibles.php')
    .then(function(respuesta){
      window.elementos=respuesta.data;
      window.preCargaBebestibles(respuesta.data)
    })

    document.querySelector("#modificar-btn").addEventListener('click',function(){
    window.actualizarBebestibles();

    });

    break;

    case "otro":
    document.querySelector("#categorias").classList.add("d-none");
    document.querySelector("#cc").classList.add("d-none");
    document.querySelector("#precio-anterior").classList.add("d-none");

    axios.get('api/boti/index/indexOtros.php')
    .then(function(respuesta){
      window.elementos=respuesta.data;
      window.preCargaOtros(respuesta.data)
    })

    document.querySelector("#modificar-btn").addEventListener('click',function(){
    window.actualizarOtros();

    });

    break;

  };

};

window.actualizarOtros= function(){

  let id= document.querySelector("#elementos-cbx").value;
  let nombre = document.querySelector("#nombre-txt").value.trim();
  let precio =document.querySelector("#precio-txt").value;
  let imagen=document.querySelector("#imagen-txt").value.trim();
  let disponible = document.querySelector('input[name=disponible]:checked').value=="true"?1:0;

    if (id==-1 || nombre=="" || precio=="" || imagen=="") {
      let msj= document.querySelector("#mensaje-modal .modal-body .alert");
      msj.classList.remove("alert-primary");
      msj.classList.add("alert-danger");
      msj.innerText = "Rellene todos los campos";
      $("#mensaje-modal").modal("show");


    }else{

  let nuevoOtro = {};
  nuevoOtro.id = id;
  nuevoOtro.nombre = nombre;
  nuevoOtro.precio = precio;
  nuevoOtro.imagen = imagen;
  nuevoOtro.disponible=disponible;

  let formData = new FormData();
  formData.append('id_otro', nuevoOtro.id);
  formData.append('nombre', nuevoOtro.nombre);
  formData.append('precio', nuevoOtro.precio);
  formData.append('imagen', nuevoOtro.imagen);
  formData.append('disponible', nuevoOtro.disponible);



  axios.post('api/boti/update/updateOtro.php', formData)
  .then(function(respuesta){
    let msj= document.querySelector("#mensaje-modal .modal-body .alert");
    if (respuesta.data.resultado) {
      msj.classList.remove("alert-danger");
      msj.classList.add("alert-primary");
      msj.innerText = respuesta.data.comentario;
      window.cargarFormulario("otro");
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

window.actualizarPromociones= function(){

  let id= document.querySelector("#elementos-cbx").value;
  let nombre = document.querySelector("#nombre-txt").value.trim();
  let precio =document.querySelector("#precio-txt").value;
  let precioAnterior =document.querySelector("#precio-anterior-txt").value;
  let imagen=document.querySelector("#imagen-txt").value.trim();
  let disponible = document.querySelector('input[name=disponible]:checked').value=="true"?1:0;

    if (id==-1 || nombre=="" || precio=="" || precioAnterior=="" || imagen=="") {
      let msj= document.querySelector("#mensaje-modal .modal-body .alert");
      msj.classList.remove("alert-primary");
      msj.classList.add("alert-danger");
      msj.innerText = "Rellene todos los campos";
      $("#mensaje-modal").modal("show");


    }else{

  let nuevaPromocion = {};
  nuevaPromocion.id = id;
  nuevaPromocion.descripcion = nombre;
  nuevaPromocion.precio = precio;
  nuevaPromocion.precioAnterior= precioAnterior;
  nuevaPromocion.imagen = imagen;
  nuevaPromocion.disponible=disponible;



  let formData = new FormData();
  formData.append('id_promocion', nuevaPromocion.id);
  formData.append('descripcion', nuevaPromocion.descripcion);
  formData.append('precio_actual', nuevaPromocion.precio);
  formData.append('precio_anterior', nuevaPromocion.precioAnterior);
  formData.append('imagen', nuevaPromocion.imagen);
  formData.append('disponible', nuevaPromocion.disponible);


  axios.post('api/boti/update/updatePromocion.php', formData)
  .then(function(respuesta){
    let msj= document.querySelector("#mensaje-modal .modal-body .alert");
    if (respuesta.data.resultado) {
      msj.classList.remove("alert-danger");
      msj.classList.add("alert-primary");
      msj.innerText = respuesta.data.comentario;
      window.cargarFormulario("promocion");
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

window.actualizarBebestibles= function(){

  let id= document.querySelector("#elementos-cbx").value;
  let nombre = document.querySelector("#nombre-txt").value.trim();
  let categoria =document.querySelector("#categoria-cbx").value;
  let precio =document.querySelector("#precio-txt").value.trim();
  let cc =document.querySelector("#cc-txt").value.trim();
  let imagen=document.querySelector("#imagen-txt").value.trim();
  let disponible = document.querySelector('input[name=disponible]:checked').value=="true"?1:0;

    if (id==-1 || nombre==""|| cc=="" || precio=="" || imagen=="") {
      let msj= document.querySelector("#mensaje-modal .modal-body .alert");
      msj.classList.remove("alert-primary");
      msj.classList.add("alert-danger");
      msj.innerText = "Rellene todos los campos";
      $("#mensaje-modal").modal("show");

    }else{

  let nuevoBebestible = {};
  nuevoBebestible.id = id;
  nuevoBebestible.nombre = nombre;
  nuevoBebestible.categoria = categoria;
  nuevoBebestible.precio = precio;
  nuevoBebestible.cc= cc;
  nuevoBebestible.imagen = imagen;
  nuevoBebestible.disponible=disponible;



  let formData = new FormData();
  formData.append('id_bebestible', nuevoBebestible.id);
  formData.append('nombre', nuevoBebestible.nombre);
  formData.append('categoria', nuevoBebestible.categoria);
  formData.append('precio', nuevoBebestible.precio);
  formData.append('cc', nuevoBebestible.cc);
  formData.append('imagen', nuevoBebestible.imagen);
  formData.append('disponible', nuevoBebestible.disponible);


  axios.post('api/boti/update/updateBebestible.php', formData)
  .then(function(respuesta){
    let msj= document.querySelector("#mensaje-modal .modal-body .alert");
    if (respuesta.data.resultado) {
      msj.classList.remove("alert-danger");
      msj.classList.add("alert-primary");
      msj.innerText = respuesta.data.comentario;
      window.cargarFormulario("bebestible");
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


(function(){

  window.cargarFormulario("promocion");
  let rad = document.tipo.categoria;
  let prev = null;
  for(var i = 0; i < rad.length; i++) {
      rad[i].onclick = function () {
          if(this !== prev) {
              window.limpiar();
              window.cargarFormulario(this.value);
          };
      };
  };


})();
