import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput, image, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import NewSearchRegisterButton from '../components/NewSearchRegisterButton';

export default function DetailsScreen() {

  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [imagem, setImagem] = useState(null);

  const pickImage = () => {

    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {

      if (response.didCancel) {
        console.log('Usuário cancelou o carregamento da imagem');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.assets[0].uri };
        setImagem(source);
      }

    });

  };

  return (

    <View style={styles.mainContainer}>

      <View style={styles.nameSubContainer}>
        <Text style={styles.labelInputs}>Nome</Text>
        <TextInput
          value={nome}
          onChangeText={setNome}
          style={styles.searchInputs}
        />
      </View>

      <View style={styles.dateSubContainer}>
        <Text style={styles.labelInputs}>Data</Text>
        <TextInput
          value={data}
          onChangeText={setData}
          style={styles.searchInputs}
        />
      </View>

      <View style={styles.imageSubContainer}>
        <Text style={styles.labelInputs}>Imagem</Text>
        <Button title="Carregar imagem" onPress={pickImage} />
        {imagem && <Image source={imagem} style={{ width: 200, height: 200 }} />}
      </View>

      <NewSearchRegisterButton></NewSearchRegisterButton>

    </View>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#251095",
    padding: 20
  },

  labelInputs: {
    color: '#fff',
    fontSize: 20
  },

  searchInputs: {
    height: 40, 
    backgroundColor: '#fff',
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 20
  },

  nameSubContainer: {
    flex: 0.15
  },
  
  dateSubContainer: {
    flex: 0.15
  },

  imageSubContainer: {
    flex: 0.15
  }
});