const db = require('./database');

async function deleteData() {
    await db.connect();

    const celularToDelete = 21987654321; // Altere o número de celular do usuário a ser excluído conforme necessário

    const queryDeleteUsuario = "DELETE FROM usuarios WHERE celular = $1";

    try {
        await db.query(queryDeleteUsuario, [celularToDelete]);
        console.log('Usuário excluído com sucesso');
    } catch (error) {
        console.error('Erro ao excluir usuário:', error);
    } finally {
        await db.end();
    }
}

deleteData();