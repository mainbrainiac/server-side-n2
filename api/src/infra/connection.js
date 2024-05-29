import mysql2 from "mysql2/promise"

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') return global.connection

    const connection = await mysql2.createConnection({
        host: '172.25.0.2',
        user: 'root',
        password: '123',
        database: 'petshop'
    });

    console.log("Conectado ao SGBD MySQL")
    global.connection = connection
    return connection
}
export default connect

