import React from 'react'
import { StyleSheet, ScrollView, View, Text, Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { setLessonNumber } from '../redux/actions'
import { connect } from 'react-redux'

const lessons = [1, 2, 3, 4, 5, 6, 7]

const CustomDrawerContent = (props) => {
   const lessonList = lessons.map((lesson, index) =>{
    return(
      <Button 
      key ={index}
      title= {"Lesson " + lesson}
      onPress={() => {props.setLessonNumber(lesson)}}
      />
    )
  })
  return (
  <ScrollView contentContainerStyle={styles.container}>
    {lessonList}
  </ScrollView>
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '2%',
    marginTop: '2%',
    alignItems: 'flex-start'
  },
});


export default connect(null, { setLessonNumber })(CustomDrawerContent)