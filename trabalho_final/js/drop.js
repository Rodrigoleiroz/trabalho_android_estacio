const db = require('./database')

async function dropTables() {
    await db.connect()
    await db.query('DROP TABLE usuarios CASCADE')
    await db.end()
    console.log("Tabela Removida");
}

dropTables()