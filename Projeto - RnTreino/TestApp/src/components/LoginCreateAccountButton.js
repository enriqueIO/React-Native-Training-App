import {Text, StyleSheet, TextInput, View, Button, TouchableOpacity} from "react-native";



export default LoginCreateAccountButton= () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.textButton}>
                    Criar minha conta
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
        backgroundColor: '#1E90FF',
        paddingTop: 5,
        paddingBottom: 5,
    },

    textButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17
    }
})
