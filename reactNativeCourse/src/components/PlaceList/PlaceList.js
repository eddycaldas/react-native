import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem'

const placeList = props => {    
    
    return (
        <FlatList 
            style={styles.output}
            data={props.places}
            renderItem={(info) => (
                <ListItem 
               placeName={info.item.value} 
               onItemPressed={() => props.onItemDeleted(info.item.key)}
        /> 
            )}
        />
    )
}

const styles = StyleSheet.create({
    output: {
      width: '100%'
    }  
})

export default placeList;