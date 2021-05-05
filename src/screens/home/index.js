import Geolocation from '@react-native-community/geolocation';
import {socket,socketId} from '../../service/socket'

import {Icon} from 'native-base';
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Animated,
  PermissionsAndroid,
  SafeAreaView,
  Image,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';
import CountDown from 'react-native-countdown-component';

export default function App(props) {
  //  state here
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [buttonClick, setButtonClicked] = useState(false);
  const [timer, setTimer] = useState(60);

  const [state, setState] = useState({
    position: {},
    isVisible: false,
    done: false,
  });

  useEffect(() => {
    socket.on('hireRequest',(data)=>{
console.log('data',data)
    })
    console.log('maps=============');
    
    GettingLocationPermission();
  }, []);
  const GettingLocationPermission = async () => {
    if (Platform.OS == 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (!granted) {
        return;
      } else {
        Geolocation.setRNConfiguration({skipPermissionRequests: false});

        Geolocation.watchPosition(
          position => {
            console.log('CHECK POSITION', position);
            setState({...state, position: position.coords});
          },
          err => {
            console.log('MAP ERROR', err);
          },
          {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
        );
      }
    } else {
      Geolocation.setRNConfiguration({skipPermissionRequests: false});
      Geolocation.watchPosition(
        position => {
          console.log('CHECK POSITION', position);
          setState({...state, position: position.coords});
        },
        err => {
          console.log('MAP ERROR', err);
        },
        {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
      );
    }
    // console.log('LOCATION HERE', location);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{width: '100%', height: '100%'}}>
        <MapView
          // onUserLocationChange={(e)=>{
          //   setCoordinates(e)
          //   // console.log('chage==========',e.nativeEvent.coordinate)
          // }}

          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          showsUserLocation={true}
          mapType="standard"
          coordinate={{
            latitude: state.position.latitude,
            longitude: state.position.longitude,
          }}
          initialRegion={{
            latitude: state.position.latitude
              ? state.position.latitude
              : 24.8331786,
            longitude: state.position.longitude
              ? state.position.longitude
              : 67.0673767,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}

          // onRegionChange={(e)=>{
          //   console.log('changed j===================',e)
          // }}
        >
          {/* {this.state.markers.map((marker, index) => ( */}
          {Object.keys(state.position).length > 0 && (
            <Marker
              draggable
              coordinate={{
                ...state.position,
                // latitude:lat,
                // longitude:long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              title={'Your Location'}
              description={
                'You are still there you have to must change your location or permanantly banned from this app'
              }

              // onDragEnd={(e)=>{
              //   console.log('change',e.nativeEvent.coordinate)

              // }}
            >
              <Image
                source={require('../../assets/images/man1.png')}
                style={{width: 60, height: 60, borderRadius: 60}}
              />
            </Marker>
          )}
          {/* ))} */}
        </MapView>

        <View style={{width: '100%', height: 200, marginTop: 20}}>
          <Text style={{textAlign: 'center', fontSize: 20}}>Asim Khan</Text>

          <View>
            <CountDown
              until={timer}
              size={30}
              //   onFinish={() => setButtonClicked(!buttonClick)}
              onFinish={() => console.log('done')}
              digitStyle={{backgroundColor: '#FFF'}}
              digitTxtStyle={{color: 'gray'}}
              timeToShow={['S']}
              // timeLabels={{ s: 'SS'}}
              timeLabelStyle={{color: 'white', fontWeight: 'bold'}}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              //   marginTop: 25,
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: 100,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: 100,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
