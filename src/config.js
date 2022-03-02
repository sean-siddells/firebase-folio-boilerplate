import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

//use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig)

//use these for db & auth
const storage = getStorage(firebaseApp)
const auth = getAuth(firebaseApp)


// export function getFirebaseConfig () {
//   if (!config || !config.apiKey) {
//     throw new Error('No Firebase configuration object provided.' + '\n' +
//     'Add your web app\'s configuration object to firebase-config.js')
//   } else {
//     return config
//   }
// }
export { auth, storage }