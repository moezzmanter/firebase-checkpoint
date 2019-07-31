document.querySelector("#product-form").addEventListener("submit" , function(e){
    e.preventDefault()
    Submitinfo()
})



 var firebaseConfig = {
    apiKey: "AIzaSyB7yDUZuS7RMjGyIAFISml1t94Cz1CfPH4",
    authDomain: "project-532ca.firebaseapp.com",
    databaseURL: "https://project-532ca.firebaseio.com",
    projectId: "project-532ca",
    storageBucket: "",
    messagingSenderId: "996774820902",
    appId: "1:996774820902:web:395c30c654188f59"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // 1/import libraries

  // 2/ create database var
  
     let database = firebase.database ()
function Submitinfo(){
  // 3/ set reference 
    let ref = database.ref("info/" + document.querySelector("#course-select").value)
    

  // 4/ prepare data
        let data = {
            name : document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            phonenumber: document.querySelector("#phonenumber").value,
            shcool: document.querySelector("#unischool").value,
            course: document.querySelector("#course-select").value
        }
     

  // 5/ upload data    
     ref.push(data)
}

