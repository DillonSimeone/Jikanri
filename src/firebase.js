import firebase from '@firebase/app'
import '@firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDIgQpyG2uvuCxE5MEXGvha7VXlfblpi6k',
  authDomain: 'jikanri.firebaseapp.com',
  databaseURL: 'https://jikanri.firebaseio.com',
  projectId: 'jikanri',
  storageBucket: 'jikanri.appspot.com',
  messagingSenderId: '393532326704',
  appId: '1:393532326704:web:7fccf10ec5f955efca3ef5',
  scopes: ['email', 'profile', 'https://www.googleapis.com/auth/calendar'], // For google persmissions
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
  ] // To tell the google API client what libraries to load.
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
