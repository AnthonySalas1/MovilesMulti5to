import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Peliculas from './screen/Peliculas';
import Informacion from './screen/informacion';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Peliculas"
            component={Peliculas}
          />
          <Stack.Screen
            name="Informacion"
            component={Informacion}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;