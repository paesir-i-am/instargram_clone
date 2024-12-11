import firebaseApp from 'firebase/compat';
import 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyApEHCHwKxNhjIbJTCwPd5F48ydWU6IT9c",
  authDomain: "instargram-p1.firebaseapp.com",
  databaseURL: "https://instargram-p1-default-rtdb.firebaseio.com",
  projectId: "instargram-p1",
  storageBucket: "instargram-p1.firebasestorage.app",
  messagingSenderId: "89895993935",
  appId: "1:89895993935:web:dded610a2ca6e61b71203a",
  measurementId: "G-7NBZN1GZDH"
};

firebaseApp.initializeApp(firebaseConfig);

export default firebaseApp
;