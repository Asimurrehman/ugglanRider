import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Icon} from 'native-base';
import {SearchBar} from 'react-native-elements';

import {Avatar} from 'react-native-elements';
const App = () => {
  const [state, setState] = useState({
    search: '',
    show: false,
  });
  const updateSearch = text => {
    setState({...state, search: text});
  };

  const card2 = [
    {
      image:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'Christopher',
    },

    {
      image:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'Reese',
    },
    {
      image:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'Jaffrey',
    },
    {
      image:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'Laura',
    },
    {
      image:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'Christopher',
    },
    {
      image:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'Christopher',
    },
    {
      image:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'Christopher',
    },
    {
      image:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'Christopher',
    },
    {
      image:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'Christopher',
    },
  ];

  const card = [
    {
      image: require('../../assets/images/man1.png'),
      text1: 'Asim khan',
      text2: 'Hey how Its going?',
      time: '04:04PM',
      count: '3',
    },
    {
      image: require('../../assets/images/man1.png'),
      text1: 'Sue Caldwell',
      text2: 'What kind of work do u like?',
      time: '04:04PM',
      count: '2',
    },
    {
      image: require('../../assets/images/man1.png'),
      text1: 'Ada Reyes',
      text2: 'Sounds good to me!',
      time: '04:04PM',
      count: '5',
    },
    {
      image: require('../../assets/images/man1.png'),
      text1: 'Herman Pop',
      text2: 'Hey how Its going?',
      time: '04:04PM',
      count: '6',
    },
    {
      image: require('../../assets/images/man1.png'),
      text1: 'Herman Pop',
      text2: 'Hey how Its going?',
      time: '04:04PM',
      count: '10',
    },
    {
      image: require('../../assets/images/man1.png'),
      text1: 'Herman Pop',
      text2: 'Hey how Its going?',
      time: '04:04PM',
      count: '3',
    },
    {
      image: require('../../assets/images/man1.png'),
      text1: 'Herman Pop',
      text2: 'Hey how Its going?',
      time: '04:04PM',
      count: '3',
    },
    {
      image: require('../../assets/images/man1.png'),
      text1: 'Herman Pop',
      text2: 'Hey how Its going?',
      time: '04:04PM',
      count: '3',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: 25,
        }}>
        <StatusBar
          translucent
          backgroundColor="white"
          barStyle="dark-content"
        />
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 230,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
          }}>
          <TouchableOpacity
            onPress={() => setState({...state, show: false})}
            activeOpacity={1}
            style={{
              width: '90%',
              height: 50,
              alignSelf: 'center',
              flexDirection: 'row',
              // backgroundColor: 'red',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity>
              {/* <AntDesign
                name={'arrowleft'}
                style={{
                  fontSize: 25,
                  color:'red'
                }}
              /> */}

              <Icon
                name="arrowleft"
                type="AntDesign"
                style={{
                  fontSize: 25,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
              name="plus"
              type="AntDesign"
              style={{
                fontSize: 25,
              }}
            />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* =========Search Bar view ====== */}

          {state.show ? (
            <View style={{width: '85%', alignSelf: 'center', marginTop: 10}}>
              <SearchBar
                placeholder="Search Chats"
                placeholderTextColor="black"
                onChangeText={text => updateSearch(text)}
                value={state.search}
                containerStyle={{
                  height: 50,
                  // width:60,
                  borderRadius: 10,
                  borderWidth: 0,
                  backgroundColor: 'white',
                  // backgroundColor:'pink',
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,

                  elevation: 2,
                }}
                inputContainerStyle={{
                  backgroundColor: 'white',
                  height: 40,
                  borderRadius: 10,
                }}
                inputStyle={{fontSize: 12}}
                //   searchIcon={{size: 28, color: 'grey'}}
              />
            </View>
          ) : (
            <View
              style={{
                width: '85%',
                height: 60,
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // backgroundColor:'red'
              }}>
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                Messages
              </Text>
              <TouchableOpacity
                onPress={() => setState({...state, show: !state.show})}>
                <Icon
                name="search1"
                type="AntDesign"
                style={{
                  fontSize: 30,
                }}
              />
              </TouchableOpacity>
            </View>
          )}

          <View
            style={{
              width: '100%',
              height: 100,

              flexDirection: 'row',
              marginLeft: 25,

              alignItems: 'flex-end',
              // backgroundColor: 'red',
            }}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              {card2.map((item, index) => {
                return (
                    <View 
                    key={index}
                      style={{
                        marginRight: 15,
                      }}>
                      <Avatar
                        rounded
                        //   icon={{name: 'user', type: 'font-awesome'}}
                        size={60}
                        // style={{height: 100, width: 100}}
                        source={{
                          uri:
                            // 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
                            item.image,
                          // require('../../../assets/images/ds.png')
                        }}>
                        <Avatar.Accessory
                          //   iconProps={{name:'primitive-dot',type:'octicons'}}
                          iconStyle={{fontSize: 0}}
                          size={10}
                          style={{
                            right: 7,
                            //   bottom: ,
                            backgroundColor: '#90d300',
                          }}
                        />
                      </Avatar>

                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 20,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                );
              })}
            </ScrollView>
          </View>
        </View>

        {card.map((item, i) => {
          return (
            <View
            key={i}
              style={{
                width: '100%',
                height: 80,
                //   alignSelf:'center',
                flexDirection: 'row',
                // backgroundColor: 'pink',
              }}>
              <View
                style={{
                  width: '25%',
                  height: 100,
                  // borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // backgroundColor: 'blue',
                  // borderBottomWidth:1
                }}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    overflow: 'hidden',
                    // backgroundColor: 'green',
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: '100%',
                      height: '100%',
                      // borderRadius:100,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  width: '75%',
                  height: 90,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#bfbfbf',
                  // backgroundColor:'blue'
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      // lineHeight: 30,
                      color: 'black',
                      marginBottom: 5,
                    }}>
                    {item.text1}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      // lineHeight: 20,
                      color: '#333745',
                    }}>
                    {item.text2}
                  </Text>
                </View>
                <View
                  style={{
                    // width:100,
                    // height:100,
                    marginRight: 10,
                    marginTop: i == '0' || i == '1' ? 20 : 0,
                    padding: 2,
                    marginBottom: i == '0' || i == '1' ? 10 : 18,
                    //   backgroundColor:'green'
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#7c8293',
                    }}>
                    {item.time}
                  </Text>

                  {i == '0' || i == '1' ? (
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        borderRadius: 15,
                        alignSelf: 'flex-end',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 15,
                        backgroundColor: '#9258a7',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'white',
                        }}>
                        {item.count}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
