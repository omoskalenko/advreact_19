import firebase from 'firebase'

export const appName = 'advreact-fed59'

const firebaseConfig = {
  apiKey: "AIzaSyCIDorbS3hcDG3EVk2P6dmvRtiWHCiqUns",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "256442179639",
  appId: "1:256442179639:web:d9bbe3da64fba31b559fb2",
  measurementId: "G-BPBC2FPY9Y"
}


firebase.initializeApp(firebaseConfig)
