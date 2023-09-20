import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import Class from './src/components/Class';
import InicioSesion from './src/components/InicioSesion';
import Registro from './src/components/Registro';

const Stack = createStackNavigator();

const App = () => {
  const user = {user};
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InicioSesion">
        <Stack.Screen name="InicioSesion" component={InicioSesion} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} initialParams={{user}} />
        <Stack.Screen name="Class" component={Class} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
