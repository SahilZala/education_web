
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

const messaging = firebase.messaging();


messaging.requestPermission()
.then(function(){
    console.log("Notification Permission");
    return messaging.getToken();

}).then(function (token){

    console.log(token);
}).catch(function (reason){
    console.log("Reason: "+reason);
    
});


// function initializingBaseMassaging()
// {
// }

// messaging.onMessage(function  (payload){
//     console.log(payload);
// })


// messaging.onTokenRefresh(function (){
//     messaging.getToken().then(function (newToken){
//         console.log("New Token : "+newToken)
//     }).catch(function (reason){
//         console.log(reason);
//     })
// })


// initializingBaseMassaging();


messaging.setBackgroundMessaginHandler(function (payload){
    console.log(payload);
})


fetchData();

function pushData(){
   var id =  firebase.database().ref("Subject").push(
        {
            subjectid: "id",
            name: document.getElementById("subjectname").value,
            description: document.getElementById("subjectdescrip").value,
            type: document.getElementById("format").value,
            ftype: document.getElementById("ftype").value,
            time: "time",
            date: "date",
            createdby: "admin",
            activation: "true"
        }
    );



    firebase.database().ref("Subject").child(id.key).update({subjectid:id.key});
 
}

           

var global = 0;

function fetchData()
{
    var starCountRef = firebase.database().ref('Subject');
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
                <td><a href=topic.html?subjectid=`+list[i]+`>`+data1[list[i]]['name']+`</a></td>
                <td>`+data1[list[i]]['description']+`</td>
                <td>`+data1[list[i]]['type']+`</td>
                <td><button type="button" style="margin:0px!important" class="btn btn-info" onclick="paidFree('`+data1[list[i]]['subjectid']+`','`+data1[list[i]]['ftype']+`');">`+data1[list[i]]['ftype']+`</button></td>  
                <td><button onclick=" window.location.href='edit.html?subjectid=`+list[i]+`'" style="margin:0px!important" class="btn btn-success">Edit</button></td>
                <td><button onclick="deleteData('`+data1[list[i]]['subjectid']+`')" type="button" style="margin:0px!important" class="btn btn-danger">Delete</button></td>
                <td><button type="button" style="margin:0px!important" class="btn btn-primary" onclick="activeDeactive('`+data1[list[i]]['subjectid']+`','`+data1[list[i]]['activation']+`');">`+data1[list[i]]['activation']+`</button></td>  
            </tr>`
            document.getElementById("tabel").innerHTML = v;


            //     var tr = document.createElement("tr");

            //     var td1 = document.createElement("td");
            //     var td2 = document.createElement("td");
            //     var td3 = document.createElement("td");
            //     var td4 = document.createElement("td");
            //     var td5 = document.createElement("td");
            //      var td6 = document.createElement("td");
            //        var td7 = document.createElement("td");
            //         var td8 = document.createElement("td");

            //     var a = document.createElement('a');  

            //     a.onclick = console.log("saj");                   
            //     var e1 = document.createTextNode(i+1);
            //     var e2 = document.createTextNode(data1[list[i]]['name']);
            //     var e3 = document.createTextNode(data1[list[i]]['description']);
            //     var e4 = document.createTextNode(data1[list[i]]['type']);
            //     var e5 = document.createTextNode(data1[list[i]]['ftype']);
            //     var e6 = document.createTextNode(data1[list[i]]['user_status']);
            //     var e7 = document.createTextNode(data1[list[i]]['edit']);
            //      var e8 = document.createTextNode(data1[list[i]]['delete']);

            //     a.appendChild(e2);  
                    
            //     td1.appendChild(e1);
            //     td2.appendChild(a);
            //     a.href = "topic.html?subjectid="+list[i];
                
            //     td3.appendChild(e3);
            //     td4.appendChild(e4);
            //     td5.appendChild(e5);
            //      td6.appendChild(e6);
            //      td7.appendChild(e7);
            //       td8.appendChild(e8);

                    
            //     tr.appendChild(td1);
            //     tr.appendChild(td2);
            //     tr.appendChild(td3);
            //     tr.appendChild(td4);
              
            //      tr.appendChild(td6);
            //      tr.appendChild(td7);
            //        tr.appendChild(td8);
            //        tr.appendChild(td5);
                   
                    
            //     v3.appendChild(tr);

            
        }
    });
    
}


function activeDeactive(subjectid,active){
  
    if(active == 'true'){
        firebase.database().ref("Subject").child(subjectid).update({activation:'false'});
    }
    else{
        firebase.database().ref("Subject").child(subjectid).update({activation:'true'});
    }

}

function paidFree(subjectid,active){
  
    if(active == 'Paid'){
        firebase.database().ref("Subject").child(subjectid).update({ftype:'Free'});
    }
    else{
        firebase.database().ref("Subject").child(subjectid).update({ftype:'Paid'});
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




function deleteData(id){
    firebase.database().ref("Subject").child(id).remove();
    firebase.database().ref("Topic").child(id).remove();

    
}