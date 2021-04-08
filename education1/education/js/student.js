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

           

function fetchData()
{
    var starCountRef = firebase.database().ref('UserData');
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
                <td>`+data1[list[i]]['username']+`</td>
                <td>`+data1[list[i]]['mobileno']+`</td>
                <td>`+data1[list[i]]['mail']+`</td>
                <td>`+data1[list[i]]['points']+`</td>
                <td><button type="button" style="margin:0px!important" class="btn btn-primary" onclick="activeDeactive('`+data1[list[i]]['userid']+`','`+data1[list[i]]['activation']+`');">`+data1[list[i]]['activation']+`</button></td>  
             
                <td><button type="button" style="margin:0px!important" class="btn btn-info" onclick="paidUnpaid('`+data1[list[i]]['userid']+`','`+data1[list[i]]['paidunpaid']+`');">`+data1[list[i]]['paidunpaid']+`</button></td>  
            </tr>`
            document.getElementById("tabel").innerHTML = v;


           
            
        }
    });
    
}


function activeDeactive(userid,active){
  
    if(active == 'true'){
        firebase.database().ref("UserData").child(userid).update({activation:'false'});
    }
    else{
        firebase.database().ref("UserData").child(userid).update({activation:'true'});
    }

}

function paidUnpaid(userid,active){
  
    if(active == 'paid'){
        firebase.database().ref("UserData").child(userid).update({paidunpaid:'unpaid'});
    }
    else{
        firebase.database().ref("UserData").child(userid).update({paidunpaid:'paid'});
    }
    

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

function pushTopicData()
{
    var id =  firebase.database().ref("Topic").push(
        {
            topicid: "topicid",
            subjectid: getUrlVars(),
            name: 'document.getElementById("topicname").value',
            description: 'document.getElementById("topicdescrip").value',
            type:' document.getElementById("format").value',
            ftype:' document.getElementById("ftype").value',
             user_status:' document.getElementById("user_status").value',
              edit:' Edit',
                delete:' Delete',
            link: "link",
            time: "time",
            date: "date",
            createdby: "admin",
            activation: "true"
        }
    );



    firebase.database().ref("Subject").child(id.key).update({topicid:id.key});
}

function fileInStorage()
{
    var v1 = document.getElementById("inputGroupFile02");
    console.log(v1.value);
    // Create a root reference
    var storageRef = firebase.storage().ref();

    // Create a reference to 'mountains.jpg'
    var mountainsRef = storageRef.child('mountains.jpg');

    // Create a reference to 'images/mountains.jpg'
    var mountainImagesRef = storageRef.child('images/mountains.jpg');

    // While the file names are the same, the references point to different files
    mountainsRef.name === mountainImagesRef.name;           // true
    mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 
}



