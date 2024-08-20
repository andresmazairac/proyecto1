const db = require("../creo_bbdd.js");

function inserto(datos) {
    const { user_email, user_name, user_apelido1, user_apelido2, user_pwd } =
        datos;

    db.run(
        `insert into users(name_user,apelido1,apelido2,pwd,email) values (?,?,?,?,?)`,
        [user_name, user_apelido1, user_apelido2, user_pwd, user_email],
        function (err) {
            if (err) {
                return console.log(err.message);
            }
            console.log(`inserta ${this.lastID}`);
        },
    );
}



module.exports = {
    inserto
};

