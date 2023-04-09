import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const PopularRecipes = ({data}) => {
    const {width} = useWindowDimensions();
    const {height} = useWindowDimensions()
    const widthSize = width * 0.7;
    const heightSize = height * 0.8;
  return (
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}
    bounces={false}
    >
      {data.map((item,index) => {
        return(
            <View key={index} style={{width: widthSize, height: heightSize}}>
                <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.image}/>
                </View>
                <View style={{marginTop: -60}}>
                <Text style={styles.carouselText}>{item.text}</Text>
                </View>
            </View>
        )
      })}
    </ScrollView>
  )
}

export default PopularRecipes;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 14,
        overflow: 'hidden',
        marginStart: 30,
        marginTop: 20,
    },
    
    image: {
        width:'100%',
        height: undefined,
        aspectRatio: 1.5
    },

    carouselText: {
        color: 'white',
        marginStart: 48,
        fontWeight: '700',
        fontSize: 18,
        width: '30%'
    }

})