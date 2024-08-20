const express = require("express");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload")
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))
app.use('/Users', express.static(path.join(__dirname, 'Users')))
app.use(fileUpload())
app.use(cors())

const {comprobacionUser,folderUser } = require("./middlewares/funcions.middlewares.js");
const {crearUser,logueo,guardarimg} =
require("./controladores/usuarios")

const {borrarfactura,modificarfactura,introducirfact,pintardatos} = require("./controladores/basedatosfacturas")
const {enviofactura,enviocrearuser,enviolog,enviorep,envioimg} = require("./vistas/views.js");
const {paginas}=
    require("./datos/datos.js");
const {repositorio,factura} = require("./controladores/paginas");

app.post("/logueo", logueo);
app.get("./index",enviolog)
app.post("/crearuser", crearUser); 
app.get("/crearuser", enviocrearuser);
app.get("/factura",enviofactura)
app.get("/repositorio",enviorep)
app.get("/envimg",envioimg)
app.post("/datofactura",comprobacionUser,introducirfact)
app.get("/enviodatos",pintardatos);

app.delete("/borrarfactura/:id",comprobacionUser,borrarfactura)
app.put("/updatedatosfactura/:id",comprobacionUser,modificarfactura)
app.get("/paginafactura",comprobacionUser,factura)
app.get("/paginarep",comprobacionUser,repositorio)
app.post("/upload",comprobacionUser,folderUser,guardarimg)






  


app.listen(3000, function () {
    console.log("Server running");
});