import React, { Component } from 'react' 
import { Provider } from 'react-redux'
import store from '../redux/store'
import NavigationComponent from './NavigationComponent'

export default class App extends Component {

  render(){
    return(
      <Provider store={store}>
        <NavigationComponent />
      </Provider>
    )
  }
}

  