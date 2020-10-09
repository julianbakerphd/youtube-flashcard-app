import React, { Component } from 'react'
import { Image, TouchableHighlight, StyleSheet, Text, View, Animated, Alert, LayoutAnimation } from 'react-native'
import Realm from 'realm'
import { connect } from 'react-redux'
import { setRealm, incrementFlashcard, decrementFlashcard , setFlashCardsLength, deleteFlashcard, setIsPlaying, showFlashCardBottomPanel, showPlayButton } from '../redux/actions'
import FlashCardBottomPanel from './FlashCardBottomPanel'

const CodeSchema = {
  name: 'Code',
  primaryKey: 'id',
  properties: {
      id: 'int',
      tutorial: 'string',
      lesson: 'int',
      seconds: 'int', 
      video: 'string',
      code: 'string'
  }
}


const title = String.raw`
#include<stdio.h> 
int main() { 
  printf("Hello Geeks"); 
} 
`;


class FlashCardScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
                  show: false}
    this._unsubscribe = null
    
  }
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      if(this.props.showPlay === true){
        this.props.showPlayButton(false)
        }
        this.props.setIsPlaying(false)
      
    })
    const { realm } = this.props
    if (realm === null || realm.isClosed) {
      Realm.open({schema: [CodeSchema]})
      .then(realm => {this.props.setRealm(realm)})
    } 
   
  }

componentWillUnmount() {
  this._unsubscribe()
  const { realm } = this.props
  if (realm !== null && !realm.isClosed) { 
      realm.close()
  }
}
  incrementFlashcard = () => {
    if( this.props.flashcardPosition < this.props.flashcardLength - 1 ) {
      this.props.incrementFlashcard()
    }
   
    Alert.alert('Card Incremented')
  }

  decrementFlashcard = () => {
    if( this.props.flashcardPosition > 0 ) {
      this.props.decrementFlashcard()
    }
   
    Alert.alert('Card Decremented')
  }

  deleteFlashcard = () => {
    const { realm } = this.props
    if(this.props.flashcardLength > 0) {
      realm.write(() => {
        realm.delete(realm.objects('Code').filtered('tutorial == $0', this.props.tutorial)[this.props.flashcardPosition])
      })
      let Code = realm.objects('Code').filtered('tutorial == $0', this.props.tutorial)
      this.props.deleteFlashcard(Code.length)
    }
    
  }

  
 
    render() {

      console.log("FLASHCARD!!!!!!!")
      const { realm } = this.props
      const datum = ( this.props.flashcardLength > 0) ? realm.objects('Code').filtered('tutorial == $0', this.props.tutorial)[this.props.flashcardPosition] :  {
        id: null,
        type: null,
        lesson: null,
        seconds: null,
        video: null,
        code: null
      }
 
      

      const showCode = {display: this.state.show ? 'none' : 'flex'}
      const showAnswer = {display: this.state.show ? 'flex' : 'none'}
      
      
      return(
          <View>
     
              <View style={[styles.cardContainer, showCode]}>
                    <TouchableHighlight style={styles.topButtonLeft} onPress={() => {this.decrementFlashcard()}}>
                      <Text>Previous Card</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.topButtonRight} onPress={() => {this.incrementFlashcard()}}>
                      <Text>Next Card</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.closeButton} onPress={() => {
                      LayoutAnimation.easeInEaseOut()
                      this.props.showFlashCardBottomPanel()}}>
                      <Text>Open List</Text>
                    </TouchableHighlight>
                    <View>
                        <Text style={[styles.cardTutorial]}>
                            {datum.type}
                        </Text>
                    </View>
                    <View style={styles.cardLessonContainer}>
                        <Text style={styles.cardLesson}>
                            {"Place a better description here: " + datum.lesson}
                        </Text>
                    </View>
                        
                    <View>
                        <Text style={styles.cardCode}>
                            {datum.code}
                        </Text>
                    </View>

                    <TouchableHighlight style={styles.bottomButton} onPress={() => {this.setState({show: true})}}>
                          <Text>Show Answer</Text>
                    </TouchableHighlight>

                    
                      
            </View>

            <View style={[styles.cardContainer, showAnswer]}>

            <View>
                <Text style={[styles.cardTutorial]}>
                    {datum.type}
                </Text>
            </View>
            <View style={styles.cardLessonContainer}>
                <Text style={styles.cardLesson}>
                    {"Place a better description here: " + datum.lesson}
                </Text>
            </View> 
                
            <View>
                <Text style={styles.cardCode}>
                    {datum.code}
                </Text>
            </View>

            <TouchableHighlight style={styles.bottomButton} onPress={() => {this.setState({show: false})}}>
                  <Text>Show Code</Text>
            </TouchableHighlight>
              
            </View>
            
          </View>
   
      )
    }

    }

const profileCardColor = '#c7c7c7';

const styles = StyleSheet.create({

  cardContainer: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
            height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },

  cardTutorial: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 50,
    textShadowColor: 'black',
    textShadowOffset: {
        height: 2,
        width: 2
    },
    textShadowRadius: 3
  },
  cardLessonContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },
  cardLesson: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  cardCode: {
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    fontSize: 20
  },
  bottomButton: {

      justifyContent: 'center',
      alignItems: 'center',
      height: '10%',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: 'dodgerblue',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
   


  
  },
  topButtonRight: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
    height: '5%',
    width: '30%',
    position: 'absolute',
    top: 0,
    right: '30%',
    backgroundColor: 'dodgerblue',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 18,                

},
topButtonLeft: {
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1%',
  height: '5%',
  width: '30%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'dodgerblue',
  borderColor: 'black',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 18,                

},
    closeButton: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: '2%',
        paddingRight: '10%',
        height: '5%',
        width: '30%',
        position: 'absolute',
        top: 0,
        right: 0,
    }
});

const mapStateToProps = (state) => {
  return { realm: state.realm,
          flashcardPosition: state.flashcardPosition,
          flashcardLength: state.flashcardLength,
          tutorial: state.tutorial,
          isPlaying: state.isPlaying,
          showPlay: state.showPlay

        }
}

export default connect(mapStateToProps, { setRealm, incrementFlashcard, decrementFlashcard, setFlashCardsLength, deleteFlashcard, setIsPlaying, showFlashCardBottomPanel, showPlayButton})(FlashCardScreen)
