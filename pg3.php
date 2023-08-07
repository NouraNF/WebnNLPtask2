<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nouratask1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the last value from the 'robot' table
$sql = "SELECT value FROM robot ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Convert the result to a JSON object
    $row = $result->fetch_assoc();
    $value = $row["value"];
    $json = json_encode(array("value" => $value));
    echo $json;
} else {
    echo "No data found";
}

// Close the database connection
$conn->close();
?>