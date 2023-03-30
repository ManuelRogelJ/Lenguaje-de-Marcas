function Enviado(){
    swal({
        title: "Bien Hecho",
        text: "Gracias por contactar con nosotros, contactaremos con usted lo antes posible",
        icon: "success",
        button: "Envia",
      });
  }
  
  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");
  
  abrir.addEventListener("click", () => {
      nav.classList.add("visible");
  })
  
  cerrar.addEventListener("click", () => {
      nav.classList.remove("visible");
  })