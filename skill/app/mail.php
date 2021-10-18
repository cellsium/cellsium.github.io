<?php

$name = $_POST['name']; //Имя
$middleName = $_POST['middlename']; //Отчество
$family = $_POST['family']; //Фамилия
$phone = $_POST['phone']; //Телефон
$sity = $_POST['sity']; // Город проживания
$invite = $_POST['invite']; // Кто пригласил
$work = $_POST['work']; // Где работал


$to      = 'electr0ivan@mail.ru';
$subject = 'SKILL';
$message = 'hello';
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>