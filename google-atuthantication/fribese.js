import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxhynDd0gP73vD_np8MYqXHGM6Y3IfEAs",
  authDomain: "fir-realtime-database-691ed.firebaseapp.com",
  databaseURL: "https://fir-realtime-database-691ed-default-rtdb.firebaseio.com",
  projectId: "fir-realtime-database-691ed",
  storageBucket: "fir-realtime-database-691ed.appspot.com",
  messagingSenderId: "928850165776",
  appId: "1:928850165776:web:049f2570dcfc6c265a0a95",
  measurementId: "G-929NG96L9B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;