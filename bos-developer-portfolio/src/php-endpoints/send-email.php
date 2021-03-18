<?php
    session_start();
    header('Access-Control-Allow-Origin: *');  
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Methods: POST');

    define ('RECEPIENT_EMAIL','boskyle.orendain@gmail.com');
    
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content,true);
  
    $header_to_developer = 'From: '. $decoded['email'];
    // echo $clientEmail;
    if (mail(RECEPIENT_EMAIL,$decoded['subject'],$decoded['message'],$header_to_developer) == true) {
        echo 'email sent';
    } else { echo 'email sent failed';}
  
?>