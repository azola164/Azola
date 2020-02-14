// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyAVJC_b9qFJRpkoOmP2L82PNj0DOygATNo",
    authDomain: "mjanywa.firebaseapp.com",
    databaseURL: "https://mjanywa.firebaseio.com",
    projectId: "mjanywa",
    storageBucket: "mjanywa.appspot.com",
    messagingSenderId: "307826043072",
    appId: "1:307826043072:web:74c3196f29b7a0867e6525",
    measurementId: "G-R0ZXE303NK"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, subject);
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, subject){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      subject:subject,
    })
  }
}