let jwt = require('jsonwebtoken');
const db = require("../creo_bbdd.js");
const fs = require("node:fs");
const path = require("path");
const options = { recursive: true };




const comprobar = (req,res,next,email,pwd) => {

  db.get("select * from users WHERE pwd = ? and email = ?", [pwd,email], (err, row) => {
    if (err) {
      res.status(500).json({ error: "Error al realizar la consulta" });
      return;
    }
    if (!row) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }
      if (pwd == row.PWD && email == row.EMAIL) {
        next()  
      };
  })
}
const comprobacionUser = (req,res,next)=>{
  const { authorization } = req.headers;

  if(!authorization){
    const error = new Error("Falta cabeceira de autorización ");
    error.httpStatus = 401;
    res.send({mensaxe:"non ten token"})
    
  }

  let tokenInfo;
  tokenInfo = jwt.verify(authorization,process.env.SECRETO)
  req.userAuth = tokenInfo
  console.log("req.userAuth ",req.userAuth)
   console.log("req.userAuth.id ",req.userAuth.user.id)
  comprobar(req,res,next,tokenInfo.user.email,tokenInfo.user.pwd)

}

const folderUser = (req,res,next) =>{
  req.body.id = 4;
  try{
    fs.mkdir(path.join(__dirname, '../Users' + `/usuario${req.userAuth.user.id}/`),options,
        (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('Directory created successfully!');
            next()
        }
    );
  }catch(err){
    console.error(err);
    throw err
  }
}












                
module.exports={
  comprobacionUser,
  folderUser
}