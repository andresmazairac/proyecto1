const db = require("../../creo_bbdd.js")

const borrarfactura = (req,res) => {
  const {
    id
        } = req.params;

let id1 = parseInt(id)
console.log('o id recibido é ',id1);
db.run("delete from FACTURILLAS where ID_FACTURAS = ?",[id1],function(err) {
  if (err) {
      throw err;
  }
 console.log(`A row has been deleted with rowid ${this.lastID}`);
})

res.send({mensaxe:"dato recibido"})
}
module.exports = borrarfactura