<?php
function sendNotification(){
    $url ="https://fcm.googleapis.com/fcm/send";

    $fields=array(
        "to"=>$_REQUEST['token'],
        "notification"=>array(
            "body"=>$_REQUEST['message'],
            "title"=>$_REQUEST['title'],
            "icon"=>$_REQUEST['icon'],
            "click_action"=>"https://google.com"
        )
    );

    $headers=array(
        'Authorization: key=AAAAnuJbaZE:APA91bEWmwMQTp6VUYqscRHXqdyjpENalasTThSXBH-kIuCxclTtVhGwa-uqgOtmkAZZk92gt7yNeRVQWt9qNP8Zjyz86U7VonxsLfy9cdf-aMz5KhHd-Eca3DsfrNONJiy-6KqPpXMO',
        'Content-Type:application/json'
    );

    $ch=curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,true);
    curl_setopt($ch,CURLOPT_HTTPHEADER,$headers);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($fields));
    $result=curl_exec($ch);
    print_r($result);
    curl_close($ch);
}
sendNotification();