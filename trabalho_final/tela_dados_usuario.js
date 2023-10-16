import React from 'react';
import { View, Text, Button } from 'react-native';

const TelaDadosUsuario = ({ usuario }) => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Dados do Usuário:</Text>
      <Text>{JSON.stringify(usuario, null, 2)}</Text>
    </View>
  );
}

export default TelaDadosUsuario;
