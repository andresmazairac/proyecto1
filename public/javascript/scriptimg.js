enviar.addEventListener("click", async (e) => {
          e.preventDefault();
        let user = localStorage.getItem("usuario").usuario
                  console.log(user,"check")
  let obxetoAEnviar = {
       method: 'POST',
       headers: {"Authorization": JSON.parse(localStorage.getItem("usuario")).usuario},
            
       body: new FormData(formulario)
     }
          
  let response = await fetch('/upload', obxetoAEnviar);

  let result = await response.json();
  console.log(result.message); 
});