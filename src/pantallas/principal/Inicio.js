import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, Button, View, ActivityIndicator, Alert, Linking} from "react-native";
import FAB from 'holamundo/src/componentes/tareas/FAB'
import InputUsuario from 'holamundo/src/componentes/tareas/InputUsuario'

const styles = StyleSheet.create({
    contenedor:{
        paddingTop: 300,
        flex: 1,
        backgroundColor: '#4dffff',
        alignItems: "center",
        //marginTop: 30
        //justifyContent: 'center'
    },
    titulo:{
       fontWeight: 'bold',
       fontSize: 20 
    },
    texto:{
      flex: 1,
      borderBottomWidth: 1,
      padding: 5
    }
})
export default class Inicio extends Component {
  
  static navigationOptions = {
    title: "Agenda"
  }

  render() {
    return (
      <SafeAreaView style={styles.contenedor}>
          <InputUsuario
            texto="Usuario"
            estiloTexto={{color:'#fff'}}
          />

          <FAB
            texto="INICIAR SESION"
            textStyle={{color:'#fff'}}
            fabStyle={{width:200, right:80}}
            onPress={() => this.props.navigation.navigate("Pantalla")}
          />
      </SafeAreaView>
    );
  }
}
