import * as firebase from 'firebase/app';
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAvHHWbfT9uf2FIhSzFyPEZKMXPbUNZvWI",
    authDomain: "todo-app-with-react-55df2.firebaseapp.com",
    databaseURL: "https://todo-app-with-react-55df2.firebaseio.com",
    projectId: "todo-app-with-react-55df2",
    storageBucket: "todo-app-with-react-55df2.appspot.com",
    messagingSenderId: "790017707264",
    appId: "1:790017707264:web:e8141186688a9267b037e5",
    measurementId: "G-MY453DPZ1H"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);
  
