import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBpqyFYpcQcf7EGELt311cS6Y4YFNWkwJo",
    authDomain: "instagram-clone-e5efd.firebaseapp.com",
    projectId: "instagram-clone-e5efd",
    storageBucket: "instagram-clone-e5efd.appspot.com",
    messagingSenderId: "5176244831",
    appId: "1:5176244831:web:c923082eec6f9a489e79ea"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };