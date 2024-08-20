const { inserto } = require("../../middlewares/funcions.bbdd.js");
const crearUser = (req, res) => {
  const { user_email, user_name, user_apelido1, user_apelido2 } = req.body;

  let condicion =
    user_email != "" &&
    user_name != "" &&
    user_apelido1 != "" &&
    user_apelido2 != "" &&
    user_pwd != "";
  let mensajeEnviado = {};
  if (condicion) {
    inserto(req.body);
    mensajeEnviado.estado = "ok";
    mensajeEnviado.mensaje = "usuario creado";
  } else {
    mensajeEnviado.estado = "ok";
    mensajeEnviado.mensaje = "usuario no creado";
  }
  res.send(mensajeEnviado)
};
module.exports= crearUser