import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function SplashScreen({navigation}) {

  setTimeout(() => {
    navigation.navigate("Home")
  }, 2000)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <LinearGradient
        colors={['#EFC81A', 'red']}
        style={styles.linearGradient}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../Assets/Auth/barbecue1.png')}
            style={{width: 100, height: 100}}
          />
          <Text
            style={{
              marginTop: 15,
              fontSize: 30,
              fontWeight: '700',
              color: '#EFC81A',
            }}>
            Recipefy
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: '100%',
    flex: 1,
  },

  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    padding: 10,
    borderRadius: 15,
    borderLeftColor: '#FCEDDA',
    borderTopColor: '#FCEDDA',
    borderRightColor: '#FCE77D',
    borderBottomColor: '#FCE77D',
  },
});
export default SplashScreen;
