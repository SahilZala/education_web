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
firebase.analytics();

fetchData();

function pushData(){
   var id =  firebase.database().ref("Subject").child(getUrlVars()).update(
        {
            subjectid: getUrlVars(),
            name: document.getElementById("subjectname").value,
            description: document.getElementById("subjectdescrip").value,
            type: document.getElementById("format").value,
            time: "time",
            date: "date",
        }
    );

    closeChat();
 
}

           

var global = 0;

function fetchData()
{
    var starCountRef = firebase.database().ref('Subject').child(getUrlVars());
    starCountRef.on('value', (snapshot) => {

        document.getElementById("subjectname").value=snapshot.val().name;
        document.getElementById("subjectdescrip").value=snapshot.val().description;
        document.getElementById("format").value=snapshot.val().type;
        document.getElementById("ftype").value=snapshot.val().ftype;
   
    });
}


function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars['subjectid'];
}


function closeChat() {
    document.getElementById("editmodel").style.display = "none";
    window.location.href = 'index.html';
  }