import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
firebase.initializeApp({
    apiKey: "AIzaSyCQjybgNqRmMOpTr5qKY9GSJrQ43DWAVgk",
  authDomain: "ticket-66fbf.firebaseapp.com",
  projectId: "ticket-66fbf",
});
var db = firebase.firestore();
export default db;
