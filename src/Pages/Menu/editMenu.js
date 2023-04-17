import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    Button,
    Image,
    Modal,
    Alert,
    Pressable,
    PermissionsAndroid,
    ActivityIndicator
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import {useDispatch, useSelector} from 'react-redux';
  import {useNavigation, useRoute} from '@react-navigation/native';
  import * as ImagePicker from "react-native-image-picker"
  import {ScrollView} from 'react-native-gesture-handler';
  import {Picker} from '@react-native-picker/picker';
  import { GetCategory } from '../../Storages/Actions/Category';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { GetMenuById, editMenu } from '../../Storages/Actions/Menu';

  
  const EditMenu = () => {
    const [response, setResponse] = useState(null);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [category_id, setCategory_ID] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
  
    const isAuth = useSelector(state => state.Auth_Login.data.token);
    const getCategory = useSelector((state) => state.get_category)
    const getMenuById = useSelector((state) => state.get_menuID.data)
    const selectorEditMenu = useSelector((state) => state.edit_menu)


    const route = useRoute()
    const dispatch = useDispatch();
    const navigation = useNavigation();
  
    useEffect(() => {
    dispatch(GetMenuById(route.params.id))
    },[])

    useEffect(() => {
      dispatch(GetCategory());
    }, [GetCategory]);
  
    const postEditRecipe = () => {
      let formData = new FormData();
      formData.append('title', title);
      formData.append('ingredients', ingredients);
      formData.append('category_id', category_id);
      formData.append('photo', {
        uri: response.assets[0].uri,
        name: response.assets[0].fileName,
        type: response.assets[0].type,
      });
  
      dispatch(editMenu(route.params.id,formData, isAuth, navigation));
      console.log(formData)
    };

    const editButtonAlert = () =>
    Alert.alert('Add Alert', 'All done?', [
      {
        text: 'No',
        onPress: () => console.log('Edit canceled'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => postEditRecipe()
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
  
    const color2 = '#8C8C8C';
    const size2 = 80;
  
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
          <View style={{marginTop: 50}}>
            {getMenuById?.map((item,index) => (
            <View key={index}>
            <Text style={styles.headText}>Edit Recipe</Text>
            <TextInput
              require
              name="title"
              value={title}
              onChangeText={e => setTitle(e)}
              style={styles.textInput1}
              placeholder={item.title}
            />
  
            <TextInput
              require
              name="ingredients"
              onChangeText={e => setIngredients(e)}
              value={ingredients}
              multiline={true} 
              numberOfLines={10}
              style={styles.textInput2}
              placeholder={item.ingredients}
            />
            
            {item.photo && !response ? (
              <View style={{height: 200, alignSelf:'center', justifyContent:'center', marginTop:20}}>
              <Image
                style={{height: 200, width: 310, borderRadius:10}}
                source={{uri: item.photo}}
              />
            </View>
            ) : (
              <View style={{height: 200, alignSelf:'center', justifyContent:'center', marginTop:20}}>
                <Image
                  style={{height: 200, width: 310, borderRadius:10}}
                  source={{uri: response?.assets[0].uri}}
                />
              </View>
            )}
            </View>
            ))}
                   
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
              <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column'}}>
              <Pressable
                style={{borderColor:'black', borderWidth: 2, padding:20, backgroundColor:'white'}}
                onPress={() => requestPermission()}>
                  <Ionicons style={{alignSelf:'center'}} name="ios-camera-outline" color={color2} size={size2}/>
                <Text style={[styles.button, styles.buttonOpen, styles.textStyle]}>Camera</Text>
              </Pressable>
                </View>
                <View style={{flexDirection:'column'}}>
              <Pressable
                style={{marginStart: 30, borderColor:'black', borderWidth: 2, padding:20, backgroundColor:'white'}}
                onPress={() => galleryLaunch()}>
                  <Ionicons style={{alignSelf:'center'}} name="images-outline" color={color2} size={size2}/>
                <Text style={[styles.button, styles.buttonOpen, styles.textStyle]}>Gallery</Text>
              </Pressable>
                </View>
              </View>
              <View style={{marginTop:20, width:190}}>
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
  
                <Picker
                  style={styles.textInput1}
                  selectedValue={category_id}
                  onValueChange={e => setCategory_ID(e)}>
                {getCategory.data?.map((item, index) => (
                  <Picker.Item key={index} label={item.name} value={item.id} />
                ))}
                </Picker>
          </View>
  
          <View style={{marginVertical: 30, marginHorizontal: 40}}>
            <Button
              title="Edit"
              color="#EFC81A"
              onPress={() => editButtonAlert()}
            />
            {selectorEditMenu.isLoading && <ActivityIndicator style={{marginTop: 10}} size="large" color="black" />}
          </View>
        </View>
      </ScrollView>
  
      
    );
  };
  
  export default EditMenu;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: '#f7f6f6',
    },
  
    headText: {
      color: '#EFC81A',
      alignSelf: 'center',
      fontSize: 30,
      fontWeight: '500',
    },
  
    textInput1: {
      backgroundColor: 'white',
      marginHorizontal: 40,
      padding: 17,
      marginTop: 20,
      borderRadius: 10,
    },
  
    textInput2: {
      justifyContent: 'center',
      backgroundColor: 'white',
      marginHorizontal: 40,
      padding: 17,
      marginTop: 20,
      borderRadius: 10,
      height: 200,
      textAlignVertical: 'top',
    },
  
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
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
      backgroundColor:'#EFC81A',
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
  