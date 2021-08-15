import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhFZeT1abdmupj9T52vpcecY2DmRPcRic",
  authDomain: "clone-c096c.firebaseapp.com",
  projectId: "clone-c096c",
  storageBucket: "clone-c096c.appspot.com",
  messagingSenderId: "394202182862",
  appId: "1:394202182862:web:ad3c1dce61ec850bf48c9f",
  measurementId: "G-Q0NV7V9ZQ5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
