import React, { Component } from 'react'
import { Alert, View, Text } from 'react-native'


import { createDrawerNavigator } from '@react-navigation/drawer'
import TabComponent from './TabComponent'
import CustomDrawerContent from './CustomDrawerContent'

const Drawer = createDrawerNavigator()


export default class DrawerComponent extends Component { 
   constructor(props) {
       super(props)
   }


    render() {
        return(
         
            <Drawer.Navigator drawerContent={ props => <CustomDrawerContent { ...props} />}>
                     <Drawer.Screen name="Tab" component={TabComponent} />
            </Drawer.Navigator>

        )
    }
    
}

