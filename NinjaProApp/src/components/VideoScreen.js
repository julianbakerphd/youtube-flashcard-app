import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import YouTube from 'react-native-youtube'
import { setOnReady,  setOnChangeState, setIsPlaying, showFlashCardBottomPanel, showPlayButton } from '../redux/actions'
import VideoScreenScrollContent from './VideoScreenScrollContent'
class VideoScreen extends Component{
  constructor(props){
    super(props)
    this._unsubscribe = null
  }
componentDidMount() { 
  console.log("VIDEOSCREENMOUNTED")
  this._unsubscribe = this.props.navigation.addListener('focus', () => {
    
      this.props.showPlayButton(true)
      
    if(this.props.flashcardPanelHeight !== null){
      this.props.showFlashCardBottomPanel()
    } 
    if(this.props.isPlaying === false){
      this.props.setIsPlaying(true)
    }
  })
}

componentWillUnmount() {
  console.log("VIDEOSCREENUNMOUNTED")
  this._unsubscribe()
}

  _youTubeRef = React.createRef();
  render() {

   
    return(
  
      <View style={styles.container}> 
        <YouTube
          ref={this._youTubeRef}
          play ={this.props.isPlaying}
          videoId={this.props.video} // The YouTube video ID
          onReady={(e) => {this.props.setOnReady()}}
          onChangeState={e => {
            this.props.setOnChangeState(e)
          }}
          style={{ alignSelf: 'stretch', height: 300 }}
        />
        
        <VideoScreenScrollContent />

        
     
  
      </View>
    

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  }
})

const mapStateToProps = (state) => {
  return { isPlaying: state.isPlaying,
          video: state.video, 
          flashcardPanelHeight: state.flashcardPanelHeight,
          showPlay: state.showPlay}
}
export default connect(mapStateToProps, { setOnReady, setOnChangeState, setIsPlaying, showFlashCardBottomPanel, showPlayButton })(VideoScreen)
