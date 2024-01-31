import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs0MWmOH4p1KeyqY36C34eCkZ_YB-MMZ8",
    authDomain: "center-of-being-f8be5.firebaseapp.com",
    databaseURL: "https://center-of-being-f8be5-default-rtdb.firebaseio.com",
    projectId: "center-of-being-f8be5",
    storageBucket: "center-of-being-f8be5.appspot.com",
    messagingSenderId: "1016366509012",
    appId: "1:1016366509012:web:45a574eea09414aadd4441"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  const colForms = collection(db, 'forms')



  // Send data to firebase

  const inputGrt1 = document.getElementById("grt1")
  const inputGrt2 = document.getElementById("grt2")
  const inputGrt3 = document.getElementById("grt3")
  const elaborate = document.getElementById("elaborate")
  const feedback = document.getElementById("feedback")
  
  const nextBtn1 = document.getElementById("btn-next1")

  nextBtn1.addEventListener("click", function() {

    addDoc(colForms, {
        grateful1: inputGrt1.value,
        grateful2: inputGrt2.value,
        grateful3: inputGrt3.value,
        elaborate: elaborate.value,
        feedback: feedback.value
    })

    console.log('added to database')

})


const listItemIds = ["grateful1", "grateful2", "grateful3", "elaborate", "feedback"];



