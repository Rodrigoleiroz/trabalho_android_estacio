import { StatusBar } from 'expo-status-bar';
import { createTables, initDatabase, getDbConnection, buscarColaboradoresPorFiltro  } from './db';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import tela_marcacao from './tela_marcacao';

const tela_todos_colab = () => {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    buscarColaboradores();
  }, []);

  const buscarColaboradores = async () => {
    try {
      await initDatabase();
      const db = await getDbConnection();
      const colaboradores = await buscarColaboradoresPorFiltro();
      setColaboradores(colaboradores);
    } catch (error) {
      console.error('Erro ao buscar colaboradores:', error);
    }
  };

  const listItemView = (colaborador) => {
    return (
      <View
        key={colaborador.crp}
        style={styles.itemContainer}>
        <Text style={styles.headerText}>CRP</Text>
        <Text style={styles.bottomText}>{colaborador.crp}</Text>

        <Text style={styles.headerText}>Nome</Text>
        <Text style={styles.bottomText}>{`${colaborador.primeironome} ${colaborador.sobrenome}`}</Text>

        <Text style={styles.headerText}>Vertente</Text>
        <Text style={styles.bottomText}>{colaborador.vertente}</Text>

        <Text style={styles.headerText}>Convênio</Text>
        <Text style={styles.bottomText}>{colaborador.convenio}</Text>

        <Text style={styles.headerText}>Estado</Text>
        <Text style={styles.bottomText}>{colaborador.estado}</Text>

        <Text style={styles.headerText}>Email</Text>
        <Text style={styles.bottomText}>{colaborador.email}</Text>

        <Text style={styles.headerText}>Celular</Text>
        <Text style={styles.bottomText}>{colaborador.celular}</Text>
      </View>
      
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ marginTop: 30 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={colaboradores}
            keyExtractor={(colaborador) => colaborador.crp.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
      </View>
      <View style={styles.container}>
            <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('tela_marcacao')}>
            <Text style={{ color: 'darkblue', textAlign: 'right' }}>Voltar</Text>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
    borderRadius: 10,
  },
  headerText: {
    color: '#111',
    fontSize: 12,
    fontWeight: '700',
  },
  bottomText: {
    color: '#111',
    fontSize: 18,
  },
});

export default tela_todos_colab;
