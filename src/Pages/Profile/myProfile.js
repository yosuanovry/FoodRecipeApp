import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {LogoutUser} from '../../Storages/Actions/Auth';

const MyProfile = () => {
  const color = '#EEC302';
  const color2 = '#8C8C8C';
  const size = 30;
  const size2 = 20;

  const isAuth = useSelector(state => state.Auth_Login);

  const photo = isAuth.data.photo;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logoutButtonAlert = () =>
    Alert.alert(
      'Logout Alert',
      'Are you sure you want to logout?',
      [
        {
          text: 'No',
          onPress: () => console.log('Canceled'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () =>
            dispatch(LogoutUser(navigation))
        },
      ],
    );

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="default"
      />
      <View style={styles.upperContainer}>
        {photo === null ? (
          <Image
            style={{width: 120, height: 120, borderRadius: 60, borderColor:'white', borderWidth:3}}
            source={{
              uri: 'https://img.freepik.com/free-icon/user_318-790139.jpg',
            }}
          />
        ) : (
          <Image
            style={{width: 120, height: 120, borderRadius: 60, borderColor:'white', borderWidth:3}}
            source={{uri: photo}}
          />
        )}
        <Text style={styles.imageText}>{isAuth.data.fullname}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '20%',
            width: '100%',
            borderWidth: 4,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderColor: '#EEC302'
          }}
          onPress={() => navigation.navigate('Edit Profile')}>
          <View style={styles.profileContainer}>
            <Ionicons
              style={{marginLeft: 20}}
              name="person-outline"
              color={color}
              size={size}
            />
            <Text style={styles.textProfileContainer}>Edit Profile</Text>
            <Ionicons
              style={{marginLeft: 182}}
              name="chevron-forward-outline"
              color={color2}
              size={size2}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '20%',
            width: '100%',
            borderWidth: 4,
            borderTopWidth: 0,
            borderColor: '#EEC302'
          }}
          onPress={() => navigation.navigate('My Recipes')}>
          <View style={styles.profileContainer}>
            <Ionicons
              style={{marginLeft: 20}}
              name="ribbon-outline"
              color={color}
              size={size}
            />
            <Text style={styles.textProfileContainer}>My Recipe</Text>
            <Ionicons
              style={{marginLeft: 185}}
              name="chevron-forward-outline"
              color={color2}
              size={size2}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '20%',
            width: '100%',
            borderWidth: 4,
            borderTopWidth: 0,
            borderColor: '#EEC302'
        }}>
        <View style={styles.profileContainer}>
          <Ionicons
            style={{marginLeft: 20}}
            name="bookmark-outline"
            color={color}
            size={size}
          />
          <Text style={styles.textProfileContainer}>Saved Recipe</Text>
          <Ionicons
            style={{marginLeft: 163}}
            name="chevron-forward-outline"
            color={color2}
            size={size2}
          />
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '20%',
            width: '100%',
            borderWidth: 4,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopWidth: 0,
            borderColor: '#EEC302'
        }}>
        <View style={styles.profileContainer}>
          <Ionicons
            style={{marginLeft: 20}}
            name="thumbs-up-outline"
            color={color}
            size={size}
          />
          <Text style={styles.textProfileContainer}>Liked Recipe</Text>
          <Ionicons
            style={{marginLeft: 169}}
            name="chevron-forward-outline"
            color={color2}
            size={size2}
          />
        </View>
        </TouchableOpacity>
        <View style={{marginTop: 100}}>
          <Button title="Logout" color="red" onPress={() => logoutButtonAlert()} />
        </View>
      </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },

  upperContainer: {
    backgroundColor: '#EEC302',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  imageText: {
    color: 'white',
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
    color: 'black',
    alignItems: 'center',
    marginVertical: -40,
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textProfileContainer: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 17,
  },
});
