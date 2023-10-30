import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getDbConnection, getUsuario, updateUsuario } from './db';
import tela_marcacao from './tela_marcacao.js'


const tela_perfil = () => {
  const [userData, setUserData] = useState({
    cpf: '',
    primeironome: '',
    sobrenome: '',
    email: '',
    celular: '',
    senha: '',
  });
  const [edicoesFeitas, setEdicoesFeitas] = useState(false);
  const navigation = useNavigation();
  const [hidePass, setHidePass] = useState(true);

  useEffect(() => {
    carregarDadosDoUsuario();
  }, []);

  const carregarDadosDoUsuario = async () => {
    try {
      const db = await getDbConnection();
      const usuarios = await getUsuario(db);
      if (usuarios.length > 0) {
        const usuario = usuarios[0]; // Assumindo que haja apenas um usuário
        setUserData(usuario);
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
      alert('Erro ao carregar dados do usuário. Verifique o console para mais informações.');
    }
  };

  const onCampoAlterado = (campo, valor) => {
    setUserData({
      ...userData,
      [campo]: valor,
    });
    setEdicoesFeitas(true);
  };

  const handleGravar = async () => {
    if (!edicoesFeitas) {
      alert('Nenhuma edição foi feita.');
      return;
    }

    try {
      const db = await getDbConnection();
      
      // Implemente o código para salvar as edições no banco de dados
      const { cpf, primeironome, sobrenome, email, celular, senha } = userData;
      const result = await updateUsuario(db, cpf, primeironome, sobrenome, email, celular, senha);
  
      if (result.rowsAffected > 0) {
          // As edições foram salvas com sucesso
          navigation.navigate('tela_marcacao');
      } else {
          alert('Nenhuma alteração foi feita.');
      }
  } catch (error) {
      console.error('Erro ao salvar edições:', error);
      alert('Erro ao salvar edições. Verifique o console para mais informações.');
  }
  
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('tela_marcacao')}>
        <Text style={{ color: 'darkblue', textAlign: 'left' }}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.display}>Expansão da Mente</Text>

      <Image
        style={styles.imagem}
        resizeMode='stretch'
        source={require('./images/Exapansao_da_Mente-logo.png')}
      />

      <Text style={styles.display1}>Seu Perfil</Text>

      <Text style={styles.display2}></Text>
      <TextInput
        placeholder="Cpf"
        style={styles.cpf}
        value={userData.cpf}
        onChangeText={(texto) => onCampoAlterado('cpf', texto)}
      />

      <Text style={styles.display3}></Text>
      <TextInput
        placeholder="Nome"
        style={styles.primeironome}
        value={userData.primeironome}
        onChangeText={(texto) => onCampoAlterado('primeironome', texto)}
      />

      <Text style={styles.display4}></Text>
      <TextInput
        placeholder="Sobrenome"
        style={styles.sobrenome}
        value={userData.sobrenome}
        onChangeText={(texto) => onCampoAlterado('sobrenome', texto)}
      />

      <Text style={styles.display5}></Text>
      <TextInput
        placeholder="Email"
        style={styles.email}
        value={userData.email}
        onChangeText={(texto) => onCampoAlterado('email', texto)}
      />

      <Text style={styles.display6}></Text>
      <TextInput
        placeholder="Celular com DDD"
        style={styles.celular}
        value={userData.celular}
        onChangeText={(texto) => onCampoAlterado('celular', texto)}
      />

      <View style={styles.inputArea}>
        <TextInput
          placeholder="Digite uma senha"
          style={styles.senha}
          value={userData.senha}
          onChangeText={(texto) => onCampoAlterado('senha', texto)}
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

      <TouchableOpacity
        style={styles.botaoCadastro}
        onPress={handleGravar}
        disabled={!edicoesFeitas}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Salvar Alterações</Text>
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

export default tela_perfil;
