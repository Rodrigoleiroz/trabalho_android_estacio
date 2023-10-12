const db = require('./database');

async function createTables() {
    await db.connect();

    await db.query(`CREATE TABLE IF NOT EXISTS tabetatext(
        primeironome VARCHAR(50) UNIQUE NOT NULL,
        sobrenome VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(50),
        celular BIGINT PRIMARY KEY,
        senha INT
    )`);

    await db.end();
    console.log("Tabela Criada");
}

createTables();
