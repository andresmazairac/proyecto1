const path = require("path");
const { creoExtensionFicheiro } = require("../../middlewares/funcions.helpers.js");
const imagenUser = (req, res) => {
  let rutaOndeGardamosOFile;
  //console.log("O id no body, req.body.id ",req.body.id)
  const { id } = req.userAuth.user;
  // O 'IF' ASEGURA QUE SE ESTÁN A ENVIAR FICHEIROS, se non os envía enviará un aviso
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }
  //req.files.image_uploads.name = `imaxenUsuario${id}.png`;



  /*console.log(
    "novoNome devolto ",
    creoExtensionFicheiro(req.files.image_uploads.name, id),
  );*/
  let novoNomeFicheiro = creoExtensionFicheiro(req.files.image_uploads.name, id);
  rutaOndeGardamosOFile = path.join(__dirname, "../../Users") + `/usuario${id}/` + novoNomeFicheiro;
  //console.log("rutaOndeGardamosOFile ",rutaOndeGardamosOFile)
  let ficheiroEnviado = req.files.image_uploads;
  ficheiroEnviado.mv(rutaOndeGardamosOFile, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
  });

  res.send({ mensaxe: "carpeta creada" });
};

module.exports = imagenUser;
