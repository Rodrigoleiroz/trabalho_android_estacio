import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  
  
  const showAlert = () => {
    window.alert('Seu login foi realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>Clinica Expansao da Mente</Text>

      <Image
        style={styles.imagem}
        resizeMode='stretch'
        source={require('./images/psicologia.png')}
      />

      <Text style={styles.display1}></Text>
      
      <Text style={styles.display2}></Text>
      <TextInput
        placeholder= "Email do usuario"
        style={styles.usuario}
        value={usuario}
        onChangeText={(texto) => setUsuario(texto)}
      />

      <Text style={styles.display3}></Text>
      <TextInput
        secureTextEntry={true}
        placeholder= "Senha"
        style={styles.senha}
        value={senha}
        onChangeText={(texto) => setSenha(texto)}        
      />
            
      <TouchableOpacity style={styles.botaoLogin} onPress={showAlert} >
        <Text style= {{COLOR:'white', textAlign:'center'}}>Login</Text>        
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
    marginLeft: 30,
    fontSize: 28,
  },
  display1: {
    marginLeft: 50,
    fontSize: 20,
  },

  usuario: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 20,
    marginLeft: 10,
    marginTop: 10,
    padding: 15,
  },
  senha: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 20,
    marginLeft: 10,
    marginTop: 10,
    padding: 15,
  },
  
  botaoLogin: {
    width: 350,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 15,
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',

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
