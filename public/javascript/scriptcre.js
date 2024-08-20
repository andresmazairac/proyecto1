import { formcre, pop } from "./referenciaslogyreg.js";

formcre.addEventListener("submit", async (e) => {
  e.preventDefault();
  let formData = new FormData(formcre);

  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
  let obxetoEnvio = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formJson),
  };

  let respostaCrearUser = await fetch("/crearuser", obxetoEnvio);

  let contestacionRecibida = await respostaCrearUser.json();
  console.log("resposta ", contestacionRecibida);
  if (contestacionRecibida.estado == "ok" && contestacionRecibida.mensaje == "usuario creado") {
    console.log("USUARIO CREADO CORRECTAMENTE")
    pop.style.display = "flex"
  } else {
    console.log(contestacionRecibida);
  }
});