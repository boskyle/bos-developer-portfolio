<?php
    session_start();
    define ('RECEPIENT_EMAIL','boskyle.orendain@gmail.com');

    $clientEmail = $_POST['email'];
    $clientSubject = $_POST['subject'];
    $clientMessage = $_POST['message'];

    $header_to_developer = 'From: '. $clientEmail;
    echo $clientEmail;

    mail(RECEPIENT_EMAIL,$clientSubject,$clientMessage,$header_to_developer);
?>