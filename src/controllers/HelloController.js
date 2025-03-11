const HelloModel = require('../models/HelloModel');

const getHelloWorld= async (_req, res)=>{
    try{
        const hello = new HelloModel();
        const msg = hello.getHelloWorld();
        return res.send({data: msg});
    } catch(error){
        return res.status(500).send({message: 'Error innesperado'})
    }
}

module.exports = { getHelloWorld }