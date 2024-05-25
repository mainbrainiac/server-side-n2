import mysql2 from "mysql2/promise"

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') return global.connection

    const connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'petshop'
    });

    console.log("Conectado ao SGBD MySQL")
    global.connection = connection
    return connection
}
export default connect

