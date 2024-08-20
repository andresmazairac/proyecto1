const db = require("../../creo_bbdd.js");

const modificarfactura= (req,res)=>{
  const {id} = req.params;
  const {FECHA, Nfactura, Tipocliente, MONTANTE, ESTADO} = req.body;
  console.log("chegan os datos",FECHA, Nfactura, Tipocliente, MONTANTE, ESTADO)
  db.run("update FACTURILLAS set FECHA = ? , Nfactura  = ? , Tipocliente = ? ,MONTANTE = ?,ESTADO= ? where id_facturas = ?",[FECHA, Nfactura, Tipocliente, MONTANTE, ESTADO,id],(err) => {
             if (err) {
                 throw err;
             }
            console.log(`A row has been deleted with rowid ${this.lastID}`);
         })

  res.send({mensaje:"mensaje recibido"})
}
module.exports = modificarfactura