const path = require("path");
const ruta = {
  root: path.join(__dirname, "../public"),
};

const enviofactura = (req,res)=>{
  res.sendFile("./views/factura.html", ruta)
}; 
const enviocrearuser = (req,res)=>{
  res.sendFile("./views/creauser.html", ruta)
};
const enviolog = (req,res)=>{
  res.sendFile("./index.html",ruta)
}
const enviorep =(req,res)=>{
res.sendFile("./views/repositorio.html",ruta)
}
const envioimg=(req,res)=>{
  res.sendFile("./views/cambiarimagenuser.html",ruta)
}

module.exports = {
  enviofactura,
  enviocrearuser,
  enviolog,
  enviorep,
  envioimg
};
