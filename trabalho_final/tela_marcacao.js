import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createTables, insertUsuario, initDatabase, getDbConnection, getUsuario } from './db';
import tela_login from './tela_login';

const Stack = createStackNavigator();

const tela_cadastro = () => {
  const [vertente, setVertente] = useState('');
  const [primeironome, setPrimeironome] = useState('');
  const [estado, setEstado] = useState('');
  const [email, setEmail] = useState('');  
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmasenha, setConfirmasenha] = useState('');

  const handleGravar = async () => {
    console.log('Entrou na função handleGravar');

    // Verifique se todos os campos estão preenchidos
    if (!vertente || !primeironome || !estado || !email || !celular || !senha || !confirmasenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Verifique se as senhas coincidem
    if (senha !== confirmasenha) {
      alert('As senhas não coincidem. Por favor, verifique.');
      return;
    }

    // Agora você pode continuar com o código de inserção no banco de dados
    try {
      await initDatabase();
      const db = await getDbConnection();

      // Fornecer os valores vertente, primeironome, sobrenome, email, celular e senha para insertUsuario
      await insertUsuario(db, vertente, primeironome, sobrenome, email, celular, senha);
      
      setvertente('');
      setPrimeironome('');
      setSobrenome('');
      setEmail('');
      setCelular('');
      setSenha('');
      setConfirmasenha('');
      
      alert('Registro gravado com sucesso!');
      navigation.navigate('tela_login');
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
        placeholder= "Vertente"
        style={styles.vertente}
        value={vertente}
        onChangeText={(texto) => setVertente(texto)}
      />
      
      <Text style={styles.display3}></Text>
      <TextInput
        placeholder= "Convenio"
        style={styles.convenio}
        value={convenio}
        onChangeText={(texto) => setConvenio(texto)}
      />

      <Text style={styles.display4}></Text>
      <TextInput
        placeholder= "Estado"
        style={styles.estado}
        value={estado}
        onChangeText={(texto) => setEstado(texto)}        
      />
      
      <Text style={styles.display5}></Text>
      <TextInput
        placeholder= "Cidade"
        style={styles.cidade}
        value={cidade}
        onChangeText={(texto) => setCidade(texto)}
      />
     
      <TouchableOpacity style={styles.botaoBuscar} onPress={handleGravar} >
        <Text style= {{COLOR:'white', textAlign:'center'}}>Buscar Profissional</Text>        
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

  vertente: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 5,
    padding: 15,
  },
  convenio: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 5,
    padding: 15,
  },
  estado: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 5,
    padding: 15,
  },
  cidade: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 5,
    padding: 15,
  },  
  botaoBuscar: {
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