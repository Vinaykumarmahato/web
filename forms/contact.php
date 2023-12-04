<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Set up recipient email address
    $to = "advindiancoder@gmail.com"; // Replace with your Gmail address

    // Set up email headers
    $headers = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Compose the email message
    $email_message = "You have received a new message from your website contact form.\n\n";
    $email_message .= "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n";
    $email_message .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $email_message, $headers);

    
}
?>
