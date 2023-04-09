import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { GetMenuById } from '../../Storages/Actions/Menu';

const DetailMenu = () => {
  const color = '#EFC81A';
  const size = 25;
  const color3 = '#E9E9E8';

  const route = useRoute()
  const dispatch = useDispatch()

  const getMenuById = useSelector((state) => state.get_menuID.data)

  useEffect(() => {
    dispatch(GetMenuById(route.params.id))
  },[])

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="default"
      />
      {getMenuById?.map((item,index) => (
        <View key={index}>
      <View style={styles.upperContainer}>
        <Image
          source={{uri: item.photo}}
          resizeMode="cover"
          style={styles.image}
        />
        <View
          style={{flexDirection: 'row', marginHorizontal: 25, marginTop: -180}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.recipeText1}>{item.title}</Text>
            <Text style={styles.recipeText2}>By Chef {item.username}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginStart: 40,
            }}>
            <View
              style={{
                backgroundColor: '#EFC81A',
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Ionicons name="bookmark-outline" color={color3} size={size} />
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                borderWidth: 2,
                borderColor: '#EFC81A',
                marginStart: 15,
              }}>
              <Ionicons name="thumbs-up-outline" color={color} size={size} />
            </View>
          </View>
        </View>
      </View>
      
        <View style={styles.bottomContainer}>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: '600',
              color: 'black',
            }}>
            Ingredients
          </Text>
        </View>
        <View style={{marginTop: 50, alignItems:'center', width:'100%'}}>
          <View style={{width: '80%', backgroundColor:'#FAF7ED', borderRadius: 20}}>
            <Text style={{color: 'black', fontSize: 16}}>
              {item.ingredients}
            </Text>
          </View>
        </View>
      </View>
      </View>
      ))}   
    </View>
  );
};

export default DetailMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  upperContainer: {
    height: 450,
    width: '100%',
  },

  bottomContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    marginTop: -60,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    flexDirection: 'column',
  },

  image: {
    aspectRatio: 1,
    height: '100%',
  },

  recipeText1: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    width: 200,
  },

  recipeText2: {
    color: 'white',
    fontWeight: '900',
    fontSize: 12,
  },
});
