import {Text, StyleSheet, TextInput, View, Button, TouchableOpacity} from "react-native";



export default LoginForgotPasswordButton = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.textButton}>
                    Esqueci minha senha
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#251095",
        paddingTop: 10,
        padding: 20,
        paddingRight: 70,
        paddingLeft: 70
    },
    
    loginButton: {
        backgroundColor: 'gray',
        paddingTop: 5,
        paddingBottom: 5,
    },

    textButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17
    }
})
