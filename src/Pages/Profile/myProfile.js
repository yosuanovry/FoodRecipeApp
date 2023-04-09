import { View, Text, StyleSheet, StatusBar, Image, Button } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { LogoutUser } from '../../Storages/Actions/Auth';

const MyProfile = () => {
  const color = '#EEC302';
  const color2 = '#8C8C8C';
  const size = 30;
  const size2 = 20;

  const isAuth = useSelector((state) => state.Auth_Login)
  const photo = isAuth.data.photo

  const dispatch = useDispatch();
  const navigation = useNavigation()


  const handleLogout = () => {  
    dispatch(LogoutUser(navigation))
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle='default'/>
      <View style={styles.upperContainer}>
          <Image style={{width:100, height: 100, borderRadius: 35}} source={{uri: photo}}/>
          <Text style={styles.imageText}>{isAuth.data.fullname}</Text>
      </View>

      <View style={styles.bottomContainer}>
          <View style={styles.profileContainer}>
          <Ionicons style={{marginLeft:20}} name="person-outline" color={color} size={size}/>
            <Text style={styles.textProfileContainer}>Edit Profile</Text>
          <Ionicons style={{marginLeft:182}} name="chevron-forward-outline" color={color2} size={size2}/>
          </View>
          <View style={styles.profileContainer}>
          <Ionicons style={{marginLeft:20}} name="ribbon-outline" color={color} size={size}/>
            <Text style={styles.textProfileContainer}>My Recipe</Text>
          <Ionicons style={{marginLeft:185}} name="chevron-forward-outline" color={color2} size={size2}/>
          </View>
          <View style={styles.profileContainer}>
          <Ionicons style={{marginLeft:20}} name="bookmark-outline" color={color} size={size}/>
            <Text style={styles.textProfileContainer}>Saved Recipe</Text>
          <Ionicons style={{marginLeft:163}} name="chevron-forward-outline" color={color2} size={size2}/>
          </View>
          <View style={styles.profileContainer}>
          <Ionicons style={{marginLeft:20}} name="thumbs-up-outline" color={color} size={size}/>
            <Text style={styles.textProfileContainer}>Liked Recipe</Text>
          <Ionicons style={{marginLeft:169}} name="chevron-forward-outline" color={color2} size={size2}/>
          </View>
          <View style={{marginTop: 100}}>
        <Button title="Logout" color="red" onPress={handleLogout}/>
      </View>
      </View>
      
    </View>
  )
}

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },

  upperContainer: {
    backgroundColor:'#EEC302',
    height: '40%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },

  imageText: {
    color:'white',
    fontWeight: '800',
    marginTop: 20,
    fontSize: 18,
  },

  bottomContainer: {
    display: 'flex',
    backgroundColor: 'white',
    height: '50%',
    width: '90%',
    flexDirection: 'column',
    color:'black',
    alignItems:'center',
    marginVertical: -40,
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  profileContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:'20%',
    width:'100%'
  },

  textProfileContainer: {
    color:'black',
    fontWeight:'500',
    fontSize: 16,
    marginLeft: 17,
  }

})