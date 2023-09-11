import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import Tela_Login from './tela_login';



export default function App() {
  const App = () => {
    return (
      <NavigationContainer>
          <tela_login/>
      </NavigationContainer>
    )
  };

  const [primeironome, setPrimeironome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmasenha, setConfirmasenha] = useState('');
  
  
  const showAlert = () => {
    window.alert('Seu cadastro foi realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>Clinica Expansao da Mente</Text>

      <Image
        style={styles.imagem}
        resizeMode='stretch'
        source={require('./images/psicologia.png')}
      />

      <Text style={styles.display1}>Cadastro de Clientes</Text>
      
      <Text style={styles.display3}>Primeiro Nome</Text>
      <TextInput
        style={styles.primeironome}
        value={primeironome}
        onChangeText={(texto) => setPrimeironome(texto)}
      />

      <Text style={styles.display4}>Sobrenome </Text>
      <TextInput
        style={styles.sobrenome}
        value={sobrenome}
        onChangeText={(texto) => setSobrenome(texto)}
        keyboardType="numeric"
      />

      <Text style={styles.display5}>Email</Text>
      <TextInput
        style={styles.email}
        value={email}
        onChangeText={(texto) => setEmail(texto)}
      />

      <Text style={styles.display5}>Celular</Text>
      <TextInput
        style={styles.celular}
        value={celular}
        onChangeText={(texto) => setCelular(texto)}
      />

      
      <Text style={styles.display6}>Senha </Text>
      <TextInput
        style={styles.senha}
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
        keyboardType="numeric"
      />

      <Text style={styles.display7}>confirme sua senha </Text>
      <TextInput
        style={styles.confirmasenha}
        value={confirmasenha}
        onChangeText={(texto) => setConfirmasenha(texto)}
      />
      
      <Button
        title="Cadastrar"
        onPress={showAlert}
      />

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
    marginLeft: 30,
    fontSize: 33,
  },
  display1: {
    marginLeft: 50,
    fontSize: 20,
  },

  primeironome: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 350,
    height: 20,
    marginLeft: 10,
    marginTop: 10,
    padding: 2,
  },
  sobrenome: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 350,
    height: 20,
    marginLeft: 10,
    padding: 2,
  },
  email: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 350,
    height: 20,
    marginLeft: 10,
    marginTop: 10,
    padding: 2,
  },
  celular: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 350,
    height: 20,
    marginLeft: 10,
    padding: 2,
  },
  senha: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 350,
    height: 20,
    marginLeft: 10,
    padding: 2,
  },
  confirmasenha: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: 350,
    height: 20,
    marginLeft: 10,
    padding: 2,
  },
  
  display6Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  display8Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  imagem: {
    width: 280,
    height: 200,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  text: {},
});
