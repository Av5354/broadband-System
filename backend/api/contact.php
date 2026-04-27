<?php
$conn = new mysqli("localhost", "root", "", "your_db");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$message = $data['message'];

$stmt = $conn->prepare("INSERT INTO contact_messages (name,email,phone,message) VALUES (?,?,?,?)");
$stmt->bind_param("ssss", $name, $email, $phone, $message);
$stmt->execute();