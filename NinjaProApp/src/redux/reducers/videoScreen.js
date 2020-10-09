import { SET_ON_READY, SET_ON_CHANGE_STATE, SET_IS_PLAYING,
SET_TUTORIAL_TYPE, SET_LESSON_NUMBER, SET_VIDEO_ID, SET_REALM, SET_FLASHCARDS_LENGTH, INCREMENT_FLASHCARD, DECREMENT_FLASHCARD, DELETE_FLASHCARD, SET_FLASHCARDS_BY_TUTORIAL, SET_SEARCH_TEXT, TOGGLE_SAVE_FLASHCARD, SHOW_FLASHCARD_BOTTOM_PANEL, SHOW_PLAY_BUTTON} from '../actionTypes'

const initialState = {
    realm : null,
    onReady: false,
    status: null,
    isPlaying: false,
    tutorial: 'HTML',
    lesson: 1,
    video: 'xuCn8ux2gbs',
    flashcardPosition: 0,
    flashcardLength: 0,
    text: '',
    height: null,
    flashcardPanelHeight: null,
    showPlay: false
}

let newFlashcardPosition = 0
let newFlashcardLength = 0
export const videoReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ON_READY: 
        return {
          ...state, onReady: true  
        }
        case SET_ON_CHANGE_STATE:
        return {
            ...state, status: action.payload
        }
        case SET_IS_PLAYING:
            return {
                ...state, isPlaying: action.payload
            }
        case SET_TUTORIAL_TYPE:
            return {
                ...state, tutorial: action.payload
            }
        case SET_LESSON_NUMBER:
            return {
                ...state, lesson: action.payload
            }
        case SET_VIDEO_ID: 
            return {
                ...state, video: action.payload
            }
        case SET_REALM:
            return {
                ...state, realm: action.payload
            }
        case SET_FLASHCARDS_LENGTH:
            return {
                ...state, flashcardLength: action.payload
            }
        case INCREMENT_FLASHCARD: 

            return {
                ...state, flashcardPosition: state.flashcardPosition + 1
            }
        case DECREMENT_FLASHCARD: 
            return {
                ...state, flashcardPosition: state.flashcardPosition - 1
            }
        case DELETE_FLASHCARD:

            newFlashcardLength =  action.payload
            if(newFlashcardLength > 0 && state.flashcardPosition > 0) {
               newFlashcardPosition = state.flashcardPosition - 1
               return {
                   ...state, flashcardLength: newFlashcardLength, flashcardPosition: newFlashcardPosition
               }
            }
            return {
                ...state, flashcardLength: newFlashcardLength
            }
        case SET_FLASHCARDS_BY_TUTORIAL: 
            return {
                ...state, flashcardPosition: 0, flashcardLength: action.payload
            }
        case SET_SEARCH_TEXT:  
        return {
            ...state, text: action.payload
        }
        case TOGGLE_SAVE_FLASHCARD: 
        
        return {
            ...state, height: state.height === null ? (action.payload + 50) : null
        }
        case SHOW_FLASHCARD_BOTTOM_PANEL:

        return { 
            
            ...state, flashcardPanelHeight: state.flashcardPanelHeight === null ? 300 : null
        }
        case SHOW_PLAY_BUTTON:
        return {
            ...state, showPlay: action.payload
        }
        default: 
        return state
    }

} 

