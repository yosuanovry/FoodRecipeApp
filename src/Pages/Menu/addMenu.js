import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {addMenu} from '../../Storages/Actions/Menu';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

const AddMenu = () => {
  const [inputData, setInputData] = useState({
    title: '',
    ingredients: '',
    category_id: 1,
  });

  const handleChange = e => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const navigation = useNavigation()
  const dispatch = useDispatch();

  const postForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', inputData.title); 
    data.append('ingredients', inputData.ingredients); 
    data.append('category_id', inputData.category_id); 
    data.append('photo', {
      uri: photo.uri,
      type: 'image/jpeg',
      name: 'testPhotoName',
    });
    
    dispatch(addMenu(data, navigation));
  };

  const imagePicker = () => {
  
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
  
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      }
  
      else {
        let source = { uri: 'data:image/jpeg;base64,' + response.data };
  
        this.setState({
          avatarSource: source,
          pic:response.data
        });
      }
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={{justifyContent: 'center', marginTop: 50}}>
        <Text style={styles.headText}>Add Your Recipe</Text>
        <TextInput
          require
          name="title"
          value={inputData.title}
          onChange={handleChange}
          style={styles.textInput1}
          placeholder="Title"
        />

        <TextInput
          require
          name="ingredients"
          onChange={handleChange}
          value={inputData.ingredients}
          style={styles.textInput2}
          placeholder="Ingredients"
        />

        <TextInput require style={styles.textInput1} placeholder="Add Photo" />

        <TextInput
          require
          onChange={handleChange}
          value={inputData.category_id}
          style={styles.textInput1}
          placeholder="Category"
        />
      </View>

      <View style={{marginTop: 30, marginHorizontal: 40}}>
        <Button
          title="Post"
          color="#EFC81A"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default AddMenu;

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

  textInput1: {
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 40,
    padding: 17,
    marginTop: 20,
    borderRadius: 10,
  },

  textInput2: {
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 40,
    padding: 17,
    marginTop: 20,
    borderRadius: 10,
    height: 200,
  },
});
