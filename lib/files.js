const fs = require('fs');
const files = {};

files.readJsonFile = (file, callback) => {

    fs.readFile(file, 'utf8', (err, data) => {
        
        return callback(err, data);

    })
    
};

files.getFile = (payload, callback) => {

    files.readJsonFile(`./data/${payload}.json`, (err, data) => {
        console.log('payload', err)
        if (err) {

            return callback(503, {'message':'Der opstod et internt problem'});
    
        }
     
        return callback(200, data);

    });

}

module.exports = files;