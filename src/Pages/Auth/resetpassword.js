import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

const ResetPassword = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
        <Image source={require('../../Assets/Auth/lock.png')} />
        <View style={{marginTop: 20}}>
          <TextInput
            require
            style={styles.textInput}
            placeholder="Create New Password"
          />
          <TextInput
            require
            style={styles.textInput}
            placeholder="New Password"
          />
        </View>
      </View>
      <View style={styles.resetButton}>
        <Button title="Reset Password" color="#EFC81A" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f6f6',
    marginBottom: 110,
  },

  welcomeText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#EFC81A',
    fontWeight: '500',
    marginTop: 25,
  },

  loginText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#C4C4C4',
    fontWeight: '400',
    marginHorizontal: 40,
  },

  textInput: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: 300,
    padding: 17,
    marginTop: 20,
    borderRadius: 10,
  },

  resetButton: {
    marginHorizontal: 40,
    marginBottom: 40,
  },
});

export default ResetPassword;
