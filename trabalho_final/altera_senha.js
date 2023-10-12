import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tela_login from './tela_login';
import nova_senha from './nova_senha';

export default function altera_senha() {
  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState(''); // Estado para a mensagem de erro
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const showAlert = () => {
    // Verifique se o email é válido
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setErroEmail('Digite um email válido!');
      setEmail('');          
      return; // Saia da função se o email não for válido
    }

    window.alert('Enviamos um link de redefinicao de senha para o email informado!');
    setEmail('');
    navigation.navigate('nova_senha');
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
        placeholder="Email do usuario"
        style={styles.email}
        value={email}
        onChangeText={(texto) => setEmail(texto)}
      />
      <TextInput
        onChangeText={(texto) => {
          setEmail(texto);
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          if (!emailRegex.test(texto)) {
            setErroEmail('Digite um email válido');
          } else {
            setErroEmail('');
          }
        }}
      />
      {erroEmail ? (
        <Text style={styles.erro}>{erroEmail}</Text>
      ) : null}

      
      <TouchableOpacity style={styles.botaoRedefinir} onPress={showAlert}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Redefinir Senha</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}></Text>
      </ScrollView>

      
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
    marginLeft: 50,
    fontSize: 28,
  },
  display1: {
    marginLeft: 50,
    fontSize: 20,
  },

  email: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 10,
    padding: 15,
  },

  erro: {
    color: 'yellow',
    marginLeft: 15,
    },
  
  
  botaoRedefinir: {
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
