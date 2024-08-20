let jwt = require('jsonwebtoken');

const db = require("../../creo_bbdd.js");

const logueo = (req, res) => {

  const { user_email, user_pwd } = req.body;

  console.log("user_email, user_pwd ",user_email, user_pwd)

  db.get("select * from users WHERE pwd = ? and email = ?", [user_pwd,user_email], (err, row) => {
    if (err) {
      res.status(500).json({ error: "Error al realizar la consulta" });
      return;
    }

    if (!row) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }
      if (user_pwd == row.PWD && user_email == row.EMAIL) {
        let datoParaEncriptar = {
          pwd:row.PWD,
          email: row.EMAIL,
          id:row.ID_USER
        };
        console.log("datoParaEncriptar ",datoParaEncriptar,'process.env.SECRETO ',process.env.SECRETO)

          let token = jwt.sign({user: datoParaEncriptar},process.env.SECRETO)
          console.log('token enviado', token)
          res.send({
                    estado: "ok",
                    usuario: token,
                  });
      };

  });

};

module.exports = logueo