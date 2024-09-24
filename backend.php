<?php
header('Content-Type: application/json');
$db = new mysqli('localhost', 'korilos699654', '*9ywmqn)^u;muU;C!kM6', 'aya');

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

// Example: Fetch all responses
$result = $db->query("SELECT * FROM responses");
$responses = [];

while ($row = $result->fetch_assoc()) {
    $responses[] = $row;
}

echo json_encode($responses);
?>
