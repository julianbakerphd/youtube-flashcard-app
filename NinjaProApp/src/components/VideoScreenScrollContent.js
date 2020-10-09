import React, { Component } from 'react'
import { StyleSheet, ScrollView, Alert } from 'react-native'
import VideoScreenItems from './VideoScreenItems'
import { connect } from 'react-redux'
import { setVideoId, setRealm, setFlashCardsLength, setFlashcardsByTutorial  } from '../redux/actions'
import data from '../data/data.json'
import Realm from 'realm'


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

 

class VideoScreenScrollContent extends Component {
    constructor(props) {
        super(props)
        this.codeList = null
    }
 
componentDidMount() {
    Realm.open({schema: [CodeSchema]})
            .then(realm => {
                let Code = realm.objects('Code').filtered('tutorial == $0', this.props.tutorial)
                this.props.setFlashcardsByTutorial(Code.length)
                this.props.setRealm(realm)
              
            
            })
         
    } 

    componentWillUnmount() {
        const { realm } = this.props
        if (realm !== null && !realm.isClosed) {
            realm.close() 
        }
        
    }
       
    saveToFlashCards = (datum) => {
        const { realm } = this.props
            realm.write(() => {
                realm.create('Code',{
                    id: datum.id,
                    tutorial: datum.tutorial,
                    lesson: datum.lesson,
                    seconds: datum.seconds, 
                    video: datum.video,
                    code: datum.code
                }, true)
                Alert.alert(datum.id + ' was saved.')
            })

        let Code = realm.objects('Code').filtered('tutorial == $0', this.props.tutorial)
        this.props.setFlashCardsLength(Code.length)

    }


 

    render() {

        console.log('RENDER')
        this.codeList = data.map((datum, index) => {

            if((datum.tutorial === this.props.tutorial) && (datum.lesson === this.props.lesson)) {
                this.props.setVideoId(datum.video) 
                return (<VideoScreenItems containerList={styles.containerList} codeStyle={styles.codeStyle} key={index} onPress={() => {this.saveToFlashCards(datum)}} content={datum.code}  />)

            }
                
       
        })

        return(
        
                <ScrollView contentContainerStyle={styles.container}>
                {this.codeList}
                </ScrollView>
           
            
        )
    }
}

styles = StyleSheet.create({
    container: {

        marginHorizontal: 10,
        padding: 10,
    },
    containerList: {
        padding: 10,
        marginTop: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 10,
        overflow: 'hidden' 

    },
    codeStyle: {
        fontSize: 16
    }

     
    
})

const mapStateToProps = (state) => {
    return { tutorial: state.tutorial,
            lesson: state.lesson,
            realm: state.realm }
}

export default connect(mapStateToProps, { setVideoId, setRealm, setFlashCardsLength, setFlashcardsByTutorial })(VideoScreenScrollContent)