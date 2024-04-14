import {Text, StyleSheet, TextInput, View} from "react-native";
import { useState } from "react";


export default LoginSection = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <View style={styles.container}>
            <Text style={styles.userCredentialsLabels}>E-mail</Text>
            <TextInput placeholder="Exemplo@gmail.com" style={styles.userCredentialsInput}/>

            <Text style={styles.userCredentialsLabels}>Senha</Text>
            <TextInput placeholder="****" style={styles.userCredentialsInput}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#251095",
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 70,
        paddingRight: 70,
        paddingBottom: 20
    },

    userCredentialsInput: {
        backgroundColor: '#fff',
        color: '#0055ff',
        paddingLeft: 6
    },

    userCredentialsLabels: {
        marginTop: 10,
        fontSize: 15,
        color: '#fff'
    }
})
