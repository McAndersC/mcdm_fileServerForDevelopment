const server = require('./lib/server.js');
const app = {};

// Applikations Initialisering.
app.init = () => {

    console.log('\n----------------------------------------------');
    console.log('MCDM - Local Server til test. (file-edition)\n');

    server.run();

};

// Kalder Initialisering af Applikation.
app.init();

module.export = app;