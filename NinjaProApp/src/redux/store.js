import { createStore } from 'redux'
import { videoReducer } from './reducers/videoScreen'

export default createStore(videoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),)