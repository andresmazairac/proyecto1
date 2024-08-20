let jwt = require('jsonwebtoken');
const fs = require("node:fs");
const secretoJwtUser = (email)=>{
  let token = jwt.sign({ dato: '${email}' }, process.env.SECRETO);

  return token;
}

const verificarUser = (datoRecibido) => {
  let dato;
  try {
    dato = jwt.verify(datoRecibido,process.env.SECRETO);
    console.log("comprobo en verificar user: ",dato)
    return true
  }catch(e){
    const error = new Error ("O token non é correcto");
    error.httpStatus = 401;
    throw error;
  }
}

const creoExtensionFicheiro = (nomeFicheiro, id) => {
  const searchTerm = ".";
  const indexOfFirst = nomeFicheiro.indexOf(searchTerm); 
  const tamanho = nomeFicheiro.length;
  let novoNome = `imaxenUser${id}`;
  let resultdif = tamanho - indexOfFirst;
  for (let contador = 0; contador < resultdif; contador++) {
    novoNome += nomeFicheiro[indexOfFirst + contador];
  }
  return novoNome;
};

const lerDirectorioWithFile = async (folderName) => {
  let ficheiroPromesa = new Promise((resolve, reject) => {
 
    try {
      fs.readdir(folderName, function (err, files) {
        if (!err) {
      
          resolve(files[0]);
        } else {
          resolve(false);
       
        }
      });
    } catch (error) {
      console.log(error);
    }
  });
  let ficheiro = await ficheiroPromesa;
  return ficheiro;
};

module.exports = {
  secretoJwtUser,
  verificarUser,
  creoExtensionFicheiro,
  lerDirectorioWithFile
}