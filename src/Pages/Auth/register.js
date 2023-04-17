import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '../../Storages/Actions/Auth';

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const navigation = useNavigation()

  const register = useSelector((state) => state.AuthReg)

  const handleRegister = () => {
    let data = {
      name,
      email,
      password
    }
    dispatch(RegisterUser(data,navigation))
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
        <Text style={styles.loginText}>Register to Recipe App.</Text>
      </View>

      <View style={{marginTop: 20}}>
        <TextInput 
        require
        value={name}
        onChangeText={(e) => setName(e)} 
        style={styles.textInput} 
        placeholder="Name" />

        <TextInput
          require
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.textInput}
          placeholder="Examplexxx@gmail.com"
        />
        
        <TextInput 
        require
        value={password}
        onChangeText={(e) => setPassword(e)} 
        style={styles.textInput}
        secureTextEntry={true} 
        placeholder="Password" />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
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
        <Button title="Register" color="#EFC81A" onPress={handleRegister}/>
      </View>

      <View style={styles.registration}>
        <Text style={{color: 'black'}}>Dont have an Account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{color: '#EFC81A'}}>Sign In</Text>
        </TouchableOpacity>
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

export default Register;
