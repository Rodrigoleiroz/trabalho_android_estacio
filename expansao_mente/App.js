import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tela_login from './tela_login';
import tela_cadastro from './tela_cadastro';
import altera_senha from './altera_senha';
import nova_senha from './nova_senha';
import { initDatabase } from './db';
import tela_marcacao from './tela_marcacao';

const Stack = createStackNavigator();

const App = () => {

useEffect(() => {
  async function init() {
    const db = await initDatabase(); // Chame a inicialização do banco de dados apenas uma vez
  }
  init();
}, []);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tela_login">
        <Stack.Screen name="tela_login" component={tela_login} />
        <Stack.Screen name="tela_cadastro" component={tela_cadastro} />
        <Stack.Screen name="altera_senha" component={altera_senha} />
        <Stack.Screen name="nova_senha" component={nova_senha} />
        <Stack.Screen name="tela_marcacao" component={tela_marcacao} />
        {/* Outras telas podem ser adicionadas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;