
import { formlog } from "./referenciaslogyreg.js";





formlog.addEventListener("submit", async (e) => {
  e.preventDefault(); 
  let formData = new FormData(formlog); 
  console.log("o formData ", formData);

   let valores = formData.entries(); 
  const formJson = Object.fromEntries(valores);
  console.log(formJson);
  let obxetoEnvio = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formJson),
  };

  let respostaLogueo = await fetch("/logueo", obxetoEnvio);

  let contestacionRecibida = await respostaLogueo.json();
  console.log("resposta ", contestacionRecibida); 

   if (contestacionRecibida.estado == "ok") {
    
    location.replace("/factura");
    localStorage.setItem("usuario", JSON.stringify(contestacionRecibida));
    let menxaxeRecibida = JSON.parse(localStorage.getItem("usuario"))
    console.log(menxaxeRecibida)
  } else {
    console.log(contestacionRecibida);
  } 
});

