<?php

$to = 'mail@mail.ru';
$from = $_GET['mail'];
$name = $_GET['name'];
$phone = $_GET['phone'];
$message = $_GET['message'];
$headers = 'From:"'.$from.'"' . "\r\n" . '"'.$phone.'"' . "\r\n" .
$out = '';

if ($from !== '' AND $name !== '' AND $phone !== '' AND $message !== '') {
    if (filter_var($from, FILTER_VALIDATE_EMAIL) !== false) {
        mail($to,$name,$message,$headers);
    }
    $out.= 'Не корректно введен Email';
    echo $out;
    exit();
}else{
    exit();
}

