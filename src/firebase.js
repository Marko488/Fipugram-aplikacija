import firebase from "firebase/app";
import {} from "firebase/auth";
import {} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBktu28FjEQxKK5UAl8BY6iQrIfNbTocUo",
  authDomain: "fipugram-b4b68.firebaseapp.com",
  projectId: "fipugram-b4b68",
  storageBucket: "fipugram-b4b68.appspot.com",
  messagingSenderId: "916423434622",
  appId: "1:916423434622:web:7fb194d65c6cca6b89532f",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
