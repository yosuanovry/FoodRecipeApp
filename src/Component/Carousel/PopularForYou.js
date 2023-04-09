import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const PopularForYou = ({data}) => {
    const {width} = useWindowDimensions();
    const widthSize = width * 0.43;
  return (
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}
    bounces={false}
    >
      {data.map((item,index) => {
        return(
            <View key={index} style={{width: widthSize}}>
                <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.image}/>
                    <Text style={styles.carouselText}>{item.text}</Text>
                    <Text style={{fontSize: 10, fontWeight: '700', marginStart: 16, color:'black'}}>Lorem ipsum</Text>
                </View>
            </View>
        )
      })}
    </ScrollView>
  )
}

export default PopularForYou;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 14,
        overflow: 'hidden',
        marginStart: 30,
        marginTop: 10
    },
    
    image: {
        width:'100%',
        height: undefined,
        aspectRatio: 1.5
    },

    carouselText: {
        color: 'black',
        fontWeight: '900',
        fontSize: 12,
        width: '100%',
        marginStart: 16
    }

})