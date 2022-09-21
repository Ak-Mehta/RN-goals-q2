import React from 'react';
import ChatApp from './src/ChatApp';

// Your web app's Firebase configuration

// Initialize Firebase

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {SafeAreaView} from 'react-native';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCgzyR2SDrzKXq6PP869nGbA3QNZxl9y-c',
  authDomain: 'goals2-f70d3.firebaseapp.com',
  databaseURL: 'https://goals2-f70d3-default-rtdb.firebaseio.com',
  projectId: 'goals2-f70d3',
  storageBucket: 'goals2-f70d3.appspot.com',
  messagingSenderId: '942892729999',
  appId: '1:942892729999:web:aabccbb89d4f3260c912fa',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
  return (
    <SafeAreaView>
      <ChatApp />
    </SafeAreaView>
  );
};

export default App;
