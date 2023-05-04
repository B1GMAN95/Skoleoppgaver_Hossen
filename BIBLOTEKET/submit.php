<?php
// Sett opp database-tilkoblingen
$host = 'localhost'; 
$dbname = 'biblotek';    
$username = 'root';    
$password = '';  

$conn = mysqli_connect($host, $username, $password, $dbname);
if (!$conn) {
  die("Tilkoblingen feilet: " . mysqli_connect_error());
}

// Behandle skjema
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Hent verdier fra skjema
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $serialnumber = $_POST['serialnumber'];
  $message = $_POST['message'];

  // SQL-spørring for å legge til data i databasen
  $sql = "INSERT INTO kontakt (name, email, phone, serialnumber, message) VALUES ('$name', '$email', '$phone', '$serialnumber', '$message')";

  // Utfør spørring
  if (mysqli_query($conn, $sql)) {
    echo "<p>Meldingen ble sendt inn</p>";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
}

// Lukk databasetilkoblingen
mysqli_close($conn);
?>
