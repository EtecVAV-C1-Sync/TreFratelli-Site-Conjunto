<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "trefratelli";

$conexao = new mysqli($host, $user, $pass, $db);
if ($conexao->connect_error) {
    die("Erro ao conectar ao banco: " . $conexao->connect_error);
}

$conexao->set_charset("utf8mb4");

// Recebendo dados do POST
$nome = $_POST['nome'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$cpf = $_POST['cpf'] ?? '';
$email = $_POST['email'] ?? '';
$data_reserva = $_POST['data'] ?? '';
$qtd = $_POST['pessoas'] ?? '';

// Validação simples
if (!$nome || !$telefone || !$cpf || !$email || !$data_reserva || !$qtd) {
    echo "<script>
            alert('Por favor, preencha todos os campos.');
            window.history.back();
          </script>";
    exit;
}

// Inserir no banco
$stmt = $conexao->prepare("INSERT INTO reservas (nome, telefone, cpf, email, data_reserva, qtd) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssi", $nome, $telefone, $cpf, $email, $data_reserva, $qtd);

if ($stmt->execute()) {
    echo "<script>
            alert('Sua reserva foi feita com sucesso!');
            window.location.href='Cardapio.html';
          </script>";
} else {
    echo "<script>
            alert('Erro ao salvar a reserva. Tente novamente.');
            window.history.back();
          </script>";
}

$stmt->close();
$conexao->close();
?>
