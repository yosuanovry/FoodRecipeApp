import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    TextInput,
    Button,
    TouchableOpacity,

  } from 'react-native';
  // import Icon from 'react-native-vector-icons/FontAwesome5';
  import React, {useState, useEffect} from 'react';
  import {useNavigation, useRoute} from '@react-navigation/native';
  import {useDispatch, useSelector} from 'react-redux';
  import { GetUserDataByEmail } from '../../Storages/Actions/User';
  import { otpVerify } from '../../Storages/Actions/Auth';
  
  function Otp2() {
    const [id, setId] = useState('');
    const [otp, setOtp] = useState('');
    const navigation = useNavigation();
    
    const route = useRoute()
    const dispatch = useDispatch()
  
    const getUserByEmail= useSelector((state) => state.get_user)
  
    useEffect(() => {
      dispatch(GetUserDataByEmail(route.params.email))
    },[])

    const handleVerify = () => {
        dispatch(otpVerify(id,otp,navigation))
    }


  
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View>
          <Image
            source={require('../../Assets/Auth/bg.png')}
            style={styles.image}
          />
          <Text style={styles.welcomeText}>Welcome !</Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: '#EFC81A',
              fontWeight: '500',
            }}>
            This is a secret page to verify your account
          </Text>
          <Text style={styles.loginText}>Please fill the data below in the input box</Text>
      
          <Text style={styles.loginText} selectable={true}>ID: {getUserByEmail.data.id} </Text>
          <Text style={styles.loginText} selectable={true}>OTP: {getUserByEmail.data.otp}</Text>
           
        </View>
  
        <View style={{marginTop: 20}}>
          <TextInput
            require
            value={id}
            onChangeText={e => setId(e)}
            style={styles.textInput}
            placeholder="ID"
            keyboardType={'email-address'}
          />

          <TextInput
            require
            value={otp}
            onChangeText={e => setOtp(e)}
            style={styles.textInput}
            placeholder="OTP"
            keyboardType={'email-address'}
          />
  
  
          <View style={{marginTop: 30, marginHorizontal: 40}}>
            <Button title="Send" color="#EFC81A" onPress={() => handleVerify()}/>
          </View>
  
          <View style={styles.registration}>
            <Text style={{color: 'black'}}>Dont have an Account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{color: '#EFC81A'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  
    image: {
      width: '100%',
      height: 230,
      top: 0,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
  
    welcomeText: {
      textAlign: 'center',
      fontSize: 25,
      color: '#EFC81A',
      fontWeight: '500',
      marginTop: 15,
    },
  
    loginText: {
      textAlign: 'center',
      fontSize: 15,
      color: 'black',
      fontWeight: '500',
      marginTop: 10,
    },
  
    textInput: {
      justifyContent: 'center',
      backgroundColor: '#ebe9e0',
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
  });
  
  export default Otp2;
  