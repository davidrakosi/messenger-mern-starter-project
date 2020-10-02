import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // your Firebase credentials go here
})

const db = firebaseApp.firestore()

export default db