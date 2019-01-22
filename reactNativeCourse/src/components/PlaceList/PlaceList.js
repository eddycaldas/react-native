import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem'

const placeList = props => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem 
            key={i} 
            placeName={place} 
            onItemPressed={() => alert('item pressed ID' + i)}
        />     
    ))
    return (
        <View style={styles.output}>{placesOutput}</View>
    )
}

const styles = StyleSheet.create({
    output: {
      width: '100%'
    }  
})

export default placeList;