async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    
    const pool = new Pool({
        host     : 'localhost',
        user     : 'postgres',
        password : 'psicologia',
        database : 'cadastro',
        port     : '5432',
    });

    // Busca um usuario passando o celular
    async function selectCustomer(celular) {
        const client = await connect();
        const res = await client.query('SELECT * FROM usuarios WHERE celular = $1', [celular]);
        return res.rows;
    };
    // Retorna todos os usuarios em um Json 
    async function selectCustomers() {
        const client = await connect();
        const res = await client.query('SELECT * FROM usuarios');
        return res.rows;
    };
    // Apaga um usuario passando o celular
    async function deleteCustomer(celular) {
        const client = await connect();
        return await client.query('DELETE FROM usuarios WHERE celular = $1', [celular]);
    }

    async function insertCustomer(customer) {
        const client = await connect();
        const sql = 'INSERT INTO usuarios(primeironome, sobrenome, email, celular, senha) VALUES ($1,$2,$3,$4,$5);';
        const values = [customer.primeironome, customer.sobrenome, customer.email, customer.celular, customer.senha];
        return await client.query(sql, values);
    }
    
    module.exports = { selectCustomers, selectCustomer, deleteCustomer, insertCustomer }
    
    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

connect();