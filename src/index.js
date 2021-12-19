import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/compat/app"; 
import './js/firebaseConfig.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DrinkModel from './js/drinkModel.js';
import {PersistModel, REF} from './js/firebaseModel.js';

const myModel = new DrinkModel();
PersistModel(myModel);
firebase.database().ref(REF).once("value").then( ()=>
ReactDOM.render(<App model={myModel} />,document.getElementById("root")));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default myModel;