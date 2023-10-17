import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import altera_senha from './altera_senha';

export default function nova_senha() {
    const [novasenha, setNovaSenha] = useState('');
    const [confirmanovasenha, setConfirmaNovaSenha] = useState('');
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const showAlert = async () => {
    if (novasenha === confirmanovasenha) {
        // const dbConnection = await getDbConnection(); // Obtenha a conexão com o banco de dados

        // Aqui você pode executar uma consulta SQL para atualizar a senha no banco de dados
        // Suponha que você tenha uma função `updateSenha` para isso em seu módulo db
        // Certifique-se de incluir essa função em seu módulo db e que ela execute a atualização no banco de dados
        // await db.updateSenha(dbConnection, novasenha); 

        window.alert('Sua senha foi redefinida com sucesso!');
        setNovaSenha('');
        setConfirmaNovaSenha('');
        navigation.navigate('tela_login');
    } else {
        window.alert('As senhas não coincidem. Tente novamente.');
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
        secureTextEntry={true}
        placeholder= "Digite uma nova senha"
        style={styles.novasenha}
        value={novasenha}
        onChangeText={(texto) => setNovaSenha(texto)}
        keyboardType="numeric"
      />

      <Text style={styles.display3}></Text>
      <TextInput
        secureTextEntry={true}
        placeholder= "Confirme sua nova senha"
        style={styles.confirmanovasenha}
        value={confirmanovasenha}
        onChangeText={(texto) => setConfirmaNovaSenha(texto)}
      />

      
      <TouchableOpacity style={styles.botaoConfirmar} onPress={showAlert}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Confirmar nova senha</Text>
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

  novasenha: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 10,
    padding: 15,
  },

  confirmanovasenha: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 45,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
  },
  
  botaoConfirmar: {
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
