import connect from './connection.js';

async function executeQuery(query, params) {
    const connection = await connect();
    const [results] = await connection.query(query, params);
    return results;
}

export default executeQuery;