import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAXNusEbI3zQNvuypg8UEpcX-bVC2fWVv0",
        authDomain: "twitterpower-f6f25.firebaseapp.com",
        projectId: "twitterpower-f6f25",
        storageBucket: "twitterpower-f6f25.appspot.com",
        messagingSenderId: "527926500694",
        appId: "1:527926500694:web:8cdac363a74821ebb68af7",
        measurementId: "G-5VQCWP3VHN"
    })
}

export default firebase