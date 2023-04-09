import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PopularRecipes = ({navigation}) => {
  const color = '#EFC81A';
  const size = 25;
  const color2 = '#8C8C8C';
  const size2 = 30;
  const color3 = '#E9E9E8';
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />

      <View style={styles.upperContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back"
            color={color2}
            size={size2}
            style={{backgroundColor: '#F8F8FA', borderRadius: 15}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: '#F1CD31', fontWeight: '500'}}>
          Popular Recipes
        </Text>
        <View></View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={styles.cardContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={require('../../Assets/Auth/eggs.png')}
            />
          </View>
          <View style={{flexDirection: 'column', marginTop: 8, marginStart: 5}}>
            <Text style={{fontSize: 16, color: 'black', width: 90}}>
              Chicken Egg
            </Text>
            <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
              Spicy
            </Text>
            <View style={{flexDirection: 'row', height:50, alignItems:'center'}}>
              <Ionicons
                name="person-outline"
                color={color}
                size={size}
              />
              <Text style={{fontWeight:'900', marginStart:5}}>Mareta</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginStart: 20}}>
            <View style={{
                backgroundColor:'#EFC81A', 
                width:40, 
                height:40, 
                alignItems:'center', 
                justifyContent:'center', 
                borderRadius: 20
                }}>
            <Ionicons
                name="bookmark-outline"
                color={color3}
                size={size}
              />
            </View>
            <View style={{
                backgroundColor:'#FFFFFF', 
                width:40, 
                height:40, 
                alignItems:'center', 
                justifyContent:'center', 
                borderRadius: 20,
                borderWidth: 2,
                borderColor: '#EFC81A',
                marginStart: 5,
                }}>
            <Ionicons
                name="thumbs-up-outline"
                color={color}
                size={size}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PopularRecipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 60,
    width: '80%',
    marginHorizontal: 35,
  },

  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: '90%',
    height: '40%',
    borderRadius: 15,
  },

  cardImage: {
    height: 100,
    width: 120,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
