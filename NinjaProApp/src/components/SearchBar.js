import React from 'react'
import { connect } from 'react-redux'
import { setSearchText}  from '../redux/actions'
import { TextInput, Image, View } from 'react-native'

const SearchBar = (props) => {
    return(
        <View style={props.searchContainer}>
            <Image 
                style={props.icon}
                source={require('../images/icon.png')}
            />
            <TextInput 
                placeholder="Search..."
                style={props.search}
                onChangeText={(text) => {props.setSearchText(text)}}
                value={props.text}
            />
        </View>
    )
}
const mapStateToProps = (state) => {
    return { text: state.text }
}
export default connect(mapStateToProps, { setSearchText })(SearchBar)
