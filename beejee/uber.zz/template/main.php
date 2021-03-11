<?php
if (isset($_POST['submit'])) {
    $user = login($_POST['login'], $_POST['password']);
    if ($user) {
        $user = $user[0];
        $hash = md5(generateCode(10));
        updateUser($user['id'], $hash);
        setcookie('id', $user['id'], time() + 60 * 60 * 24 * 30, "/");
        setcookie('hash', $hash, time() + 60 * 60 * 24 * 30, "/");
        header('location: /admin');
        exit();
    }
}
if (isset($_POST['publication'])) {
    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        publication($_POST['name'], $_POST['email'], $_POST['message']);
        header('location: /');
        exit();
    }else{
        echo '<h1>не корректно введен email</h1>';
        exit();
    }
};
if (isset($_POST)) {
    foreach ($_POST as $key => $value) {
        delete($key);
        header('location: /');
    }
}


require_once 'template/header.php';
?>
<div class="container">
    <form method="POST">
        login: <input type="text" name="login" required>
        Pass: <input type="password" name="password" required>
        <input class="btn btn-success btn-sm" type="submit" name="submit" value="войти">
    </form>
    <div class="row">
        <?php
        $out = '';
        for ($i = 0; $i < count($result); $i++) {
            $out .= '<div class="col-sm-4">';
            $out .= '<div class="card">';
            $out .= '<div class="card-body">';
            $out .= '<form method="POST">';
            $out .= '<input class="btn-close" type="submit" name="'.$result[$i]['id'].'" value="">';
            $out .= '</form>';
            $out .= checked($result[$i]["id"]);
            $out .= '<h5 class="card-title">' . $result[$i]['name'] . '</h5>';
            $out .= '<p class="card-text">' . $result[$i]['email'] . '</p>';
            $out .= '<p class="card-text">' . $result[$i]['message'] . '</p>';
            $out .= '</div>';
            $out .= '</div>';
            $out .= '</div>';
        }
        echo $out;
        ?>
    </div>
    <form method="POST">
        <input type="text" name="name" required placeholder="Имя"><br>
        <input type="text" name="email" required placeholder="Email"><br>
        <input type="text" name="message" required placeholder="Сообщение"><br>
        <input class="btn btn-success btn-sm" type="submit" name="publication" value="отправить">
    </form>
</div>
