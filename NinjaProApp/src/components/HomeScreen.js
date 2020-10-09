import React from 'react' 
import{ StyleSheet, View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import TutorialList from './TutorialList'
import { connect } from 'react-redux'
import { setSearchText}  from '../redux/actions'
import SearchBar from './SearchBar.js'
const HomeScreen = (props) => {
  const { navigation } = props
    return(
        <SafeAreaView style={{height: '100%'}}>
          <SearchBar searchContainer={styles.searchContainer} icon={styles.icon} search={styles.search}/>
            <View style={styles.container}>
              <TutorialList navigation={navigation}/>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
        
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderColor: 'grey',
    borderBottomWidth: 2,
    flexDirection: 'row'
  },
icon: {
    flex: 1,
    height: 50,
    borderRightWidth: 2
},
search: {
    flex: 6,
    height: 50,
    marginLeft: 10,
    fontSize: 25
}
})
const mapStateToProps = (state) => {
  return { text: state.text }
}
export default connect(mapStateToProps, { setSearchText })(HomeScreen)