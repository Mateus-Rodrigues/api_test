const mysql = require('mysql2/promise');

const bd_usuario = 'us_tecdes_223_g6';
const bd_senha = 'ah7273';
const bd_servidor= '10.67.22.216';
const bd_porta = '3303';
const bd_banco = 'us_tecdes_223_g6';
let connection;

const config = {
    host: bd_servidor,
    port: bd_porta,
    user: bd_usuario,
    password: bd_senha,
    database: bd_banco,
    waitForConnections: true,
    connectionsLimit: 10, //padrão: 10 - deixar 100 ou 1000,
    queueLimit: 0,
}








try{
    connection = mysql.createPool(config);

    console.log('Chamou Conexão Mysql!');
} catch(error){
    console.log(error);

}

module.exports = connection;
