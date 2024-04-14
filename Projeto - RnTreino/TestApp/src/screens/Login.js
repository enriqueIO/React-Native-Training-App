import { StyleSheet, Text, View, Button, Image} from 'react-native';
import React from 'react';
import LoginSection from '../components/LoginSection';
import LoginButton from '../components/LoginButton';
import LoginCreateAccountButton from '../components/LoginCreateAccountButton';
import LoginForgotPasswordButton from '../components/LoginForgotPasswordButton';

export default Login = ({ navigation }) => {

  const print = () => {
    console.log("Teste");
  }

  return (
    <View style={styles.mainContainer}>

      <View style={styles.header}>

        <Text style={styles.title}>Satisfying.you</Text>
        <Image source={require('../assets/happy-face.png')} style={styles.titleLogo}></Image>

      </View>

      <View style={styles.button_section}>
        <LoginSection></LoginSection>
        <LoginButton></LoginButton>
      </View>

      <View style={styles.footer}>
        <LoginCreateAccountButton></LoginCreateAccountButton>
        <LoginForgotPasswordButton></LoginForgotPasswordButton>
      </View>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Nova Pesquisa')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#251095"
  },

  header: {
    flex: 0.2,
    backgroundColor: "#251095",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 90,
    paddingBottom: 50,
    padding: 30
  },

  button_section: {
    flex: 0.4
  },

  footer: {
    flex: 0.4
  },

  title: {
    fontSize: 40,
    textAlign:'center',
    color:'#fff'
  },

  titleLogo: {
    width: 50,
    height: 50,
    marginLeft: 10
  }
});
