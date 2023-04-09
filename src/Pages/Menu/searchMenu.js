import { View, Text, StyleSheet, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from "axios";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
// import { useDispatch,useSelector } from 'react-redux';
// import { GetMenu } from '../../Storages/Actions/Menu';

const SearchMenu = () => {
  const [datas, setDatas] = useState()
  const [searchText, setSearchText] = useState('')
  const color2 = '#8C8C8C';
  const size2 = 20;

  const navigation = useNavigation()

  useEffect(() => {
    getMenuData()
  },[])


  const getMenuData = async () => {
    var url = `https://puce-victorious-bandicoot.cyclic.app/recipes`;
    return await axios
      .get(url)
      .then((res) => {
        console.log(res);
        setDatas(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchMenuData= async () => {
    var url = `https://puce-victorious-bandicoot.cyclic.app/recipes?search=` + searchText;
    return await axios
      .get(url)
      .then((res) => {
        console.log(res);
        if (!searchText) {
          getMenuData();
        }
        setDatas(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getMenuById = async (id) => {
    navigation.navigate("Detail", {
      id: id
    })
  };

  
  console.log(datas);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle='dark-content'/>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <TextInput
          style={styles.searchBar}
          onChangeText={(e) => setSearchText(e)}
          placeholder="Search Pasta, Bread, etc"
        />
        <TouchableOpacity style={styles.button} onPress={searchMenuData}>
          <Text style={{color:'white', fontWeight:'500'}}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
    {datas?.map((item, index) => (
      <TouchableOpacity onPress={() => getMenuById(item.id)}>
      <View key={index} style={styles.menuContainer}>
        <Image style={styles.image} source={{uri: item.photo}}/>
        <View style={{}}> 
          <Text style={{color:'black', fontWeight:'500', fontSize: 16, width: 100}}>{item.title}</Text>
          <Text style={{color:'#6E80B0', fontSize:13, fontWeight:'900', marginTop: 10}}>{item.category}</Text>
        </View>
        <Ionicons style={{}} name="chevron-forward-outline" color={color2} size={size2}/>
      </View>
      </TouchableOpacity>
    ))}
      </ScrollView>
    </View>
  )
}

export default SearchMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor:'white',
  },

  searchBar: {
    backgroundColor: '#EFEFEF',
    marginTop: 50,
    marginHorizontal: 35,
    borderRadius:10,
    padding: 15,
    width: 200
  },

  menuContainer: {
    flexDirection:'row',
    marginHorizontal: 40,
    marginTop: 30,
    height: 100,
    alignItems:'center',
    justifyContent: 'space-around'
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },

  button: {
    marginTop: 50,
    width: 80,
    height: 55,
    backgroundColor:'#EFC81A',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
  }

})