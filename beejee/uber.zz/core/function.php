<?php

function publication($name, $email, $message)
{
    $query = "INSERT INTO `info`(`name`, `email`, `message`, `checkin`) VALUES ('" . $name . "','" . $email . "','" . $message . "', 0);";
    return execQuery($query);
}

function delete($id)
{
    $query = "DELETE FROM `info` WHERE id='" . $id . "'";
    return execQuery($query);
}

function update($id, $name, $email, $message)
{
    $query = select("SELECT `id` FROM `info` WHERE id='".$id."'");
    if (count($query) != 0) {
        execQuery("UPDATE info SET name='" . $name . "', email='" . $email . "',message='" . $message . "' ,checkin = '1' WHERE id='".$id."'");
            header('location: /admin');
    }
}

function checked($id)
{
    $checked = select("SELECT id='$id' FROM `info` WHERE checkin ='1'");
    foreach ($checked as $key => $value) {
        foreach ($value as $key => $value){
            if ($value == '1') return '<img src="https://w7.pngwing.com/pngs/51/667/png-transparent-green-check-illustration-green-heart-angle-font-green-check-mark-heart-teal-grass.png" width="25px" height="25px">';
        }
    }
}

function isLoginExist($login)
{
    $query = "select id from users where login='" . $login . "'";
    $result = select($query);
    if (count($result) === 0) return false;
    return true;
}

function createUser($login, $password)
{
    $password = md5(md5(trim($password)));
    $login = trim($login);
    $query = "INSERT INTO users SET login ='" . $login . "',password ='" . $password . "'";
    return execQuery($query);
}

function login($login, $password)
{
    $password = md5(md5(trim($password)));
    $login = trim($login);
    $query = "SELECT id, login FROM users WHERE login ='" . $login . "' AND password ='" . $password . "'";
    $result = select($query);
    if (count($result) != 0) return $result;
    return false;
}

function generateCode($length = 5)
{
    $chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789";
    $code = "";
    $clen = strlen($chars) - 1;
    while (strlen($code) < $length) {
        $code .= $chars[mt_rand(0, $clen)];
    }
    return $code;
}

function updateUser($id, $hash)
{
    $query = "UPDATE users SET hash='" . $hash . "' WHERE id='" . $id . "'";
    return execQuery($query);
}

function getUser()
{
    if (isset($_COOKIE['id']) and isset($_COOKIE['hash'])) {
        $query = "SELECT id, login, hash FROM users WHERE id = '" . $_COOKIE['id'] . "'";
        $user = select($query);
        if (count($user) === 0) {
            return false;
        } else {
            $user = $user[0];
            if ($user['hash'] !== $_COOKIE['hash']) {
                clearCookies();
                return false;
            }
        }
        $_GET['login'] = $user['login'];
        return true;

    } else {
        clearCookies();
        return false;
    }
}

function clearCookies()
{
    setcookie('id', "", time() - 60 * 60 * 24 * 30, "/");
    setcookie('hash', "", time() - 60 * 60 * 24 * 30, "/");
    unset($_GET['login']);
}

?>