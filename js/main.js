
/////////////////////////////////////CARGAR/OBTENER //////////////////////////////////////
window.obtenerBebestibles = function(){
  axios.get('api/boti/index/indexBebestibles.php')
  .then(function(respuesta){

    window.cargarBebestibles(respuesta.data);
  });
};

window.obtenerOtros = function(){
  axios.get('api/boti/index/indexOtros.php')
  .then(function(respuesta){
    window.cargarOtros(respuesta.data);
  });
};

window.obtenerBebestiblesCat = function(categoria){

  axios.get('api/boti/index/indexBebestibles.php')
  .then(function(respuesta){

    window.cargarBebestiblesCat(respuesta.data,categoria);
  });
};


window.obtenerPromociones = function(){
  axios.get('api/boti/index/indexPromociones.php')
  .then(function(respuesta){
    window.cargarPromociones(respuesta.data);
  });
};

window.cargarBebestibles = function(bebestibles){
  let contenedor = document.querySelector("#contenedor")
  contenedor.innerHTML="";
    for(let i=0; i < bebestibles.length; ++i){
      if (bebestibles[i].disponible==1) {
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


};

window.cargarBebestiblesCat = function(bebestibles,categoria){

  let contenedor = document.querySelector("#contenedor")
  contenedor.innerHTML="";
    for(let i=0; i < bebestibles.length; ++i){
      if (bebestibles[i].disponible==1 && bebestibles[i].categoria==categoria) {
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


};

window.cargarOtros = function(otros){
  let contenedor = document.querySelector("#contenedor")
  for(let i=0; i < otros.length; ++i){
    if (otros[i].disponible==1) {

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

  };
};
};


window.cargarPromociones = function(promociones){
  let contenedor = document.querySelector("#carrusel-promociones");
  contenedor.innerHTML="";
  let activo=0;
  let divCarInner = document.createElement("div");
  divCarInner.classList.add("carousel-inner");
  for(let i=0; i < promociones.length; ++i){
    let divCarItem = document.createElement("div");
    let img = document.createElement("img");
    let divCaption = document.createElement("div");
    let pNombre = document.createElement("h5");
    let pPrecioAnterior = document.createElement("span");
    let pPrecio = document.createElement("h4");
    let promoAct = promociones[i];

    if (promociones[i].disponible==1) {
      if (activo==0) {
        divCarItem.classList.add("active");
        activo++;
      }
      divCarItem.classList.add("carousel-item");

      img.classList.add("d-block","w-25");
      img.src="img/promociones/"+promoAct.imagen;
      divCaption.classList.add("carousel-caption","d-none","d-md-block");
      pNombre.innerText=promoAct.descripcion;
      pPrecioAnterior.innerText="Precio anterior: "+promoAct.precio_anterior;
      pPrecio.innerText="AHORA: "+promoAct.precio;
      img.style.height="200px";

      divCaption.appendChild(pNombre);
      divCaption.appendChild(pPrecioAnterior);
      divCaption.appendChild(pPrecio);
      divCarItem.appendChild(img);
      divCarItem.appendChild(divCaption);
      divCarInner.appendChild(divCarItem);

      contenedor.appendChild(divCarInner);
    }

  }
  //Las flechas del carrusel
  let carPrev = document.createElement("a");
  let carPrevControl = document.createElement("span");
  let carPrevSr = document.createElement("span");

  let carNext = document.createElement("a");
  let carNextControl = document.createElement("span");
  let carNextSr = document.createElement("span");

  carPrev.classList.add("carousel-control-prev");
  carPrev.setAttribute("href","#carrusel-promociones");
  carPrev.setAttribute("role","button");
  carPrev.setAttribute("data-slide","prev");

  carPrevControl.classList.add("carousel-control-prev-icon");
  carPrevControl.setAttribute("aria-hidden","true");

  carPrevSr.classList.add("sr-only");
  carPrevSr.innerText="Anterior";

  carNext.classList.add("carousel-control-next");
  carNext.setAttribute("href","#carrusel-promociones");
  carNext.setAttribute("role","button");
  carNext.setAttribute("data-slide","next");

  carNextControl.classList.add("carousel-control-next-icon");
  carNextControl.setAttribute("aria-hidden","true");

  carNextSr.classList.add("sr-only");
  carNextSr.innerText="Siguiente";

  carPrev.appendChild(carPrevControl);
  carPrev.appendChild(carPrevSr);

  carNext.appendChild(carNextControl);
  carNext.appendChild(carNextSr);

  contenedor.appendChild(carPrev);
  contenedor.appendChild(carNext);
};

window.paginado = function(){

  let numPaginas = Math.floor();
  console.log(numPaginas);

};


//////////////////// FUNCTION /////////////////////////////////////////
(function(){

    window.listaDisponibles=[];
    window.obtenerPromociones();
    window.obtenerBebestibles();
    window.obtenerOtros();
    window.paginado();

document.querySelector("#todo").addEventListener('click',function(){
  let contenedor = document.querySelector("#contenedor")
  contenedor.innerHTML="";
  window.obtenerBebestibles();
  window.obtenerOtros();
});
document.querySelector("#bebidas").addEventListener('click',function(){
  let contenedor = document.querySelector("#contenedor")
  contenedor.innerHTML="";
  window.obtenerBebestiblesCat("Bebidas");
});
document.querySelector("#cervezas").addEventListener('click',function(){
  let contenedor = document.querySelector("#contenedor")
  contenedor.innerHTML="";
  window.obtenerBebestiblesCat("Cervezas");
});
document.querySelector("#vinos").addEventListener('click',function(){
  let contenedor = document.querySelector("#contenedor")
  contenedor.innerHTML="";
  window.obtenerBebestiblesCat("Vinos");
});
document.querySelector("#destilados").addEventListener('click',function(){
  let contenedor = document.querySelector("#contenedor")
  contenedor.innerHTML="";
  window.obtenerBebestiblesCat("Destilados");
});
document.querySelector("#otros").addEventListener('click',function(){
  let contenedor = document.querySelector("#contenedor")
  contenedor.innerHTML="";
  window.obtenerOtros();
});

document.querySelector("#buscar-btn").addEventListener('click',function(){
  let texto = document.querySelector("#texto-busc").value;
  if (texto.trim()!="") {
    let href= "resultados.php?busqueda="+texto;
    window.location=href;
  }

});

})();
