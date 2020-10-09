import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Alert, LayoutAnimation} from 'react-native'
import { connect } from 'react-redux'
import { toggleSaveFlashcard } from '../redux/actions'


class VideoScreenItems extends Component {
    constructor(props) {
        super(props)
        this.currentHeight = null
    }

    render(){
        return ( 
                <TouchableHighlight 
                    underlayColor="#ffffff00"
                    onLayout={(event) => { 
                    this.currentHeight = event.nativeEvent.layout.height }}
                    style={[this.props.containerList, {height: this.props.height}]}
                    onPress={() => {
                        LayoutAnimation.easeInEaseOut() 
                        this.props.toggleSaveFlashcard(this.currentHeight)}}
                >
                    <View>
                            <TouchableHighlight 
                            style={[{backgroundColor: '#c7c7c7'},{height: this.props.height === null ? 0 : 50}]}
                            
                            onPress={() => {
                                this.props.onPress()
                            }}>
                                <Text>Save to FlashCards</Text>
                            </TouchableHighlight>
                    
                        <Text style={this.props.codeStyle}>{this.props.content}</Text>
                        
                    </View>

                </TouchableHighlight>
        )
    }
}

const mapStateToProps = (state) => {
    return { height: state.height }
}

export default connect(mapStateToProps, { toggleSaveFlashcard })(VideoScreenItems)