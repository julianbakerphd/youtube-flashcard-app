import React from 'react'
import { StyleSheet, View, Text, Alert} from 'react-native'
import { connect } from 'react-redux'
import { setTutorialType } from '../redux/actions'
import Tutorial from './Tutorial'

const tutorials = [ 
    {"type": "HTML"},
    {"type": "CSS"},
    {"type": "JavaScript"}, 
    {"type": "Swift"},
    {"type": "Java"}
] 

const TutorialList = (props) => {
    const { navigation } = props
    const onPress = (tutorial) => {
                props.setTutorialType(tutorial)
                navigation.navigate('Content')
            
    }
    let returnList = tutorials.map((tutorial, index) => {
         return(  <Tutorial key={index} onPress={() => {onPress(tutorial.type)}} key = {index} title={tutorial.type} />)    
    })
 
return (
    <View style={styles.container}>{returnList}</View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '1%',
        backgroundColor: '#999999',
        width: 340

    }
})

export default connect(null, { setTutorialType })(TutorialList)
 

 