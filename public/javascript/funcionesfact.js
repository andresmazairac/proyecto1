
let cont = 0;

function contador(cont){
  let tbod = document.querySelector(".tabbody")
 for(let i=0;i<tbod.childElementCount;i++){
  cont++
  tbod.children[i].children[0].innerHTML=cont}
}



export function abrirmenu(mendat,botagr){ 
 if(botagr.value=="off"){
   botagr.value="on"
 mendat.style.display = "flex"}
  else{
    botagr.value="off"
 mendat.style.display = "none"}}


export function añadir(){
  let tbod = document.querySelector(".tabbody")
  let precio = document.querySelector(".precio")
  let producto = document.querySelector(".producto")
  let cantidad = document.querySelector(".cantidad")
  let row = document.createElement("tr")
  let imagen = document.createElement("img")


  imagen.setAttribute("src","imagenes/trash.svg")
    function contador(cont){
       let tbod = document.querySelector(".tabbody")
      
   for(let i=0;i<tbod.childElementCount;i++){
    cont++
    tbod.children[i].children[0].innerHTML=cont}
  }

  for(let i=0;i<6;i++){
     let cell=document.createElement("th")
      cell.innerHTML=""
    row.appendChild(cell)
    }

  tbod.appendChild(row)
  row.children[1].innerHTML = producto.value
  row.children[2].innerHTML = cantidad.value
  row.children[3].innerHTML = precio.value + "€"
  let resultado = precio.value * cantidad.value
  row.children[4].innerHTML= resultado + "€"
 // imagen borrar
  row.children[5].append(imagen) 
  imagen.addEventListener("click",(e)=>{
    let popup = document.querySelector(".popup")
    popup.style.display = "block"
    eliminarFila(e.target)
   })
   contador(cont)
  }


export function suma(numeros){
   let tbod = document.querySelector(".tabbody")
  let sumatot = document.querySelector(".sumt")
  let resultado=0
  numeros=[]
  for(let i=0;i<tbod.childElementCount;i++){
    numeros.push(parseFloat(tbod.children[i].children[4].innerHTML))
  }
  console.log(numeros)
  for(let i=0;i<numeros.length;i++){
    resultado=resultado+numeros[i]}
    sumatot.innerHTML=(resultado)+"€"
}


function eliminarFila(elementoABorrar){
  let popsi = document.querySelector(".popsi")
  let popno = document.querySelector(".popno")
  let popup = document.querySelector(".popup")
 
  popsi.addEventListener("click",(numeros)=>{
    popup.style.display="none"
    elementoABorrar.parentElement.parentElement.remove()
    borrar(numeros)
    
    })
  popno.addEventListener("click",()=>{
    popup.style.display="none"
  })
}


function borrar(numeros){
  cont = 0
  contador(cont)
  suma(numeros)
 }

