import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/modules/Login';
import Home from './src/modules/Home';


const MainStack = createNativeStackNavigator()

const App = () => ( 

    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name = "Login" component={Login} />
        <MainStack.Screen name = "Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>

)
 
export default App;    