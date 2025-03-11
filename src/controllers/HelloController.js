const HelloModel = require('../models/HelloModel');

const getHelloWorld= async (_req, res)=>{
    try{
        const hello = new HelloModel();
        const msg = hello.getHelloWorld();
        /* First parameter it is your view and second one it is what you want to render */
        return res.render('helloWorld', {msg});
    } catch(error){
        return res.status(500).send({message: 'Error innesperado'})
    }
}

module.exports = { getHelloWorld }