
var firebaseConfig = {
    apiKey: "AIzaSyCX5E1R61Sl5Zi6Jo3Cl1_g-151ga-lDRc",
    authDomain: "krashcompany-c0534.firebaseapp.com",
    databaseURL: "https://krashcompany-c0534-default-rtdb.firebaseio.com",
    projectId: "krashcompany-c0534",
    storageBucket: "krashcompany-c0534.appspot.com",
    messagingSenderId: "682402474385",
    appId: "1:682402474385:web:f560625ab1b99206411230",
    measurementId: "G-L35BXKQ6LF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});