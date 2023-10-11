const db = require('./database')

async function listData(){
    await db.connect()
    var result

    result = await db.query("SELECT * FROM usuarios")
    console.log("USUARIOS")
    console.log(result.rows);
}
listData()
