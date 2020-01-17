import * as firebase from 'firebase/app'
import firebaseConfig from '@/config/firebase'

import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig)
