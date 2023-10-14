const pg = require('pg')

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'cadastro',
    password: 'psicologia',
    port: 5432,
})

module.exports = client