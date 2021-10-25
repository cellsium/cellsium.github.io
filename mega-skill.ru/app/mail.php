<?php header("Content-Type: text/html; charset=utf-8");?>
<?php

$name = $_POST['name']; //Имя
$middleName = $_POST['middlename']; //Отчество
$family = $_POST['family']; //Фамилия
$phone = $_POST['phone']; //Телефон
$sity = $_POST['sity']; // Город проживания
$invite = $_POST['invite']; // Кто пригласил
$work = $_POST['work']; // Где работал
$skill = $_POST['skill']; // опыт работы
$trip = $_POST['trip']; // Готовность к командировкам (да/нет)
$team = $_POST['team']; // Работа в коллективе
$group = $_POST['group']; // Своя бригада людей


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
<p><strong>Кто пригласил:</strong> '."$invite".'</p><br>
<p><strong>Где работал:</strong> '."$work".'</p>
<p><strong>опыт работы:</strong> '."$skill".'</p>
<p><strong>Готовность к командировкам (готов/не готов):</strong> '."$trip".'</p>
<p><strong>Опыт работы в коллективе (есть/нету):</strong> '."$team".'</p>
<p><strong>Своя бригада людей (колличество/нету):</strong> '."$group".'</p>
</body>
</html>
';
// ======================
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8";

mail($to, $subject, $message, $headers);
// header('Location: /');
?>