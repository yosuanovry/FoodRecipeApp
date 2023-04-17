import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import PopularRecipes from '../../Component/Carousel/PopularRecipes';
import PopularForYou from '../../Component/Carousel/PopularForYou';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({navigation}) => {
    // dummy data
    const data = [
        {
            image:require('../../Assets/Auth/eggs.png'),
            text:"Sandwich with Egg"
        },
        {
            image:require('../../Assets/Auth/eggs.png'),
            text:"Sandwich with Egg"
            
        },
        {
            image:require('../../Assets/Auth/eggs.png'),
            text:"Sandwich with Egg"
        },
    ]

  return (
    <View style={styles.container}> 
      <View>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
        <TextInput
          style={styles.searchBar}
          onPressIn={() => navigation.navigate("Search")}
          require
          placeholder="Search Pasta, Bread, etc"
        />
      </View>
        
        <View style={{marginTop: 20}}>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.headText1}>Popular Recipes</Text>
          <TouchableOpacity onPress={() => navigation.push("Popular")}>
          <Text style={{marginStart: 93, marginTop: 5, color:'blue'}}>More info</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.headText2}>Popular Check</Text>
          <PopularRecipes data={data}/>
        </View>

        <View style={{marginTop: -390, flexDirection: 'row'}}>
        <Text style={styles.headText1}>New Recipes</Text>
        <Text style={{marginStart: 120, marginTop: 5, color:'blue'}}>More info</Text>
        </View>        


        <View style={{alignItems:'center'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <Image style={styles.buttonImage} source={require('../../Assets/Auth/soup.png')}/>
            <Text style={styles.textButtonImage}>Soup</Text>
          </View>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <Image style={styles.buttonImage} source={require('../../Assets/Auth/fork.png')}/>
            <Text style={styles.textButtonImage}>Chicken</Text>
          </View>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <Image style={styles.buttonImage} source={require('../../Assets/Auth/seafood.png')}/>
            <Text style={styles.textButtonImage}>Seafood</Text>
          </View>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <Image style={styles.buttonImage} source={require('../../Assets/Auth/fork.png')}/>
            <Text style={styles.textButtonImage}>Dessert</Text>
          </View>
        </View>
        </View>
        
        <View style={{marginTop: 20}}>
        <Text style={styles.headText1}>Popular For You</Text>
            <PopularForYou data={data}/>
        </View>
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  },

  searchBar: {
    backgroundColor: '#EFEFEF',
    marginTop: 50,
    marginHorizontal: 35,
    borderRadius:10,
    padding: 15
  },

  headText1: {
    marginHorizontal: 35,
    fontWeight: '500',
    fontSize: 18,
    color: 'black',

  },

  headText2: {
    marginHorizontal: 35,
    fontWeight: '900',
    fontSize: 14,
    color: 'black',
  },

  buttonImage: {
    marginTop: 20,
    marginHorizontal: 10
  },

  textButtonImage: {
    color:'black',
    marginTop:5,
    fontWeight: '700',
  },



});

export default Home;