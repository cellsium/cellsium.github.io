<?php
if (isset($_POST['submit'])) {
    $user = login($_POST['login'],$_POST['password']);
    if ($user) {
        $user = $user[0];
        $hash = md5(generateCode(10));
        updateUser($user['id'], $hash);
        setcookie('id',$user['id'], time()+60*60*24*30, "/");
        setcookie('hash',$hash, time()+60*60*24*30, "/");
        header('location: /admin');
        exit();
    }
}else{
    echo 'Логин или пароль не верный';
    header('location: /');
}
?>
<h2>логин</h2>
<form method="POST">
    login: <input type="text" name="login" required><br>
    Pass: <input type="password" name="password" required>
    <input type="submit" name="submit" value="войти">
</form>