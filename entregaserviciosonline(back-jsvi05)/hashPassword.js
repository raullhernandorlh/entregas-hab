require('dotenv').config()
const bcrypt = require('bcrypt');

const password = process.argv[2]

let admin = {
    user: "admin",
    email: "admin@gmail.com",
    password: password
}


let hashThePassword = async () => {

    if (process.argv.length !== 3) {
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