const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudp'
});

connection.connect((error)=>{
    if(error){
        console.error('The connection error is: ' + error);
        return
    }
    console.log('Connected!!!');
});

module.exports = connection;
