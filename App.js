import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import PantallaPrincipal from 'holamundo/src/pantallas/principal/PantallaPrincipal'
import Inicio from 'holamundo/src/pantallas/principal/Inicio'
import EditarTarea from 'holamundo/src/pantallas/editarTarea/editarTarea'

const RootStack = createStackNavigator(
  {
    Main: Inicio,
    Editar: EditarTarea,
    Pantalla: PantallaPrincipal,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions:{
      headerStyle:{
          backgroundColor: '#0066ff'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
          fontWeight:'bold'
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

/*const App = () => {
  return (
    <Inicio/>
  )
}

export default App;*/