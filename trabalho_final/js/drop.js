const db = require('./database')

async function dropTables() {
    await db.connect()
    await db.query('DROP TABLE tabetatext CASCADE')
    await db.end()
    console.log("Tabela Removida");
}

dropTables()