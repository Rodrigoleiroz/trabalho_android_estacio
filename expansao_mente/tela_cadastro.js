import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createTables, insertUsuario, initDatabase, getDbConnection, getUsuario } from './db';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

const tela_cadastro = () => {
  const [cpf, setCpf] = useState('');
  const [primeironome, setPrimeironome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');  
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmasenha, setConfirmasenha] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const navigation = useNavigation();


  const handleGravar = async () => {
    console.log('Entrou na função handleGravar');

    // Validação de CPF
    if (!cpf) {
      alert('O campo CPF é obrigatório.');
      return;
    } else if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
      alert('CPF inválido. Deve conter 11 dígitos numéricos.');
      return;
    }

    // Validação de Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})?$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    // Validação de Celular
    const celularPattern = /^[0-9]{10,11}$/;
    if (!celularPattern.test(celular)) {
      alert('Por favor, insira um número de celular válido com 10 a 11 dígitos.');
      return;
    }

    // Validação de Senhas
    if (!senha || !confirmasenha) {
      alert('Por favor, preencha ambas as senhas.');
      return;
    }

    if (senha !== confirmasenha) {
      alert('As senhas não coincidem. Por favor, verifique.');
      return;
    }

    try {
      await initDatabase();
      const db = await getDbConnection();

      // Verificar se o CPF já existe no banco de dados
      const result = await checkIfCPFExists(db, cpf);
      if (result.rows.length > 0) {
        alert('CPF já cadastrado. Por favor, insira um CPF diferente.');
        return;
      }

      // Agora você pode continuar com o código de inserção no banco de dados
      await insertUsuario(db, cpf, primeironome, sobrenome, email, celular, senha);

      setCpf('');
      setPrimeironome('');
      setSobrenome('');
      setEmail('');
      setCelular('');
      setSenha('');

      alert('Registro gravado com sucesso!');
      navigation.navigate('tela_login');
    } catch (error) {
      console.error('Erro ao gravar registro:', error);
      alert('Erro ao gravar registro. Verifique o console para mais informações.');
    }
  };

  // Função para verificar se o CPF já existe no banco de dados
  const checkIfCPFExists = async (db, cpf) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM usuarios WHERE cpf = ?',
          [cpf],
          (_, result) => {
            resolve(result);
          },
          (_, error) => {
            console.error('Erro durante a verificação do CPF:', error);
            reject(error);
          }
        );
      });
    });
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('tela_login')}>
        <Text style={{ color: 'darkblue', textAlign: 'left' }}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.display}>Expansão da Mente</Text>

      <Image
        style={styles.imagem}
        resizeMode='stretch'
        source={require('./images/Exapansao_da_Mente-logo.png')}
      />

      <Text style={styles.display1}></Text>



      <Text style={styles.display2}></Text>
      <TextInput
        placeholder= "Cpf"
        style={styles.cpf}
        value={cpf}
        onChangeText={(texto) => setCpf(texto)}
      />
      
      <Text style={styles.display3}></Text>
      <TextInput
        placeholder= "Nome"
        style={styles.primeironome}
        value={primeironome}
        onChangeText={(texto) => setPrimeironome(texto)}
      />

      <Text style={styles.display4}></Text>
      <TextInput
        placeholder= "Sobrenome"
        style={styles.sobrenome}
        value={sobrenome}
        onChangeText={(texto) => setSobrenome(texto)}        
      />
      
      <Text style={styles.display5}></Text>
      <TextInput
        placeholder= "Email"
        style={styles.email}
        value={email}
        onChangeText={(texto) => setEmail(texto)}
      />

      <Text style={styles.display6}></Text>
      <TextInput
        placeholder= "Celular com DDD"
        style={styles.celular}
        value={celular}
        onChangeText={(texto) => setCelular(texto)}
      />

      
      {/* <Text style={styles.display7}></Text>
      <TextInput
        secureTextEntry={true}
        placeholder= "Digite uma senha"
        style={styles.senha}
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
        keyboardType="numeric"
      /> */}

      <View style={styles.inputArea}>
        <TextInput          
          placeholder= "Digite uma senha"
          style={styles.senha}
          value={senha}
          onChangeText={(texto) => setSenha(texto)}
          secureTextEntry={hidePass}   
        /> 
        <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
          {hidePass ?
            <Ionicons name="eye" color="#FFF" size={25} />
            :
            <Ionicons name="eye-off" color="#FFF" size={25} />

          }
        </TouchableOpacity>
      </View>

      {/* <Text style={styles.display8}></Text>
      <TextInput
        secureTextEntry={true}
        placeholder= "Confirme sua senha"
        style={styles.confirmasenha}
        value={confirmasenha}
        onChangeText={(texto) => setConfirmasenha(texto)}
      /> */}

<View style={styles.inputArea}>
        <TextInput          
        placeholder= "Confirme sua senha"
        style={styles.confirmasenha}
        value={confirmasenha}
        onChangeText={(texto) => setConfirmasenha(texto)}
        secureTextEntry={hidePass}   
        /> 
        <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
          {hidePass ?
          <Ionicons name="eye" color="#FFF" size={25} />
          :
          <Ionicons name="eye-off" color="#FFF" size={25} />

        }
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.botaoCadastro} onPress={handleGravar} >
        <Text style= {{COLOR:'white', textAlign:'center'}}>Cadastrar</Text>        
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}></Text>
      </ScrollView>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    marginTop: 20,
    justifyContent: 'center',
  },
  display: {
    margin: 10,
    marginLeft: 55,
    fontSize: 28,
  },
  display1: {
    marginLeft: 50,
    fontSize: 20,
  },

  cpf: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 5,
    padding: 15,
  },
  primeironome: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 5,
    padding: 15,
  },
  sobrenome: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 5,
    padding: 15,
  },
  email: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 5,
    padding: 15,
  },
  celular: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 5,
    padding: 15,
  },
  inputArea:{
    flexDirection: 'row',
    borderWidth: 1,
    width: 350,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 45, 
    marginLeft: 10,
    marginTop: 5,
    padding: 15,
  },
  senha: {
    Color: '#FFF',    
    width: '85%',
    height: 20      
  },
  confirmasenha: {
    Color: '#FFF',
    width: '85%',
    height: 20
     
  },
  icon: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoCadastro: {
    width: 350,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 15,
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',

  },

  imagem: {
    width: 250,
    height: 160,
    marginLeft: 60,
    marginTop: 5,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  text: {},
});

export default tela_cadastro