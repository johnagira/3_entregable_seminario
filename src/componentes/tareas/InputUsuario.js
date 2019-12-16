import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const size = 200

const styles = StyleSheet.create({
    hola:{
        paddingTop: 10,
    },
    container: {
        height: 40,
        width: size,
        borderRadius: 20 / 2,
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold"
    }
})

const InputUsuario = (props) => {
    const {estilo, estiloTexto, texto, ...otherProps} = props
    return(
        <View style={[styles.hola]}>
            <TextInput  name="usuario" style={[styles.container, estilo]} {...props} placeholder="Ingrese su usuario" />
            <TextInput  name="contrasena" style={[styles.container, estilo]} {...props} placeholder="Ingrese su Contraseña" />
        </View>
    )
}

export default InputUsuario;