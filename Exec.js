const Connection = require('./index.js');
const result = Connection.query('select * from produto');
console.log(result);