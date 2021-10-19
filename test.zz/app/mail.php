<?php header("Content-Type: text/html; charset=utf-8");?>
<?php

$name = $_POST['name']; //Имя
$middleName = $_POST['middlename']; //Отчество
$family = $_POST['family']; //Фамилия
$phone = $_POST['phone']; //Телефон
$sity = $_POST['sity']; // Город проживания
$profession = $_POST['profession']; // профессия
$invite = $_POST['invite']; // Кто пригласил
$work = $_POST['work']; // Где работал


$to      = 'mail@mega-skill.ru, evgeny@mega-skill.ru';
$subject = 'mega-skill.ru';
// ======================
$message = '
<html>
<head>
  <title>'."$subject".'</title>
</head>
<body>
<p><strong>Имя:</strong> '."$name".'</p><br>
<p><strong>Фамилия:</strong> '."$family".'</p><br>
<p><strong>Отчество:</strong> '."$middleName".'</p><br>
<p><strong>Контактный телефон:</strong> '."$phone".'</p><br>
<p><strong>Город проживания:</strong> '."$sity".'</p><br>
<p><strong>Специализация:</strong> '."$profession".'</p><br>
<p><strong>Кто пригласил:</strong> '."$invite".'</p><br>
<p><strong>Где работал:</strong> '."$work".'</p>
</body>
</html>
';
// ======================
// $message = 'Имя:'.$name. "\r\n" .'Отчество:'.$middleName. "\r\n" .'Фамилия:'.$family. "\r\n" .'Телефон:'.$phone. "\r\n".'Город проживания:'.$sity."\r\n".'Кто пригласил:'.$invite."\r\n".'Где работал:'.$work."\r\r";
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8";

mail($to, $subject, $message, $headers);
// header('Location: /');
?>