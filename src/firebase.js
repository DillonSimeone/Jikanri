import firebase from '@firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDIgQpyG2uvuCxE5MEXGvha7VXlfblpi6k',
  authDomain: 'jikanri.firebaseapp.com',
  databaseURL: 'https://jikanri.firebaseio.com',
  projectId: 'jikanri',
  storageBucket: 'jikanri.appspot.com',
  messagingSenderId: '393532326704',
  appId: '1:393532326704:web:7fccf10ec5f955efca3ef5'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
