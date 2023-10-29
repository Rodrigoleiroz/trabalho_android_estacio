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
    await createColaboradoresTable(db); 
    console.log('Tabela "colaboradores" criada');
    await createColaboradoresTable(db);
    await inserirRegistrosIniciais(db);

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

export async function createColaboradoresTable(db) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS colaboradores (' +
                'crp VARCHAR(10) PRIMARY KEY, ' +
                'primeironome VARCHAR(20) NOT NULL, ' +
                'sobrenome VARCHAR(50) NOT NULL, ' +
                'vertente VARCHAR(50) NOT NULL, ' +
                'convenio VARCHAR(50) NOT NULL, ' +
                'estado VARCHAR(50) NOT NULL, ' +
                'email VARCHAR(100) NOT NULL, ' +
                'celular VARCHAR(14) NOT NULL' +
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

export async function inserirRegistrosIniciais(db) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            // Inserir o primeiro registro
            tx.executeSql(
                'INSERT INTO colaboradores (crp, primeironome, sobrenome, vertente, convenio, estado, email, celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
                ['53427', 'Julia', 'Santos Souza', 'TCC', 'Amil', 'Maranhao', 'julia.santos@example.com', '21987654234'],
                (_, result) => {
                    // Inserir o segundo registro
                    tx.executeSql(
                        'INSERT INTO colaboradores (crp, primeironome, sobrenome, vertente, convenio, estado, email, celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
                        ['28463', 'Margareth', 'Juliano', 'Psicanalista', 'Assim', 'Tocantins', 'Margareth Juliano@example.com', '6398251463'],
                        (_, result) => {
                            // Inserir o terceiro registro
                            tx.executeSql(
                                'INSERT INTO colaboradores (crp, primeironome, sobrenome, vertente, convenio, estado, email, celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
                                ['81233', 'Luisa', 'Correa', 'Clinica', 'Golden Cross', 'Rio de Janeiro', 'luisa.correa@example.com', '21982456376'],
                                (_, result) => {
                                    resolve();
                                },
                                (_, error) => {
                                    reject(error);
                                }
                            );
                        },
                        (_, error) => {
                            reject(error);
                        }
                    );
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

export async function getTodosColaboradores() {
    const db = await getDbConnection();
    
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM colaboradores', [], (_, results) => {
                // Mapeie os resultados para um array de objetos
                const colaboradores = [];
                for (let i = 0; i < results.rows.length; i++) {
                    const row = results.rows.item(i);
                    colaboradores.push(row);
                }
                resolve(colaboradores);
            }, (_, error) => {
                reject(error);
            });
        });
    });
}






