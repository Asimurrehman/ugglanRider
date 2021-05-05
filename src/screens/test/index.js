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
  const email = props?.route?.params?.email;
 console.log('email',email)
 const socketId = props?.route?.params?.socketId;
 console.log('socket',socketId)

  const [state, setState] = useState({
    email: '',
    popupText: '',
  });
const _CheckValidation=()=>{
  const API_URL = 'http://192.168.18.128:4500/api/contacts/login';

  axios.post(API_URL,{email:email,socketId:socketId})
  .then(response=>{
    console.log('res',response)
  })
  .catch(err=>{
    console.log('error',err)
  })



  props.navigation.navigate('home')

}

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center'
      }}>
     {/* <View style={styles.phoneView}>
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
            </View> */}
            <View style={{width:'80%',alignSelf:'center',marginTop:25}}>
            <Button
                title="now start"
                // loading={props.isLoading}
                onPress={() => _CheckValidation()}
                // buttonStyle={{backgroundColor: 'transparent'}}
              />
              </View>
    </SafeAreaView>
  );
};

export default App;
