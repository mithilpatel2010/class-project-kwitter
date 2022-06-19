var firebaseConfig = {
    apiKey: "AIzaSyAV827VqxWiVoCfWmGY0fjVlT1Bf6pFEvs",
    authDomain: "class-kwitter-project.firebaseapp.com",
    databaseURL: "https://class-kwitter-project-default-rtdb.firebaseio.com",
    projectId: "class-kwitter-project",
    storageBucket: "class-kwitter-project.appspot.com",
    messagingSenderId: "712800977759",
    appId: "1:712800977759:web:c2d76ae9da092819f3ecea"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    firebase.database().ref("/").child(user_name).update({
         purpose : "adding user"
    });
    window.location = "kwitter_room.html";
    }
    
