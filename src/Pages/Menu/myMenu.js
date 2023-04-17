import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  Image,
  ScrollView,
  RefreshControl,
  Alert,
  ActivityIndicator 
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { deleteMenu} from '../../Storages/Actions/Menu';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyMenu = () => {
  const [datas, setDatas] = useState()
  const isAuth = useSelector(state => state.Auth_Login.data.token);
  const [refreshing, setRefreshing] = useState(false);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(GetMenuByUser(isAuth));
  // }, [dispatch]);

  const navigation = useNavigation()
  const dispatch = useDispatch()


  useEffect(() => {
    getMenuUserData()
  }, [onRefresh]);
  
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
    getMenuUserData().then(() => {
        setRefreshing(false);
      });
    }, 1000);
  };

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
  
  const getMenuByIdDetail = async (id) => {
    navigation.navigate("Detail", {
      id: id
    })
  };

  const getMenuByIdEdit = async (id) => {
    navigation.navigate("Edit Menu", {
      id: id
    })
  };


  const deleteButtonAlert = (id) =>
    Alert.alert(
      'Delete Alert',
      'Are you sure you want to delete this recipe?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Delete canceled'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () =>
            dispatch(deleteMenu(id, isAuth)).then(() => {
              setTimeout(() => {
                  setRefreshing(true)
                getMenuUserData().then(() => {
                  setRefreshing(false)
                });
              },2000)
            }),
        },
      ],
    );

  return (
    <ScrollView style={{backgroundColor:'#f7f6f6'}} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
    }>
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={{justifyContent: 'center', marginTop: 50}}>
        <Text style={styles.headText}>My Recipe</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        {datas?.map((item, index) => (
          
          <View key={index} style={styles.cardContainer}>
            <TouchableOpacity onPress={() => getMenuByIdDetail(item.id)}>
            <View>
              <Image
                style={styles.cardImage}
                source={{uri: item.photo}}
                />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getMenuByIdDetail(item.id)}>
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
            </TouchableOpacity>
            <View style={{flexDirection: 'column', marginStart: 30}}>
              <Button title="Edit" color="#30C0F3" onPress={() => getMenuByIdEdit(item.id)}/>
              <View style={{marginTop: 10}}>
                <Button title="Delete" color="#F57E71" onPress={() => deleteButtonAlert(item.id)}/>
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor:'#EFC81A',
    borderWidth: 10,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#EFC81A',
  },
  buttonClose: {
    backgroundColor: 'tomato',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
