<?php
if (!getUser()) {
    header('location: /');
}
if (isset($_POST['unlog'])) {
    clearCookies();
    header('location: /');
    exit();
}
if (isset($_POST)) {
    $updId = 0;
    foreach ($_POST as $key => $value) {
        $updId = $key;
    }
    update($updId,$_POST['name'],$_POST['email'],$_POST['message']);
}
require_once 'template/header.php';
?>

<div class="container">
    <h1>admin</h1>
    <form method="POST">
        <input class="btn btn-success btn-sm" type="submit" name="unlog" value="выйти">
    </form>
    <div class="row">
        <?php
        $out = '';
        for ($i = 0; $i < count($result); $i++) {
            $out .= '<div class="col-sm-4">';
            $out .= '<div class="card">';
            $out .= '<div class="card-body">';
            $out .= '<form method="POST">';
            $out .= '</form>';
            $out .= checked($result[$i]["id"]);
            $out .= '<h5 class="card-title">' . $result[$i]['name'] . '</h5>';
            $out .= '<p class="card-text">' . $result[$i]['email'] . '</p>';
            $out .= '<p class="card-text">' . $result[$i]['message'] . '</p>';
            $out .= '<form method="POST">';
            $out .= '<input type="text" name="name" required placeholder="Имя"><br>';
            $out .= '<input type="text" name="email" required placeholder="Email"><br>';
            $out .= '<input type="text" name="message" required placeholder="Сообщение"><br>';
            $out .= '<input class="btn btn-success btn-sm" type="submit" name="'.$result[$i]['id'].'" value="отправить">';
            $out .= '</form>';
            $out .= '</div>';
            $out .= '</div>';
            $out .= '</div>';
        }
        echo $out;
        ?>
    </div>
</div>
