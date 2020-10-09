import React from 'react'
import { TouchableHighlight, StyleSheet, View, Text, Alert } from 'react-native'

const Tutorial = (props) => {
    
    return(

        <TouchableHighlight style={styles.container} onPress={props.onPress}>
            <View >
                <Text style={styles.textStyle}>{props.title}</Text>
            </View>
        </TouchableHighlight>
            
    )
}


const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        margin: 10,
        backgroundColor: '#e6f9ff',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            height: 3
        },
        shadowOpacity: 1
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Tutorial