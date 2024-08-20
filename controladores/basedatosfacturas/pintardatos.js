const db = require("../../creo_bbdd.js");
const pintardatos = (req,res) => {

  db.all("select * from facturillas",(err, filas) => {
    if (err) {
      throw err;
      }
    console.log(filas)
  res.send(filas)
})
              }
module.exports = pintardatos