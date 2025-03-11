const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./src/routes');
const http = require('http');

const app = express();
const server = http.createServer(app);


app.use(morgan('dev'));
app.use(cors({origin: '*'}));
app.use(express.json());

app.get('/', (_req, res)=>{
    return res.json({
        app: 'Hello world with MVC',
        version: '1.0.0',
    })
})

app.use('/', routes);
app.use((_req, res, _next)=>{
    return res.status(404).send({message: 'Service not found'});
})

server.listen(3000, ()=>{
    console.log(`Server running on port 3000`)
})