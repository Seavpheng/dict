const mysql2 = require('mysql2/promise');
const config = require('./config');

module.exports.query = async function(sqlQuery, params){
    const connection = await mysql2.createConnection(config.db);
    const [results] = await connection.query(sqlQuery, params);
   
    return results;
};