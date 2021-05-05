import React, {useEffect, useState} from 'react';
// import {Button} from 'react-native-elements';
import {socket,socketId} from '../../service/socket'
import axios from 'axios';


import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const App = (props) => {
  const [state, setState] = useState({
    email: '',
    popupText: '',
    socketId:''
  });
const _CheckValidation=()=>{
  socket.on('socketId',id=>{
    console.log("this is running")
    console.log(id,"received")
    // setState({...state,socketId:id})
    props.navigation.navigate('test',{socketId:id,email:state.email})

  })

 




}

  return (
    
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center'
      }}>
     <View style={styles.phoneView}>
              <TextInput
                placeholder="email or phone"
                placeholderTextColor="#696969"
                autoCapitalize="none"
                // keyboardType="numeric"
                style={styles.phoneTextInput}
                onChangeText={(text) =>
                  setState({
                    ...state,
                    email: text,
                  })
                }
              />
              <Fontisto
                name="phone"
                // size={14}
                color="#C0C0C0"
                style={styles.phoneIcon}
              />
            </View>
            <View style={{width:'80%',alignSelf:'center',marginTop:25}}>
            <Button
                title="Login"
                // loading={props.isLoading}
                onPress={() => _CheckValidation()}
                // buttonStyle={{backgroundColor: 'transparent'}}
              />
              </View>
    </SafeAreaView>
  );
};

export default App;
