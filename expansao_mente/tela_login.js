import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as db from './db';
import tela_marcacao from './tela_marcacao';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const tela_login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erroUsuario, setErroUsuario] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const navigation = useNavigation();

  const handleLogin = async () => {
    const dbConnection = await db.getDbConnection();
    const usuarios = await db.getUsuario(dbConnection);

    const usuarioEncontrado = usuarios.find((user) => user.email === usuario && user.senha === senha);

    if (usuarioEncontrado) {
      console.log('Usuário logado:', usuarioEncontrado);
      navigation.navigate('tela_marcacao');
      setUsuario('');
      setSenha('');
    } else {
      alert('Usuário e/ou Senha inválidos');
    }
  };

  const navigateToAlterarSenha = () => {
    // Navegue para a tela 'altera_senha'
    navigation.navigate('altera_senha');
    setUsuario('');
    setSenha('');
  };

  const navigateToTelaCadastro = () => {
    // Navegue para a tela 'tela_cadastro'
    navigation.navigate('tela_cadastro');
    setUsuario('');
    setSenha('');
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
        placeholder="Email do usuário"
        style={styles.usuario}
        value={usuario}
        onChangeText={(texto) => setUsuario(texto)}
      />

      {erroUsuario ? (
        <Text style={styles.erro}>{erroUsuario}</Text>
      ) : null}

      <View style={styles.inputArea}>
        <TextInput          
          placeholder= "Senha"
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

      <View style={styles.linkContainer}>
        <TouchableOpacity style={[styles.link, { alignSelf: 'flex-start' }]} onPress={navigateToAlterarSenha}>
          <Text style={{ color: 'blue', textAlign: 'center' }}>Alterar senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.link, { alignSelf: 'flex-start' }]} onPress={navigateToTelaCadastro}>
          <Text style={{ color: 'blue', textAlign: 'center' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoLogin} onPress={handleLogin}>
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
    marginLeft: 55,
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
    height: 45,
    marginLeft: 10,
    marginTop: 10,
    padding: 15,
  },

  erro: {
    color: 'yellow',
    marginLeft: 15,
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

  icon: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  link: {
    alignItems: 'center',
    marginTop: 10,
  },

  botaoLogin: {
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
    marginTop: 10,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  text: {},
});

export default tela_login;
