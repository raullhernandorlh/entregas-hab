const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mock = require ('../hashPassword');


const login = async (req,res) => {

    const {password} = req.body;  

    // Me vienen estos datos de la funcion creada en index.js "hashThePassword"
    const hashPassword = (await mock.hashThePassword()).password;
    const passwordIsvalid = await bcrypt.compare(password, hashPassword);

    if (!passwordIsvalid) {
        res.status(401).send();
        return;
    }

    const tokenPayload = {  role: "admin" };
    const token = jwt.sign(tokenPayload, process.env.SECRET, {
        expiresIn: '1d'
    });

    res.json({
        token
    })

    console.log(`Este es el token ${token}`);
}

module.exports = {
    login
}
