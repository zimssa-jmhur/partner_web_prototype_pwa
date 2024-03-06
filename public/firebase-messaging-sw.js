// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyDYY3Q1IYW8z8Gm9FAGmZlK_EICfdaZixA',
  authDomain: 'partner-168dc.firebaseapp.com',
  projectId: 'partner-168dc',
  storageBucket: 'partner-168dc.appspot.com',
  messagingSenderId: '564991421249',
  appId: '1:564991421249:web:f587145b3fb645cb838fc0',
  measurementId: 'G-CXJLH8ZLTL',
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
