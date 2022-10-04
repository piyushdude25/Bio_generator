import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwjQYYPBmxbB00eZocGRH41D1qsIjABrY",
  authDomain: "bio-generator-9659c.firebaseapp.com",
  projectId: "bio-generator-9659c",
  storageBucket: "bio-generator-9659c.appspot.com",
  messagingSenderId: "473147550412",
  appId: "1:473147550412:web:514d9e4d9374d3c13e7069",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase)
  )
); //binding for redux to get firestore

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
