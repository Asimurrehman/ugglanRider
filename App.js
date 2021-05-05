import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';

import Stack from './src/navigations/stacknavigation';

import Chats from './src/screens/chatui';
import Login from './src/screens/login'
import CardScreenForm from './src/screens/CardFormScreen'
import Root from './src/Root'
import Home from './src/screens/home'

const App = props => {
  return (
    // <SafeAreaView style={{flex: 1}}>
    //   {/* <Root /> */}
    //   {/* <Home/> */}
    //   <Login/>

    // </SafeAreaView>
    <Stack navigation={props.navigation} />

  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
