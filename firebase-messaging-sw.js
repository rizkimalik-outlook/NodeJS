// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
var firebaseConfig = {
    apiKey: "AIzaSyAlHBb_-x4Ap4BR9w8D_PIQIe4JlvMSD78",
    authDomain: "addo-dev-notification.firebaseapp.com",
    databaseURL: "https://addo-dev-notification.firebaseio.com",
    projectId: "addo-dev-notification",
    storageBucket: "addo-dev-notification.appspot.com",
    messagingSenderId: "339310764987",
    appId: "1:339310764987:web:84d25fc58915744e55da9e",
    measurementId: "G-7HJF2VL1CZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
