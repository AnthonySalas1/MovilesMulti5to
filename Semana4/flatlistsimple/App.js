import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import OurFlatList from './Components/ourFlatList/OurFlatList'
import ConexionFetch from './Components/conexionFetch/ConexionFetch'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ConexionFetch"
            component={ConexionFetch}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;