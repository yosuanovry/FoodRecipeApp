import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import { LoginUser } from '../../Storages/Actions/Auth';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const login = useSelector((state) => state.Auth_Login)


  const handleLogin = () => {
    let data = {
      email,
      password
    }
    if (password.trim() === '' && email.trim() === '') {
      Alert.alert('Error', 'Masukkan email & password');
      return;
    }
    if (email.trim() === '') {
      Alert.alert('Error', 'Masukkan email');
      return;
    }
    if (password.trim() === '') {
      Alert.alert('Error', 'Masukkan password');
      return;
    }
    dispatch(LoginUser(data, navigation));
  };


  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View>
        <Image
          source={require('../../Assets/Auth/bg.png')}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>Welcome !</Text>
        <Text style={styles.loginText}>Log in to your exiting account.</Text>
      </View>

      <View style={{marginTop: 20}}>
        <TextInput
          require
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.textInput}
          placeholder="examplexxx@gmail.com"
          keyboardType={'email-address'}
        />
        <TextInput 
        require 
        value={password}
        onChangeText={(e) => setPassword(e)}
        style={styles.textInput} 
        secureTextEntry={true}
        placeholder="Password" />

          <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}>
            <Text
              style={{
                color: '#999999',
                textAlign: 'right',
                marginHorizontal: 41,
                marginTop: 10,
              }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 30, marginHorizontal: 40}}>
          <Button title="Login" color="#EFC81A" onPress={() => handleLogin()}/>
          {login.isLoading &&
            <ActivityIndicator style={{marginTop: 10}} size="large" color="black" />
          }
        </View>

        <View style={styles.registration}>
          <Text style={{color: 'black'}}>Dont have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{color: '#EFC81A'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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
    color: '#C4C4C4',
    fontWeight: '400',
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

export default Login;
