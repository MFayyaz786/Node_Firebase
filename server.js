// server.js
const express = require("express");
const server = express();
const PORT = process.env.PORT || 3045;
const { getFirestore, collection, doc, getDoc } = require("firebase/firestore");
// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZSZhIGMuudDqb_heDclzvx5Ae6skCdAc",
  authDomain: "pushnotification-fc04f.firebaseapp.com",
  databaseURL:
    "https://pushnotification-fc04f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pushnotification-fc04f",
  storageBucket: "pushnotification-fc04f.appspot.com",
  messagingSenderId: "211141631968",
  appId: "1:211141631968:web:c81724501907a03d065585",
  measurementId: "G-JXPCWT6M5E",
};

async function initializeFirebase() {
  try {
    const app = initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app); // Initialize analytics if needed

    console.log("Firebase initialized successfully");
    return app;
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
}

async function fetchDataFromFirebase() {
  try {
    const firebaseApp = await initializeFirebase();
    const db = getFirestore(firebaseApp);
    // Reference to the Firebase database path you want to fetch data from
    const docRef = doc(db, "users", "fuR4r9pjlnBjgkAfSbzT");
    // Fetch data from the specified document
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      console.log("Document data:", docSnapshot.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
  }
}
// Start the Express server after initializing Firebase
initializeFirebase().then(() => {
  server.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await fetchDataFromFirebase();
  });
});
