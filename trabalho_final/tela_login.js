import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tela_cadastro from './tela_cadastro';
import altera_senha from './altera_senha';

export default function tela_login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erroUsuario, setErroUsuario] = useState(''); // Estado para a mensagem de erro
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const navigateToAlterarSenha = () => {
    // Navegue para a tela 'altera_senha'
    navigation.navigate('altera_senha');
  };

  const navigateToTelaCadastro = () => {
    // Navegue para a tela 'tela_cadastro'
    navigation.navigate('tela_cadastro');
  };

  const showAlert = () => {
    // Verifique se o email é válido antes de fazer o login
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(usuario)) {
      setErroUsuario('Digite um email válido!');
      setUsuario('');
      setSenha('');       
      return; // Saia da função se o email não for válido
    }

    window.alert('Seu login foi realizado com sucesso!');
    setUsuario('');
    setSenha(''); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>Clinica Expansao da Mente</Text>

      <Image
        style={styles.imagem}
        resizeMode='stretch'
        source={require('./images/Exapansao_da_Mente-logo.png')}
      />

      <Text style={styles.display1}></Text>

      <Text style={styles.display2}></Text>
      <TextInput
        placeholder="Email do usuario"
        style={styles.usuario}
        value={usuario}
        onChangeText={(texto) => setUsuario(texto)}
      />
      <TextInput
        onChangeText={(texto) => {
          setUsuario(texto);
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          if (!emailRegex.test(texto)) {
            setErroUsuario('Digite um email válido');
          } else {
            setErroUsuario('');
          }
        }}
      />
      {erroUsuario ? (
        <Text style={styles.erro}>{erroUsuario}</Text>
      ) : null}

      <Text style={styles.display3}></Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Senha"
        style={styles.senha}
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
      />

      <View style={styles.linkContainer}>
        <TouchableOpacity style={[styles.link, { alignSelf: 'flex-start' }]} onPress={navigateToAlterarSenha}>
          <Text style={{ color: 'blue', textAlign: 'center' }}>Alterar senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.link, { alignSelf: 'flex-start' }]} onPress={navigateToTelaCadastro}>
          <Text style={{ color: 'blue', textAlign: 'center' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoLogin} onPress={showAlert}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
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

  erro: {
    color: 'yellow',
    marginLeft: 15,
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

  link: {
    alignItems: 'center',
    marginTop: 10,
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
