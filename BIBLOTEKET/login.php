<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="style_login.css"> <!-- Kobler til stilarket -->
</head>
<body>
  <header> <!-- Overskrift og navigasjon øverst på siden -->
    <h1>BIBLOTEKET</h1> <!-- Overskrift for siden -->
    <nav> <!-- Navigasjonsmeny -->
      <ul>
        <li><a href="index.php">Hjem</a></li> 
        <li><a href="biblotek.php">bok</a></li> 
        <li><a href="login.php">login</a></li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <h1>Login</h1>
    <form id="login-form" method="POST"> <!-- Login-skjema -->
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required> <!-- Brukernavn-felt -->
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required> <!-- Passord-felt -->
        <input type="hidden" name="submit" value="">
      </div>
      <button type="submit">Login</button> <!-- Innlogging-knapp -->
    </form>
  </div>

  <script src="app.js"></script> <!-- Kobler til JavaScript-filen -->
</body>

<?php
// Sjekk om submit-knappen ble trykket på
if (isset($_POST['submit'])) {
    // Database tilkoblings detaljer
    $host = 'localhost'; 
    $dbname = 'im_db_testbase';    
    $username = 'root';    
    $password = '';    

    try {
        // Opprett en PDO-tilkobling til databasen ved hjelp av PDO-klassen i PHP, som gir en enkel og effektiv måte å koble til ulike databaser på.
        $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        // Sett PDO-tilkoblingen til å kaste unntak ved feil, slik at eventuelle feil i databasetilkoblingen vil kaste unntak som kan fanges opp og behandles i koden.
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Hent brukernavn og passord fra POST-dataene
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Forbered en SQL-spørring med parametre for å unngå SQL-injeksjon
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
        // Bind parametrene til spørringen
        $stmt->bindParam(1, $username);
        $stmt->bindParam(2, $password);
        // Kjør spørringen og hent antall rader som returneres
        $stmt
        ->execute();
        $count = $stmt->rowCount();
    
        // Sjekk om brukernavnet og passordet finnes i databasen
        if ($count > 0) {
            // Hvis det er en match, start sesjonen og sett brukernavnet som en sesjonsvariabel
            session_start();
            $_SESSION['username'] = $username;
            // Redirect til hjemmesiden
            header('Location: register.php');
            exit();
        } else {
            // Hvis det ikke er en match, vis en feilmelding
            echo "<p class='error'>Feil brukernavn eller passord. Vennligst prøv igjen.</p>";
        }
    } catch(PDOException $e) {
        // Hvis det oppstår en feil, vis feilmeldingen
        echo "<p class='error'>Feil ved tilkobling til databasen: " . $e->getMessage() . "</p>";
    }
  }
  ?>
  
  </html>    