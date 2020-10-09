import React, { Component } from 'react' 
import{ Button } from 'react-native'
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerComponent from './DrawerComponent'
import { setIsPlaying} from '../redux/actions'
import { connect } from 'react-redux'
const Stack = createStackNavigator()

const NavigationComponent  = (props) =>{
  console.log("*******************************")
  console.log(props.showPlay)
  console.log("*******************************")

  const toggle = () => {
    if (props.status === 'playing') {
      props.setIsPlaying(false)
    } else {
      props.setIsPlaying(true)
    }
  } 

    return( 
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Content" component={DrawerComponent}
                          options={{gestureEnabled: false ,
                                  headerRight: () => ( props.showPlay ? <Button
                                                                              title={props.status == 'playing' ? 'Pause' : 'Play'}
                                                                              onPress={toggle}
                                                                              color="black"
                                                                              /> : null
                                    
                             
                                ),
              }} />
          </Stack.Navigator>
        </NavigationContainer> 

    )
  
}



const mapStateToProps = (state) => {
    return { status: state.status,
            showPlay: state.showPlay }
}

export default connect(mapStateToProps, { setIsPlaying })(NavigationComponent)

