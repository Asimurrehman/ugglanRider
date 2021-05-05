import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import login from '../screens/login'
import home from '../screens/home'
import test from '../screens/test'

const Stack = createStackNavigator();


function AuthStack(){
    return(
      <Stack.Navigator>
           <Stack.Screen
        name="login"
        component={login}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name="home"
        component={home}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="test"
        component={test}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
    )
}

export default function App() {
    return (
      <NavigationContainer>
            <Stack.Navigator
        initialRouteName={'Auth'}
      >
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{headerShown: false}}
        />
    
      </Stack.Navigator>
          
          </NavigationContainer>
    );
  }