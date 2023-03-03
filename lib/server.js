// Require Node Dependencies.
const express = require('express');
const cors = require('cors');
const http = require('http');


// Constants.
const expressServer = express();
const server = {};


// Vores egen afhægigheder
const files = require('./files');

// Express Metoder. De fungere som hjælpere til at håndtere http requests osv.
expressServer.use(express.json());
expressServer.use(express.urlencoded({
  extended: true
}));
expressServer.use(cors());


// GET - Users 
expressServer.get('/', (req, res) => {

    res.status(404);
    res.send({'server' : 'Sådan du fandt vej'});

});

expressServer.get('/filedata/:filename', (req, res) => {

    files.getFile(req.params.filename, (code, returnObj) => {
        console.log('Returned', returnObj)
        res.setHeader('Content-Type', 'application/json');
        res.status(code);
        res.send(returnObj);

    })

})

// Init metode til at starte serveren.
server.run = () => {

    // Getting Server Port to listen for.
    let port = 1337;

    const httpServer = http.createServer(expressServer);

    httpServer.listen(port, () => {
        console.log('HTTP Server tilgængelig på http://localhost:' + port);
        console.log('----------------------------------------------');
    });

}


// Exporting
module.exports = server;