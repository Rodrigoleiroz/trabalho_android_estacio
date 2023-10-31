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
    // await inserirRegistrosIniciais(db);

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

// export async function inserirRegistrosIniciais(db) {
//     return new Promise((resolve, reject) => {
//         db.transaction((tx) => {
//             // Inserir o primeiro registro
//             tx.executeSql(
//                 'INSERT INTO colaboradores (crp, primeironome, sobrenome, vertente, convenio, estado, email, celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
//                 ['81234', 'João', 'Silva', 'Hospital', 'Bradesco Saúde', 'São Paulo', 'joao.silva@example.com', '11987654321'],
//                 (_, result) => {
//                     // Inserir o segundo registro
//                     tx.executeSql(
//                         'INSERT INTO colaboradores (crp, primeironome, sobrenome, vertente, convenio, estado, email, celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
//                         ['81235', 'Maria', 'Santos', 'Clínica', 'Amil', 'Belo Horizonte', 'maria.santos@example.com', '3134567890'],
//                         (_, result) => {
//                             // Inserir o terceiro registro
//                             tx.executeSql(
//                                 'INSERT INTO colaboradores (crp, primeironome, sobrenome, vertente, convenio, estado, email, celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
//                                 ['81236', 'Pedro', 'Ferreira', 'Consultório', 'Unimed', 'Porto Alegre', 'pedro.ferreira@example.com', '51398765432'],
//                                 (_, result) => {
//                                     resolve();
//                                 },
//                                 (_, error) => {
//                                     reject(error);
//                                 }
//                             );
//                         },
//                         (_, error) => {
//                             reject(error);
//                         }
//                     );
//                 },
//                 (_, error) => {
//                     reject(error);
//                 }
//             );
//         });
//     });
// }


export async function getUsuario(db, cpf) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT cpf, primeironome, sobrenome, email, celular, senha FROM usuarios WHERE cpf = ?',
          [cpf],
          (_, results) => {
            // Verifique se algum usuário foi encontrado
            if (results.rows.length > 0) {
              const user = results.rows.item(0); // Pegue o primeiro usuário encontrado
              resolve(user);
            } else {
              resolve(null); // Nenhum usuário com o CPF especificado foi encontrado
            }
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  }
  

export async function getProfileData(db, userId) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM usuarios WHERE cpf = ?', [userId], (_, results) => {
          if (results.rows.length > 0) {
            const userData = results.rows.item(0);
            resolve(userData);
          } else {
            resolve(null); // Usuário não encontrado
          }
        }, (_, error) => {
          reject(error);
        });
      });
    });
  }

export async function buscarColaboradoresPorFiltro() {
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

export async function updateUsuario(db, cpf, primeironome, sobrenome, email, celular, senha) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE usuarios ' +
                'SET primeironome = ?, sobrenome = ?, email = ?, celular = ?, senha = ? ' +
                'WHERE cpf = ?',
                [primeironome, sobrenome, email, celular, senha, cpf],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
}

export async function excluirUsuario(db, cpf) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM usuarios WHERE cpf = ?',
          [cpf],
          (_, result) => {
            resolve(result);
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
}
  
// export const excluirUsuario = async (cpf) => {
//     try {
//       const db = await DatabaseConnection.getConnection();
//       const query = 'DELETE FROM usuarios WHERE cpf = ?';
//       await db.executeSql(query, [cpf]);
//       return true; // Indica que a exclusão foi bem-sucedida
//     } catch (error) {
//       console.error('Erro ao excluir usuário:', error);
//       return false; // Indica que houve um erro na exclusão
//     }
//   };