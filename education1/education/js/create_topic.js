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

function pushTopicData()
{
    var id =  firebase.database().ref("Topic").child(getUrlVars()).push(
        {
            topicid: "topicid",
            subjectid: getUrlVars(),
            name: document.getElementById("topicname").value,
            description: document.getElementById("topicdesc").value,
            type: document.getElementById("format").value,
            link: document.getElementById("topiclink").value,
            time: "time",
            date: "date",
            createdby: "admin",
            activation: "true"
        }
        
    );

    document.getElementById("topicname").value = "";
    document.getElementById("topicdesc").value = "";
    document.getElementById("topiclink").value = "";


    firebase.database().ref("Topic").child(getUrlVars()).child(id.key).update({topicid:id.key});
}

function fileInStorage()
{
    var v1 = document.getElementById("inputGroupFile02");

    console.log(v1.value);

    console.log(v1.files[0].name);


    document.getElementById("topiclink").value = "wait uploading is in progress";
 
      // Created a Storage Reference with root dir
      var storageRef = firebase.storage().ref();
      // Get the file from DOM
      var file = document.getElementById("inputGroupFile02").files[0];
      console.log(file);
      
      //dynamically set reference to the file name
      var thisRef = storageRef.child(file.name);

      //put request upload file to firebase storage
     var uploadTask = thisRef.put(file);
   
      uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        alert("File Uploaded");
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
          
        document.getElementById("topiclink").value = downloadURL;
        });
      }
    );
 
 
}


var global = 0;

function fetchData()
{
    var starCountRef = firebase.database().ref('Topic').child(getUrlVars());
    starCountRef.on('value', (snapshot) => {

        var list = [];
        var v3 = document.getElementById("tabel");
        
        const data = snapshot.val();
        console.log(JSON.stringify(data));
        console.log(typeof(data.to));

        const val = JSON.stringify(data);

        const data1 = JSON.parse(val);
            

        var v =``;
        for(var key in data1) {
            console.log("Key: " + key);
            list.push(key);
        }

        console.log(list);
        for(var i=0;i<list.length;i++)
        {
            
            v = v + `<tr>
                <td scope="row">`+(i+1)+`</td>
                <td>`+data1[list[i]]['name']+`</td>
                <td>`+data1[list[i]]['description']+`</td>
                <td>`+data1[list[i]]['type']+`</td>
                <td>`+data1[list[i]]['link']+`</td>
            </tr>`
            document.getElementById("tabel").innerHTML = v;

        }
    });
    
}
