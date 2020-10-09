import {SET_ON_READY, SET_ON_CHANGE_STATE, SET_IS_PLAYING, SET_TUTORIAL_TYPE, SET_LESSON_NUMBER, SET_VIDEO_ID, SET_REALM, INCREMENT_FLASHCARD, DECREMENT_FLASHCARD, SET_FLASHCARDS_LENGTH, DELETE_FLASHCARD, SET_FLASHCARDS_BY_TUTORIAL, SET_SEARCH_TEXT, TOGGLE_SAVE_FLASHCARD, SHOW_FLASHCARD_BOTTOM_PANEL, SHOW_PLAY_BUTTON } from './actionTypes'

export const setOnReady = () => ({
    type: SET_ON_READY
})

export const setOnChangeState = (e) => ({
    type: SET_ON_CHANGE_STATE,
    payload: e.state

})

export const setIsPlaying = (isPlaying) => ({
    type: SET_IS_PLAYING,
    payload: isPlaying
})

export const setTutorialType = (tutorial) => ({
    type: SET_TUTORIAL_TYPE,
    payload: tutorial

})

export const setLessonNumber = (lesson) => ({
    type: SET_LESSON_NUMBER,
    payload: lesson
})

export const setVideoId = (video) => ({
    type: SET_VIDEO_ID,
    payload: video
})

export const setRealm = (realm) => ({
    type: SET_REALM,
    payload: realm
})


export const setFlashCardsLength = (length) => ({
    type: SET_FLASHCARDS_LENGTH,
    payload: length
})
export const incrementFlashcard = () => ({
    type: INCREMENT_FLASHCARD
})

export const decrementFlashcard = () => ({
    type: DECREMENT_FLASHCARD
})

export const deleteFlashcard = (length) => ({
    type: DELETE_FLASHCARD,
    payload: length
})

export const setFlashcardsByTutorial = (length) => ({
    type: SET_FLASHCARDS_BY_TUTORIAL,
    payload: length
})

export const setSearchText = (text) => ({
    type: SET_SEARCH_TEXT,
    payload: text
})
export const toggleSaveFlashcard = (height) => ({
    type: TOGGLE_SAVE_FLASHCARD,
    payload: height
})
export const showFlashCardBottomPanel = () => ({
    type: SHOW_FLASHCARD_BOTTOM_PANEL
})
export const showPlayButton = (showPlay) => ({
    type: SHOW_PLAY_BUTTON,
    payload: showPlay
})