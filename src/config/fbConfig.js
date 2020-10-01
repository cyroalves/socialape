  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyAl3i2FIitvUaL42PsMj4TdpqpKzJaNTtk",
    authDomain: "socialape-e6477.firebaseapp.com",
    databaseURL: "https://socialape-e6477.firebaseio.com",
    projectId: "socialape-e6477",
    storageBucket: "socialape-e6477.appspot.com",
    messagingSenderId: "49472426942",
    appId: "1:49472426942:web:fc50571d53ca2b4a481fef",
    measurementId: "G-C1FL8BL0TC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 firebase.firestore().settings({ timestampsInSnapshots: true });

 export default firebase;
