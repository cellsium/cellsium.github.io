<?php
require_once 'config/db.php';
require_once 'core/function_db.php';
require_once 'core/function.php';
$conn = connect();

$route = $_GET['route'];

switch ($route) {
    case NULL:
        $query = 'select * from info';
        $result = select($query);
        require_once 'template/main.php';
        break;
    case 'admin':
        $query = 'select * from info';
        $result = select($query);
        require_once 'template/admin.php';
        break;
    case 'register':
        require_once 'template/register.php';
        break;
    default:
        require_once 'template/404.php';
}