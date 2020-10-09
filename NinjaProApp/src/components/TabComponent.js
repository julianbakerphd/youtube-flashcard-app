import React from 'react'
import { Alert, Text, View } from 'react-native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VideoScreen from './VideoScreen'
import FlashCardScreen from './FlashCardScreen'
import BottomTabNavigator from './BottomTabNavigator'

const Tab = BottomTabNavigator()

const TabComponent = (props) => {
    const { type } = props

    return(
  
        <Tab.Navigator>
            <Tab.Screen name="Video Tutorials" component={VideoScreen} />
            <Tab.Screen name="Flashcards" component={FlashCardScreen} />
        </Tab.Navigator>

    )
}

export default TabComponent