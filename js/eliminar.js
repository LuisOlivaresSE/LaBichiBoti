
window.preCarga =function(elementos){

  let div= document.querySelector("#divCombo");
  div.innerHTML="";
  let form= document.createElement("div");
  form.classList.add("form-group");

  let label= document.createElement("label");
  label.setAttribute("for","elementos-cbx");
  let select = document.createElement("select");
  select.classList.add("form-control");
  select.setAttribute("id","elementos-cbx");

  let radios = document.querySelectorAll(".radios");
  let radioS;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      if (radios[i].value=="Bebestible") {
        label.innerText="Bebestibles disponibles:"
        console.log("Elementos: " + elementos.data);
          for (let i = 0; i < elementos.length; i++) {
            if (elementos[i].disponible==1) {
              let option= document.createElement("option");
              option.setAttribute("value",elementos[i].id);
              option.innerText=elementos[i].nombre + " " + elementos[i].cc+"cc";
              select.appendChild(option);

            }

        };

      }else if (radios[i].value=="Otro") {
          label.innerText="Otros disponibles:"
          console.log("Elementos: " + elementos);
            for (let i = 0; i < elementos.length; i++) {
              if (elementos[i].disponible==1) {
              let option= document.createElement("option");
              option.setAttribute("value",elementos[i].id);
              option.innerText=elementos[i].nombre;
              select.appendChild(option);
            }
          };
      }else{
        console.log("entra en promociones");
        label.innerText="Promociones disponibles:"
        console.log("Elementos: " + elementos);
          for (let i = 0; i < elementos.length; i++) {
            if (elementos[i].disponible==1) {
              let option= document.createElement("option");
              option.setAttribute("value",elementos[i].id);
              option.innerText=elementos[i].descripcion + " / Nuevo Precio: " +"$"+ elementos[i].precio;
              select.appendChild(option);
          }
        };
      }
    }
  }







  form.appendChild(label);
  form.appendChild(select);
  div.appendChild(form);
};

window.eliminarBebestible = function(){

  let id=document.querySelector("#elementos-cbx").value;
  let formData = new FormData();
  formData.append("id",id);
  axios.post("api/boti/delete/deleteBebestible.php",formData)
  .then(function(respuesta){
    window.cargarBebestibles();
    $("#mensaje-modal").modal("show");
  })

};

window.eliminarOtro = function(){
  let id=document.querySelector("#elementos-cbx").value;
  let formData = new FormData();
  formData.append("id",id);
  axios.post("api/boti/delete/deleteOtros.php",formData)
  .then(function(respuesta){
    window.cargarOtros();
    $("#mensaje-modal").modal("show");
  })


};

window.eliminarPromocion = function(){
  let id=document.querySelector("#elementos-cbx").value;
  let formData = new FormData();
  formData.append("id",id);
  axios.post("api/boti/delete/deletePromociones.php",formData)
  .then(function(respuesta){
    window.cargarPromociones();
    $("#mensaje-modal").modal("show");
  })


};

window.cargarBebestibles=function(){
  axios.get('api/boti/index/indexBebestibles.php')
  .then(function(respuesta){
    window.preCarga(respuesta.data)
  })
};


window.cargarOtros=function(){
  axios.get('api/boti/index/indexOtros.php')
  .then(function(respuesta){
    window.preCarga(respuesta.data)
  })
};

window.cargarPromociones=function(){
  axios.get('api/boti/index/indexPromociones.php')
  .then(function(respuesta){
    window.preCarga(respuesta.data)
  })
};

(function(){


    axios.get('api/boti/index/indexPromociones.php')
    .then(function(respuesta){
      window.preCarga(respuesta.data)
    })
      document.querySelector("#eliminar-btn").addEventListener('click',function(){
        let radios = document.querySelectorAll(".radios");
        let radioS;
        for (let i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
            if (radios[i].value=="Bebestible") {
              window.eliminarBebestible();

            }else if (radios[i].value=="Otro") {
                window.eliminarOtro();
            }else{

                window.eliminarPromocion();
            }
          }
        }

      })
      document.querySelector("#radio").addEventListener('click', function(){

        let radios = document.querySelectorAll(".radios");
        let radioS;
        for (let i = 0; i < radios.length; i++) {
          if (radios[i].checked) {

            let radioAct=radios[i];
            console.log(radioAct);

            if (radios[i].value=="Bebestible") {
              window.cargarBebestibles();

            }else if (radios[i].value=="Otro") {
              window.cargarOtros();

            }else{
                window.cargarPromociones();


            }


          }
        }

      })


})();
