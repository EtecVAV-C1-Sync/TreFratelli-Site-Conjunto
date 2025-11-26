<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "trefratelli";

$con = new mysqli($host, $user, $pass, $db);

if ($con->connect_error) {
    die("Erro ao conectar ao banco de dados: " . $con->connect_error);
}

$con->set_charset("utf8mb4");
?>
