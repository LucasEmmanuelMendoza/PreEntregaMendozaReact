import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";

import App from './App.jsx'
import './index.css'
 
const firebaseConfig = {
  apiKey: "AIzaSyCoSZm5iI3uSNJN0eQLAl4oRdzHhjVNAeg",
  authDomain: "ecommercemendoza-a4374.firebaseapp.com",
  projectId: "ecommercemendoza-a4374",
  storageBucket: "ecommercemendoza-a4374.appspot.com",
  messagingSenderId: "902994270003",
  appId: "1:902994270003:web:bc1575f1f33877ac391046"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
