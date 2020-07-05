require('dotenv').config()
const bcrypt = require('bcrypt');
const validator = require('validator');

const password = process.argv[2];
const email = process.argv[3];

if(!validator.isEmail(email)){
    console.log("El valor introducido no es un email");
    return;
}

    let admin = {
        user: "admin",
        email: email,
        password: password
    }

let hashThePassword = async () => {

    if (process.argv.length !== 4) {
        console.log('Falta un parámetro');
        return;
    }

    const passwordHashed = await bcrypt.hash(password, 10)
    return {
        user: admin.user,
        email: admin.email,
        password: passwordHashed
    }
}

module.exports = {
    hashThePassword
}