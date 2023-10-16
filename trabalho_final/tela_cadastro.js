import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createTables, insertUsuario, initDatabase, getDbConnection, getUsuario } from './db';
import tela_login from './tela_login';

const Stack = createStackNavigator();

const tela_cadastro = () => {
  const [cpf, setCpf] = useState('');
  const [primeironome, setPrimeironome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');  
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmasenha, setConfirmasenha] = useState('');

  const handleGravar = async () => {
    console.log('Entrou na função handleGravar');

    // Verifique os valores de cpf, primeironome, sobrenome, email e celular
    console.log('cpf:', cpf);
    console.log('primeironome:', primeironome);
    console.log('sobrenome:', sobrenome);
    console.log('email:', email);
    console.log('celular:', celular);
        
    try {
      await initDatabase();
      const db = await getDbConnection();

      // Fornecer os valores cpf, primeironome, sobrenome, email, celular e senha para insertUsuario
      await insertUsuario(db, cpf, primeironome, sobrenome, email, celular, senha);
      
      setCpf('');
      setPrimeironome('');
      setSobrenome('');
      setEmail('');
      setCelular('');
      setSenha('');
      
      alert('Registro gravado com sucesso!');
    } catch (error) {
      console.error('Erro ao gravar registro:', error);
      alert('Erro ao gravar registro. Verifique o console para mais informações.');
    }
  };

  return (
    <View style={styles.container}>
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

      
      <Text style={styles.display7}></Text>
      <TextInput
        secureTextEntry={true}
        placeholder= "Digite uma senha"
        style={styles.senha}
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
        keyboardType="numeric"
      />

      <Text style={styles.display8}></Text>
      <TextInput
        secureTextEntry={true}
        placeholder= "Confirme sua senha"
        style={styles.confirmasenha}
        value={confirmasenha}
        onChangeText={(texto) => setConfirmasenha(texto)}
      />
      
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
  senha: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 5,
    padding: 15,
  },
  confirmasenha: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10,
    padding: 15,
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

export default tela_cadastro;