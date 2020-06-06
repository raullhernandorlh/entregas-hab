const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mock = require ('../mock');


const login = async (req,res) => {

    // IMPORTANTE !! No necesito coger el email porque no voy a comprobar si esta metido. 
    // Porque ya esta metido desde el principio
    console.log(req.body)
    const {password} = req.body;  

    // Me vienen estos datos de la funcion creada en index.js "hashThePassword"
    
    const getEmail= (await mock.hashThePassword()).email;
    const hashPassword = (await mock.hashThePassword()).password;
    console.log(hashPassword);


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
