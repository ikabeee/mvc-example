const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./src/routes');
const http = require('http');
const path = require('path')

const app = express();
const server = http.createServer(app);

/* EJS Config */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));


/* Middlewares */
app.use(morgan('dev'));
app.use(cors({origin: '*'}));
app.use(express.json());

/* Main route */
app.get('/', (_req, res)=>{
    return res.json({
        app: 'Hello world with MVC',
        version: '1.0.0',
    })
})
/* Routes */
app.use('/', routes);
/* Routes that does not exist (404) */
app.use((_req, res, _next)=>{
    return res.status(404).send({message: 'Service not found'});
})
/* Initialize our server */
server.listen(3000, ()=>{
    console.log(`Server running on port 3000`)
})