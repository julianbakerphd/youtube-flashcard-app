import React, { Component } from 'react'
import { StyleSheet, View, Text, LayoutAnimation } from 'react-native'

export default class FlashCardBottomPanel extends Component {
    render() {
        return(
            <View>
                <Text>FlashCardBottomPanel</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: '90%',
        position: "absolute",
        bottom: 20,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        zIndex: 10000
    }
})