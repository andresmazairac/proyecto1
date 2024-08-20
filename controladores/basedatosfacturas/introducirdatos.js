const db = require("../../creo_bbdd.js");
const datosFacturas = (req,res) =>{
  const datos = req.body;
  console.log("prueba",datos)
  console.log(req.body)

  db.run("INSERT INTO FACTURILLAS( FECHA, Nfactura, Tipocliente, MONTANTE, ESTADO ) VALUES (?,?,?,?,1)",
  [datos.Fecha,datos.nfact,datos.tclient,datos.sumtot],(err) => {
                   if (err) {
                      throw err;
                  }
                 console.log(`A row has been inserted with rowid ${this.lastID}`);

  })
  res.send({mensaxe: "dato recibido"})
}
module.exports =datosFacturas