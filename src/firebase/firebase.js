import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyBZz1WwS0BcbMzwVgcMsz39e0cjE0fqSaw",
   authDomain: "example-blog-92949.firebaseapp.com",
   databaseURL: "https://example-blog-92949.firebaseio.com",
   projectId: "example-blog-92949",
   storageBucket: "example-blog-92949.appspot.com",
   messagingSenderId: "976924206887"
 };

 firebase.initializeApp(config);

 const database = firebase.database();

 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export { firebase, googleAuthProvider, database as default };
