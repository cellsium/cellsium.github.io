<?php
if (isset($_POST['submit'])) {
    $err = [];
    if (strlen($_POST['login']) < 4) {
        $err[] = 'логин не меньше 4';
    }
    if (strlen($_POST['password']) < 3) {
        $err[] = 'пароль не меньше 3';
    }
    if (isLoginExist($_POST['login'])) {
        $err[] = 'логин существует';
    }
    if (count($err) === 0) {
        createUser($_POST['login'],$_POST['password']);
        header('location: /login');
        exit();
    }else{
        foreach ($err as $error) {
            echo $error.'<br>';
        }
    }
}
?>
<h2>Регистрация</h2>
<form method="POST">
    login: <input type="text" name="login" required><br>
    Pass: <input type="password" name="password" required>
    <input type="submit" name="submit" value="регистрация">
</form>
