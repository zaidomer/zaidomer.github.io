<?php

if(isset($_POST['Submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $my_email = "zaidomerone@gmail.com";
    $headers = "From: ".$email;
    $added_text = "The following email is from ".$name.".\n\n".$message;

    mail($my_email, $subject, $added_text, $headers);
    header("Location: index.html?mailsend");
}