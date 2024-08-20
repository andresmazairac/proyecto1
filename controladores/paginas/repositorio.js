const path = require("path");;
const { lerDirectorioWithFile } = 
  require("../../middlewares/funcions.helpers.js")
const { paginas } = require("../../datos/datos.js");

const repositorio = async (req, res) => {
  const { id } = req.userAuth.user;
  let rutaFicheiro0 = path.join(__dirname, "../../Users") + `/usuario${id}/`;
//let rutaFicheiro0 = path.join(__dirname, "../../Users") + `/usuario${id}/`;
  let nomeFicheiro = await lerDirectorioWithFile(rutaFicheiro0);

  if (nomeFicheiro == undefined || nomeFicheiro == false) {
    console.log("ando para o logo user sen foto")
    res.send({ pagina: paginas.factura });
  } else {
    console.log("ando para o logo user CON foto",nomeFicheiro);
    console.log("ruta ",rutaFicheiro0)
    let textoRemplazado = `/Users/usuario${id}/${nomeFicheiro}`;//let textoRemplazado = `/Users/usuario${id}/${nomeFicheiro}`;
    let imaxenBuscada = "imagenes/trash.svg";
    let novaPaxina = paginas.repositorio;
    res.send({ pagina: novaPaxina.replace(imaxenBuscada, textoRemplazado) });
  }
};

module.exports = repositorio;