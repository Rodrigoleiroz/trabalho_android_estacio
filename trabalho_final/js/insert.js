const db = require('./database');

async function insertData() {
    await db.connect();

    const queryTorcedor = "INSERT INTO usuarios (primeironome, sobrenome, email, celular, senha) VALUES ($1, $1, $1, $1, $1)";

    try {
        await db.query(queryUsuarios, ['João Pedro', 'Silva', 'joao.silva@example.com', 21987654321, 123456]);
        await db.query(queryUsuarios, ['Mariana', 'Santos', 'maria.santos@example.com', 21976543210, 654321]);
        await db.query(queryUsuarios, ['Paulo', 'Oliveira', 'pedro.oliveira@example.com', 21965432109, 789012]);
        console.log('Dados inseridos');
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
    } finally {
        await db.end();
    }
}

insertData();
