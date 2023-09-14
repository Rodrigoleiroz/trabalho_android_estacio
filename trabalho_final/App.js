import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tela_login from './tela_login';
import tela_cadastro from './tela_cadastro';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tela_login">
        <Stack.Screen name="tela_login" component={tela_login} />
        <Stack.Screen name="tela_cadastro" component={tela_cadastro} />
        {/* Outras telas podem ser adicionadas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
