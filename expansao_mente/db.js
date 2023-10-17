import { enablePromise, openDatabase } from 'expo-sqlite';

// Defina a constante DATABASE_NAME
const DATABASE_NAME = 'expansao.db';

export async function getDbConnection() {
    const db = await openDatabase({ name: DATABASE_NAME, location: 'C:\Users\rodri\Documents\trabalho_android_estacio\expansao_mente'});
    return db;
}
export async function initDatabase() {
    console.log('Iniciando o banco de dados...');
    const db = await getDbConnection();
    console.log('Banco de dados inicializado');
    await createTables(db);
    console.log('Tabela "usuarios" criada');
    // Não feche a conexão aqui, mantenha-a aberta
    // db.close();
}
export async function createTables(db) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS usuarios (' +
                'cpf INT(11) PRIMARY KEY, ' +
                'primeironome VARCHAR(20) NOT NULL, ' +
                'sobrenome VARCHAR(50) NOT NULL, ' +
                'email VARCHAR(100) NOT NULL, ' +
                'celular VARCHAR(14) NOT NULL, ' +
                'senha VARCHAR(20) NOT NULL' +
                ');',
                [],
                () => {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
}


export async function insertUsuario(db, cpf, primeironome, sobrenome, email, celular, senha) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO usuarios (cpf, primeironome, sobrenome, email, celular, senha) VALUES (?, ?, ?, ?, ?, ?);',
                [cpf, primeironome, sobrenome, email, celular, senha],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    console.error('Erro durante a inserção:', error);
                    reject(error);
                }
            );
        });
    });
}

export async function getUsuario(db) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT cpf, primeironome, sobrenome, email, celular, senha FROM usuarios', [], (_, results) => {
                // Mapeie os resultados para um array de objetos
                const usuarios = [];
                for (let i = 0; i < results.rows.length; i++) {
                    const row = results.rows.item(i);
                    usuarios.push(row);
                }
                resolve(usuarios);
            }, (_, error) => {
                reject(error);
            });
        });
    });
}

// export async function updateSenha(db, email, novaSenha) {
//     return new Promise((resolve, reject) => {
//         db.transaction((tx) => {
//             tx.executeSql(
//                 'UPDATE usuarios SET senha = ? WHERE email = ?;',
//                 [novaSenha, email],
//                 (_, result) => {
//                     resolve(result);
//                 },
//                 (_, error) => {
//                     console.error('Erro durante a atualização de senha:', error);
//                     reject(error);
//                 }
//             );
//         });
//     });
// }
