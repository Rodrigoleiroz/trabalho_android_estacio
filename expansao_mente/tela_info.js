import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tela_login from './tela_login';


const tela_info = () => {

  const navigation = useNavigation(); 


  

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('tela_login')}>
        <Text style={{ color: 'darkblue', textAlign: 'left' }}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.display}>Expansão da Mente</Text>      

      <Image
        style={styles.imagem}
        resizeMode='stretch'
        source={require('./images/Exapansao_da_Mente-logo.png')}
      />

    <Text style={styles.display1}>Sobre o App</Text>

    <Text style={styles.textoAplicativo}>
        Neste trabalho, criaremos uma aplicação em <Text style={styles.destaque}>React Native</Text> para a clínica "<Text style={styles.destaque}>Expansão da Mente</Text>", que oferece serviços em saúde mental na modalidade online.
        Com o nosso inovador aplicativo de agendamento de serviços de psicologia, simplificamos o processo de marcação de consultas de forma significativa, tornando a vida dos nossos usuários mais fácil e mais conveniente do que nunca. Agora, você não precisa mais enfrentar o incômodo de fazer ligações telefônicas demoradas para marcar um horário com um profissional de saúde mental.
        Com apenas alguns toques na tela do seu dispositivo móvel, você pode acessar a agenda dos profissionais disponíveis e escolher o horário que melhor se adapta à sua programação. Não importa onde você esteja, nossa plataforma oferece a flexibilidade de agendar consultas a qualquer hora, tornando o processo rápido e eficiente.
        Além disso, o nosso aplicativo fornece informações detalhadas sobre os profissionais de psicologia, permitindo que você faça uma escolha informada com base em suas necessidades específicas. Você pode verificar as especialidades, as avaliações de outros pacientes e as disponibilidades dos profissionais, tudo em um único lugar.
        Dê um passo à frente no cuidado com a sua saúde mental e descubra como é fácil e conveniente agendar consultas com o nosso aplicativo. Oferecemos a você a liberdade de cuidar da sua saúde mental sem o incômodo das chamadas telefônicas e com a praticidade de acessar a agenda dos profissionais. Sua jornada para o bem-estar começa aqui, com agendamentos simples e acessíveis.
    </Text>

    

    

      

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
  imagem: {
    width: 250,
    height: 160,
    marginLeft: 60,
    marginTop: 10,
    marginBottom: 10,
  },
  textoAplicativo: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
  destaque: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'violet', // Escolha a cor que desejar
  },
  scrollView: {
    flex: 1,
  },
  text: {},
});

export default tela_info;
