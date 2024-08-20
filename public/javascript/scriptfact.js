
import { añadir, suma, abrirmenu } from "./funcionesfact.js";


document.addEventListener("DOMContentLoaded", async() => {
  console.log("hola");


  let token = localStorage.getItem("usuario")

 let tokenParseado = JSON.parse(token)

 
  console.log("token ",token)


  console.log("tokenParseado ",tokenParseado.usuario,'sin parsear ',token)

  let datoEnviadoJSON = {
    method: "GET",
    headers: {
      "Authorization": tokenParseado.usuario,
    }
  };
console.log("enviado",datoEnviadoJSON)
  let respostaRecibida = await fetch("/paginafactura", datoEnviadoJSON);
  let respostaRecibidaJson = await respostaRecibida.json();
  console.log("datos recibidos respostaRecibidaJson : ", respostaRecibidaJson)

if(respostaRecibidaJson != null){
  let _body = document.querySelector("[name='dentrofactura']");
  _body.innerHTML = respostaRecibidaJson.pagina;
  const adaptoToken = ()=>{
    let user = JSON.parse(localStorage.getItem("usuario"))
    return user.usuario
  }
  let botagr = document.querySelector(".abrirmenu")
  let introducirdatos = document.querySelector(".menu")
  let confirmar = document.querySelector(".introducir")
  let sumt = document.querySelector(".sumt")
  let hecho = document.querySelector(".hecho")
  let cliente= document.querySelector(".cliente")
  let fecha = document.querySelector(".fecha")
  let factura= document.querySelector(".factura")
   let logout = document.querySelector(".logout");

  let numeros = [];
  let mendat = introducirdatos;
  // botagr.value="off";
  
  


 botagr.addEventListener("click", () => { 
  abrirmenu(mendat, botagr);
});
  confirmar.addEventListener("click", () => {

    añadir();
    suma(numeros);
  });


logout.addEventListener("click",()=>{
  localStorage.clear()
  })
hecho.addEventListener("click",async()=>{

  let Dclient = cliente.value;
  let Dfech = fecha.value;
  let Dfactura = factura.value
  let Dsum= sumt.innerHTML
  const datos ={Fecha:Dfech,
                nfact:Dfactura,
                tclient:Dclient,
                sumtot:Dsum}
  console.log(datos)
  let datoenviado = {
    method:'POST',
      headers: {
        "Content-type":"application/json",
           "Authorization": adaptoToken()
      },
      body: JSON.stringify(datos)
    };  
    
console.log(datoenviado)
  let respostaRecibida = await fetch("/datofactura",datoenviado);
 let respostaRecibidaJson = await respostaRecibida.json();
console.log("resposta recibida ", respostaRecibidaJson,datoenviado)
                         })
  }})

                       
  