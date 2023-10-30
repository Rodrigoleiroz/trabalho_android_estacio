import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tela_perfil from './tela_perfil';

import { buscarColaboradoresPorFiltro } from './db';

const vertenteOptions = ["Todos", "TCC", "Psicanálista", "Gestaltista", "Junguiana", "Clínica", "Humanista", "Psicodrama"];
const convenioOptions = ["Todos", "Particular", "Amil", "SulAmérica", "Unimed", "Bradesco Saúde", "Golden Cross", "Assim", "NotreDame Intermédica", "São Francisco", "Green Line", "Omint", "Allianz"];
const estadoOptions = ["Todos", "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

const tela_marcacao = () => {
  const [selectedVertente, setSelectedVertente] = useState('');
  const [selectedConvenio, setSelectedConvenio] = useState('');
  const [selectedEstado, setSelectedEstado] = useState('');
  const navigation = useNavigation();

  const [profissionaisFiltrados, setProfissionaisFiltrados] = useState([]); // Armazene os profissionais filtrados
  const [resultadosBusca, setResultadosBusca] = useState([]);


  const handleGravar = async () => {
    console.log('Entrou na função handleGravar');

    // Verifique se todos os campos estão preenchidos
    if (!selectedVertente || !selectedConvenio || !selectedEstado) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
//--------------------------------------------------------------------------------------------------------------------------
  try {
    const colaboradores = await buscarColaboradoresPorFiltro(
      selectedVertente,
      console.log(selectedVertente),
      selectedConvenio,
      console.log(selectedConvenio),
      selectedEstado,
      console.log(selectedEstado)
    );
    setResultadosBusca(colaboradores); // Atualize os resultados da busca
  } catch (error) {
    console.error('Erro durante a busca de profissionais:', error);
    alert('Erro durante a busca de profissionais. Verifique o console para mais informações.');
  }
  
//--------------------------------------------------------------------------------------------------------------------------

    // Agora você pode usar selectedVertente, selectedConvenio e selectedEstado nos seus processos de busca ou chamadas para a função getProfissionais.
    // Exemplo de chamada para getProfissionais com as variáveis selecionadas:
    // const profissionaisFiltrados = await getProfissionais(selectedVertente, selectedConvenio, selectedEstado);
    // Faça o que for necessário com profissionaisFiltrados.
    
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('tela_perfil')}>
        <Text style={{ color: 'darkblue', textAlign: 'right' }}>Perfil</Text>
      </TouchableOpacity>

      <Text style={styles.display}>Expansão da Mente</Text>

      <Image
        style={styles.imagem}
        resizeMode='stretch'
        source={require('./images/Exapansao_da_Mente-logo.png')}
      />

      <Text style={styles.display1}>Encontre um Profissional</Text>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Vertente</Text>
        <Picker
          selectedValue={selectedVertente}
          onValueChange={(itemValue, itemIndex) => setSelectedVertente(itemValue)}
        >
          {vertenteOptions.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Convênio</Text>
        <Picker
          selectedValue={selectedConvenio}
          onValueChange={(itemValue, itemIndex) => setSelectedConvenio(itemValue)}
        >
          {convenioOptions.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Estado</Text>
        <Picker
          selectedValue={selectedEstado}
          onValueChange={(itemValue, itemIndex) => setSelectedEstado(itemValue)}
        >
          {estadoOptions.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
      </View>      


      <TouchableOpacity style={styles.botaoBuscar} onPress={handleGravar} >
        <Text style= {{COLOR:'white', textAlign:'center'}}>Buscar Profissional</Text>        
      </TouchableOpacity>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Resultado da Busca:</Text>
        {resultadosBusca.map((colaboradores, index) => (
          <Text key={index}>{colaboradores.primeironome} {colaboradores.sobrenome}, {colaboradores.vertente}</Text>
        ))}
      </View>


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
  pickerContainer: {
    marginBottom: 20,
    width: 350,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default tela_marcacao;