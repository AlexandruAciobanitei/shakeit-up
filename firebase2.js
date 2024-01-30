import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs0MWmOH4p1KeyqY36C34eCkZ_YB-MMZ8",
  authDomain: "center-of-being-f8be5.firebaseapp.com",
  databaseURL: "https://center-of-being-f8be5-default-rtdb.firebaseio.com",
  projectId: "center-of-being-f8be5",
  storageBucket: "center-of-being-f8be5.appspot.com",
  messagingSenderId: "1016366509012",
  appId: "1:1016366509012:web:45a574eea09414aadd4441",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colForms = collection(db, "forms");

const listItemIds = [
  "grateful1",
  "grateful2",
  "grateful3",
  "elaborate",
  "feedback",
];

// Fetch data from firebase
function addItemsToList() {
  const listElement = document.getElementById("list");
  getDocs(colForms)
    .then((querySnapshot) => {
      const docsArray = querySnapshot?.docs;
      // Get random document from array
      const randomDoc = docsArray[Math.floor(Math.random() * docsArray.length)];
      // Get doc data
      const data = randomDoc?.data();
      // console.log(data);
      listItemIds.forEach((id, index) => {
        const listItem = document.getElementById(id);
        if (listItem) {
          listItem.textContent = data[id] || "";
        }
      });
    })
    .catch((error) => {
      console.error("Error getting documents", error);
    });
}

document.addEventListener("DOMContentLoaded", addItemsToList);
