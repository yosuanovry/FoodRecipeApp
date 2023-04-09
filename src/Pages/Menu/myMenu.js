import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  Image,
  ScrollView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetMenuById, GetMenuByUser, deleteMenu} from '../../Storages/Actions/Menu';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyMenu = () => {
  const [datas, setDatas] = useState()
  const isAuth = useSelector(state => state.Auth_Login.data.token);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(GetMenuByUser(isAuth));
  // }, [dispatch]);

  const navigation = useNavigation()
  const dispatch = useDispatch()


  useEffect(() => {
    getMenuUserData()
  }, []);

  const getMenuUserData = async () => {
    var url = `https://puce-victorious-bandicoot.cyclic.app/recipes/my-recipes`;
    return await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${isAuth}`
        }
      })
      .then((res) => {
        console.log(res);
        setDatas(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const getMenuById = async (id) => {
    navigation.navigate("Detail", {
      id: id
    })
  };

  const deleteMenuId = (id) => {
    dispatch(deleteMenu(id, isAuth))
  }



  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={{justifyContent: 'center', marginTop: 50}}>
        <Text style={styles.headText}>My Recipe</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        {datas?.map((item, index) => (
          
          <View key={index} style={styles.cardContainer}>
            <TouchableOpacity onPress={() => getMenuById(item.id)}>
            <View>
              <Image
                style={styles.cardImage}
                source={{uri: item.photo}}
                />
            </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'column',
                marginBottom: 5,
                marginStart: 5,
              }}>
              <Text
                style={{fontSize: 16, color: 'black', width: 90, height: 50}}>
                {item.title}
              </Text>
              <Text style={{fontSize: 14, color: 'black', fontWeight: '500'}}>
                {item.category}
              </Text>
            </View>
            <View style={{flexDirection: 'column', marginStart: 30}}>
              <Button title="Edit" color="#30C0F3" />
              <View style={{marginTop: 10}}>
                <Button title="Delete" color="#F57E71" onPress={() => deleteMenuId(item.id)}/>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
    </ScrollView>
  );
};

export default MyMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#f7f6f6',
  },

  headText: {
    color: '#EFC81A',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '500',
  },

  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: '90%',
    height: 120,
    borderRadius: 15,
  },

  cardImage: {
    height: 100,
    width: 120,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
