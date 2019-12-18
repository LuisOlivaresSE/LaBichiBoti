window.obtenerPromociones = function(){
  axios.get('api/boti/index/indexPromociones.php')
  .then(function(respuesta){
    let nuevaData=[];
    for (var i = 0; i < respuesta.data.length; i++) {
      if (respuesta.data[i].descripcion.toUpperCase().includes(window.busqueda.toUpperCase())) {
        nuevaData.push(respuesta.data[i]);
      }
    }
    window.cargarPromociones(nuevaData);
  });
};

window.cargarPromociones = function(promociones){
  let contenedor = document.querySelector("#contenedor");
  contenedor.innerHTML="";

  let divCarInner = document.createElement("div");
  divCarInner.classList.add("carousel-inner");

  for(let i=0; i < promociones.length; ++i){
    if (promociones[i].disponible==1) {
      let divC = document.createElement("div");
      let img = document.createElement("img");
      let divB = document.createElement("div");
      let pNombre = document.createElement("p");
      let pPrecioAnterior = document.createElement("del");
      let pPrecioActual = document.createElement("p");
      let promocionAct = promociones[i];
      pNombre.innerText = promocionAct.descripcion;
      pPrecioAnterior.innerText="$"+promocionAct.precio_anterior;
      pPrecioActual.innerText = "$"+promocionAct.precio;
      img.src= "img/promociones/"+promocionAct.imagen;


      divC.classList.add("card", "m-3", "col-lg-3", "col-md-4", "col-sm-6");


      img.classList.add("card-img-top", "p-3","img-fluid","mx-auto");
      img.style.height="300px";

      divB.classList.add("card-body","text-center","align-bottom");

      pNombre.classList.add("font-weight-bold","card-text");
      pPrecioAnterior.classList.add("font-weight-normal","card-text","mt-n3");
      pPrecioActual.classList.add("font-weight-bold","card-text");

      divC.appendChild(img);
      divB.appendChild(pNombre);
      divB.appendChild(pPrecioAnterior);
      divB.appendChild(pPrecioActual);
      divC.append(divB);

      contenedor.appendChild(divC);


    }
  }
  window.obtenerBebestibles();
};


window.obtenerBebestibles = function(){
  axios.get('api/boti/index/indexBebestibles.php')
  .then(function(respuesta){
    let nuevaData=[];
    for (var i = 0; i < respuesta.data.length; i++) {
      if (respuesta.data[i].nombre.toUpperCase().includes(window.busqueda.toUpperCase())) {
        nuevaData.push(respuesta.data[i]);
      }
    }
    window.cargarBebestibles(nuevaData);
  });
};

window.cargarBebestibles = function(bebestibles){

  let contenedor = document.querySelector("#contenedor")
    for(let i=0; i < bebestibles.length; ++i){
      if (bebestibles[i].disponible==1 && (bebestibles[i].nombre.toUpperCase()).includes(busqueda.toUpperCase())) {
      let divC = document.createElement("div");
      let img = document.createElement("img");
      let divB = document.createElement("div");
      let pNombre = document.createElement("p");
      let pCc = document.createElement("p");
      let pPrecio = document.createElement("p");
      let bebestibleAct = bebestibles[i];
      pNombre.innerText = bebestibleAct.nombre;
      pCc.innerText=bebestibleAct.cc + " cc";
      pPrecio.innerText = "$"+bebestibleAct.precio;
      img.src= "img/bebestibles/"+bebestibleAct.imagen;


      divC.classList.add("card", "m-3", "col-lg-3", "col-md-4", "col-sm-6");


      img.classList.add("card-img-top", "p-3","img-fluid","mx-auto");
      img.style.height="300px";

      divB.classList.add("card-body","text-center","align-bottom");

      pNombre.classList.add("font-weight-bold","card-text");
      pCc.classList.add("font-weight-bold","card-text","mt-n3");
      pPrecio.classList.add("font-weight-normal","card-text");

      divC.appendChild(img);
      divB.appendChild(pNombre);
      divB.appendChild(pCc);
      divB.appendChild(pPrecio);
      divC.append(divB);

      contenedor.appendChild(divC);

    }

  }
window.obtenerOtros();


};


window.obtenerOtros = function(){
  axios.get('api/boti/index/indexOtros.php')
  .then(function(respuesta){
    let nuevaData=[];
    for (var i = 0; i < respuesta.data.length; i++) {
      if (respuesta.data[i].nombre.toUpperCase().includes(window.busqueda.toUpperCase())) {
        nuevaData.push(respuesta.data[i]);
      }
    }
    window.cargarOtros(nuevaData);
  });
};

window.cargarOtros = function(otros){
  let contenedor = document.querySelector("#contenedor")
  for(let i=0; i < otros.length; ++i){
    if (otros[i].disponible==1 && (otros[i].nombre.toUpperCase()).includes(busqueda.toUpperCase()) && busqueda!="") {
    let divC = document.createElement("div");
    let img = document.createElement("img");
    let divB = document.createElement("div");
    let pNombre = document.createElement("p");
    let pPrecio = document.createElement("p");
    let otroAct = otros[i];
    pNombre.innerText = otroAct.nombre;
    pPrecio.innerText = "$"+otroAct.precio;
    img.src= "img/otros/"+otroAct.imagen;

    divC.classList.add("card", "m-3", "col-lg-3", "col-md-4", "col-sm-6");

    img.classList.add("card-img-top", "p-3","img-fluid","mx-auto");
    img.style.height="300px";

    divB.classList.add("card-body","text-center","align-bottom");

    pNombre.classList.add("font-weight-bold","card-text");
    pPrecio.classList.add("font-weight-normal","card-text");

    divC.appendChild(img);
    divB.appendChild(pNombre);
    divB.appendChild(pPrecio);
    divC.append(divB);

    contenedor.appendChild(divC);
  }
  }
  if (contenedor.innerHTML=="") {
     contenedor.classList.add("m-auto");
     let hMsj = document.createElement("h4");
     hMsj.classList.add("alert","alert-warning","font-weight-normal","text-center","col-8","m-auto");
     hMsj.innerText="No se han encontrado resultados";
     contenedor.appendChild(hMsj);
   }

};





(function(){
  if (window.location.href.includes("busqueda")==true) {
    let array = (window.location.href.split("?"));
    let ksi = array[1].split("=");
    window.busqueda="";
    window.busqueda = ksi[1];
    window.obtenerPromociones();

  }else{
    window.location="index.php";
  }
  document.querySelector("#buscar-btn").addEventListener('click',function(){
    let texto = document.querySelector("#texto-busc").value;
    if (texto.trim()!="") {
      let href= "resultados.php?busqueda="+texto;
      window.location=href;
    }

  });



})();
