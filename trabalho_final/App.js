import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tela_login from './tela_login';
import tela_cadastro from './tela_cadastro';
import altera_senha from './altera_senha';
import tela_login_prof from './tela_login_prof';
import nova_senha from './nova_senha';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tela_login">
        <Stack.Screen name="tela_login" component={tela_login} />
        <Stack.Screen name="tela_cadastro" component={tela_cadastro} />
        <Stack.Screen name="altera_senha" component={altera_senha} />
        <Stack.Screen name="tela_login_prof" component={tela_login_prof} />
        <Stack.Screen name="nova_senha" component={nova_senha} />
        {/* Outras telas podem ser adicionadas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
