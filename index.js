
const firebird = require('node-firebird')
const FirebirdConnector = require('./connect.js');

const options = {
    host: '127.0.0.1',
    port: 3050,
    database: 'TRANSACIONAL.GDB',
    user: 'SYSDBA',
    password: 'masterkey',
    lowercase_keys: false, 
    role: null,            
    pageSize: 4096         
}

const connector = new FirebirdConnector(options);
function query (sql){
    connector.query(sql)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        });
}
module.exports.query = query;
