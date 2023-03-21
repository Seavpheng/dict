const config ={
    db:{
        host : 'localhost',
        port:'3306',
        user: 'root',
        password: 'Seav@0305',
        database: 'entries',
        // waitForConnections: true,
        // connectionLimit: 10,
        // maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        // idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        // queueLimit: 0
    }
};
 
module.exports = config;