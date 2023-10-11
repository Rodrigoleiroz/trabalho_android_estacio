const pg = require('pg')

const client = new pg.Client({
    user: 'postgres',
    host: '192.168.0.62',
    database: 'cadastro',
    password: 'psicologia',
    port: 5432,
})

module.exports = client