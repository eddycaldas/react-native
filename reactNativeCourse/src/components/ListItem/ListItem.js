import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listItem = (props) => (
    <View style={styles.viewStyle}>
        <Text>{ props.showPlace }</Text>
    </View>
);

const styles = StyleSheet.create({
    viewStyle: {
        width: '100%',
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#eee'
    }
})

export default listItem;