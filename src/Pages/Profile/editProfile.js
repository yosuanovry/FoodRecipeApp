import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  Pressable,
  Button,
  Modal,
  Alert,
  PermissionsAndroid,
  ActivityIndicator
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {editUser} from '../../Storages/Actions/Profile';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';

const EditProfile = () => {
  const [fullname, setFullname] = useState('');
  const [response, setResponse] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const isAuth = useSelector(state => state.Auth_Login);
  const update_user = useSelector((state) => state.edit_user)
  const photo = isAuth.data.photo;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const postEditProfile = () => {
    let formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('photo', {
      uri: response.assets[0].uri,
      name: response.assets[0].fileName,
      type: response.assets[0].type,
    });

    dispatch(editUser(formData, isAuth.data.token, navigation));
    console.log(formData);
  };



  const editButtonAlert = () =>
    Alert.alert('Edit Alert', 'Are you sure want to update? You will automatically logout after confirming', [
      {
        text: 'No',
        onPress: () => console.log('Edit canceled'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => postEditProfile()
      },
    ]);


  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App Needs Camera Access',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('access camera success');
        cameraLaunch();
      } else {
        console.log('access camera failed');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('response = ', res);
      if (res.didCancel) {
        console.log('user cancel image picker');
      } else if (res.error) {
        console.log('image picker error', res.error);
      } else {
        console.log(res);
        setResponse(res);
      }
    });
  };

  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, res => {
      console.log('response = ', res);
      if (res.didCancel) {
        console.log('user cancel gallery picker');
      } else if (res.error) {
        console.log('gallery picker error', res.error);
      } else {
        console.log(res);
        setResponse(res);
      }
    });
  };

  const ProfilePhoto = () => {
    if (response === null && !photo) {
      return (
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Image
            style={{height: 120, width: 120, borderRadius: 60}}
            source={{
              uri: 'https://img.freepik.com/free-icon/user_318-790139.jpg',
            }}
          />
        </View>
      );
    } else if (photo && !response) {
      return (
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Image
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
              backgroundColor: 'white',
            }}
            source={{uri: photo}}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Image
            style={{height: 120, width: 120, borderRadius: 60}}
            source={{uri: response?.assets[0].uri}}
          />
        </View>
      );
    }
  };

  const color2 = '#8C8C8C';
  const size2 = 80;

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View
          style={{
            backgroundColor: '#EFC81A',
            height: 350,
            borderBottomEndRadius: 200,
            borderBottomStartRadius: 200,
            borderWidth: 5,
          }}>
          <Image
            source={require('../../Assets/Auth/bg.png')}
            style={styles.image}
          />
          <Text style={styles.welcomeText}>Edit Profile</Text>
          <Text style={styles.loginText}>Please fill the required data</Text>
        </View>

        <View style={{marginTop: -100}}>
          <ProfilePhoto />

          <View style={{marginTop: 20}}>
            <View style={styles.centeredView}>
              <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                statusBarTranslucent={true}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'column'}}>
                        <Pressable
                          style={{
                            borderColor: 'black',
                            borderWidth: 2,
                            padding: 20,
                            backgroundColor: 'white',
                          }}
                          onPress={() => requestPermission()}>
                          <Ionicons
                            style={{alignSelf: 'center'}}
                            name="ios-camera-outline"
                            color={color2}
                            size={size2}
                          />
                          <Text
                            style={[
                              styles.button,
                              styles.buttonOpen,
                              styles.textStyle,
                            ]}>
                            Camera
                          </Text>
                        </Pressable>
                      </View>
                      <View style={{flexDirection: 'column'}}>
                        <Pressable
                          style={{
                            marginStart: 30,
                            borderColor: 'black',
                            borderWidth: 2,
                            padding: 20,
                            backgroundColor: 'white',
                          }}
                          onPress={() => galleryLaunch()}>
                          <Ionicons
                            style={{alignSelf: 'center'}}
                            name="images-outline"
                            color={color2}
                            size={size2}
                          />
                          <Text
                            style={[
                              styles.button,
                              styles.buttonOpen,
                              styles.textStyle,
                            ]}>
                            Gallery
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                    <View style={{marginTop: 20, width: 190}}>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Close</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Choose Photo</Text>
              </Pressable>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginTop: 30}}>
            <Text
              style={{
                color: 'black',
                fontWeight: '800',
                textAlign: 'left',
                marginHorizontal: 44,
                marginVertical: -14,
              }}>
              Name
            </Text>
            <TextInput
              require
              value={fullname}
              onChangeText={e => setFullname(e)}
              style={styles.textInput}
              placeholder={isAuth.data.fullname}
            />
          </View>

          <View style={{marginTop: 30, marginHorizontal: 40}}>
            <Button
              title="Edit"
              color="#EFC81A"
              onPress={() => editButtonAlert()}
            />
            {update_user.isLoading && <ActivityIndicator style={{marginTop: 10}} size="large" color="black" />}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: 170,
    top: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  welcomeText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
    marginTop: 15,
  },

  loginText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
  },

  textInput: {
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 40,
    padding: 17,
    marginTop: 20,
    borderRadius: 10,
  },

  registration: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#EFC81A',
    borderWidth: 10,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#EFC81A',
  },
  buttonClose: {
    backgroundColor: 'tomato',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
