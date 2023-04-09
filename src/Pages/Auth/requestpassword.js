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

const RequestPassword = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
        <Image source={require('../../Assets/Auth/lock.png')} />
        <Text style={styles.loginText}>
          Request for reset password has been sent!
        </Text>
      </View>
      <View style={styles.resetButton}>
        <Button title="Check your Email" color="#EFC81A" />
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

  loginText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#46505C',
    fontWeight: '400',
    marginHorizontal: 40,
    marginTop: 30,
  },

  resetButton: {
    marginHorizontal: 40,
    marginBottom: 40,
  },
});

export default RequestPassword;
