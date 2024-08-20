



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
  let respostaRecibida = await fetch("/paginarep", datoEnviadoJSON);
  let respostaRecibidaJson = await respostaRecibida.json();
  console.log("datos recibidos respostaRecibidaJson : ", respostaRecibidaJson)

if(respostaRecibidaJson != null){
  const adaptoToken = ()=>{
    let user = JSON.parse(localStorage.getItem("usuario"))
    return user.usuario
  }

  let _body = document.querySelector("[name='dentrorep']");
  _body.innerHTML = respostaRecibidaJson.pagina;
  let tbod1 = document.querySelector("tbody");
  let sumt1 = document.querySelector(".sumt1");
  let logout = document.querySelector(".logout");
 

  
async function start() {
    let total= 0
  let estado=""
    
        let datos = await fetch("/enviodatos")
        console.log(datos)
        let conversion = await datos.json()
        console.log(conversion)
  let imagen = document.createElement("img")

  imagen.setAttribute("src","imagenes/trash.svg")
  imagen.setAttribute("class","borrep")

        for(let factura of conversion){
          
 let row=document.createElement("tr")
          let numid =factura.ID_FACTURAS
let comm=document.createComment(numid)
          row.appendChild(comm)
          for(let i=0;i<8;i++){
             let cell=document.createElement("th")
              cell.innerHTML=""
            row.appendChild(cell)
            }
          
          if(factura.ESTADO == 1){
            estado="impagado"
          }
          else{estado="pagado"};
          

           row.children[0].innerHTML = factura.FECHA
           row.children[1].innerHTML = factura.Nfactura
           row.children[2].innerHTML = factura.Tipocliente
           row.children[3].innerHTML = factura.MONTANTE
           row.children[4].innerHTML = estado
           row.children[5].innerHTML ="<img src='imagenes/trash.svg' class='borrar' name='borrar1'/>"
           row.children[6].innerHTML ="<img src='imagenes/pincel.svg' class='mod'/>"
           row.children[7].innerHTML ="<img src='imagenes/gardar.svg' class='gardar'/>"
            let num=parseInt(factura.MONTANTE)
            total=total+num
          tbod1.appendChild(row)
        }
  let borrar = document.querySelectorAll(".borrar")
  
  for (let element of borrar){
  element.addEventListener("click",async(e)=>{
    
    let id= parseInt(e.target.parentElement.parentElement.childNodes[0].textContent)
   
      e.target.parentElement.parentElement.remove()
   
    console.log(id)
        let datoEnviado = {
          method: 'delete',
        headers: { 
          "Content-type":"application/json",
             "Authorization": adaptoToken()
          } }
          let datosRecibido = await fetch(`/borrarfactura/${id}`,datoEnviado);
            let datosRecibidoJson = await datosRecibido.json();
    console.log(datosRecibidoJson)
    

            return datosRecibidoJson;
     
          }
 )}
  let editar = document.querySelectorAll(".mod")
 
  for(let element of editar){
     element.addEventListener("click", async (e) => {
       
         
      let tds = e.target.parentElement.parentElement.children;
      console.log("e.target ", e.target);
         
      for (let numTd = 0; numTd < tds.length - 1; numTd++) {
        tds[numTd].setAttribute("contenteditable", "true");
        tds[0].setAttribute("name", "edicion");
        tds[0].setAttribute("contenteditable", "true");
        tds[numTd].addEventListener("input", () => {
          tds[numTd].setAttribute("name", "edicion");
        });
      }
    })};
  let gardar=document.querySelectorAll(".gardar")
  for(let element of gardar){
  element.addEventListener("click", async (e) => {
 
    
    
    console.log("e.target ????", e.target);
    console.log("textContent ",e.target.parentElement.parentElement.childNodes[0].textContent);
    let tds = e.target.parentElement.parentElement.children;
    console.log("e.target ", e.target);

    for (let numTd = 0; numTd < tds.length - 1; numTd++) {
      tds[numTd].removeAttribute("name");
      tds[numTd].setAttribute("contenteditable", "false");
      console.log("VALOR DO td ",tds[numTd].textContent,numTd);
    }
    const comunicacionGardar = async (endpoint,datos) => {
      let datoEnviado = {
        method:'PUT',
        headers:{
          "Content-type":"application/json",
           "Authorization": adaptoToken()
          
        },
        body:JSON.stringify(datos)
      }
      let datosRecibido = await fetch(endpoint,datoEnviado); 
      let datosRecibidoJson = await datosRecibido.json();

      return datosRecibidoJson;
    };
    const crearObxetosModificados = (array) => {
      let obxeto = {
       FECHA:array[0].innerText,
        Nfactura: array[1].textContent,
        Tipocliente: array[2].innerText,
        MONTANTE: parseInt(array[3].textContent),
        ESTADO: parseInt(array[4].innerText)
      }
      return obxeto
    }

    let datoAEnviar = crearObxetosModificados(tds)
    console.log('datoAEnviar ',datoAEnviar)
    
     let id = parseInt(e.target.parentElement.parentElement.childNodes[0].textContent)
    console.log('id? ',id)
    let datoRecibido = await comunicacionGardar(`/updatedatosfactura/${id}`,datoAEnviar);

      console.log("resposta recibida ",datoRecibido)
  }
    
 )};
    
     sumt1.innerHTML=total+"€"
        }

   
    
start()





logout.addEventListener("click",()=>{
  localStorage.clear()
  })
}
}
)