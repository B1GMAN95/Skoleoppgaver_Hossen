<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Registrer ny bruker</title>
	<link rel="stylesheet" href="register.css">
</head>
<body>
	<div class="form-wrapper">
		<h2>Registrer din bruker for å fortsette</h2>
		<form id="register-form" action="register.php" method="POST">
			<label for="username">Brukernavn:</label>
			<input type="text" id="username" name="username" required>
			<label for="password">Passord:</label>
			<input type="password" id="password" name="password" required>
			<input type="submit" name="submit" value="Registrer">
		</form>
	</div>
	<script>
        // Hent skjemaet
const form = document.getElementById('register-form');
// Lytt til innsending av skjemaet
form.addEventListener('submit', (event) => {
	// Hent brukernavn og passord
	const username = form.username.value.trim();
	const password = form.password.value.trim();
	// Valider brukernavn og passord
	if (!username || !password) {
		event.preventDefault();
		alert('Vennligst fyll ut begge feltene');
	}
});

    </script>


<?php
// Sjekk om submit-knappen ble trykket på
if (isset($_POST['submit'])) {
	// Database tilkoblings detaljer
	$host = 'localhost'; 
	$dbname = 'registrer_h';    
	$username = 'root';    
	$password = '';    

	try {
		// Opprett en PDO-tilkobling til databasen ved hjelp av PDO-klassen i PHP, som gir en enkel og effektiv måte å koble til ulike databaser på.
		$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
		// Sett PDO-tilkoblingen til å kaste unntak ved feil, slik at eventuelle feil i databasetilkoblingen vil kaste unntak som kan fanges opp og behandles i koden.

		// Hent brukernavn og passord fra POST-dataene
		$username = $_POST['username'];
		$password = $_POST['password'];
		
		// Generer et salt og krypter passordet med saltet
		$salt = bin2hex(random_bytes(16)); // Generer et tilfeldig salt
		$salted_password = $salt . $password; // Kombiner saltet med passordet
		$hashed_password = hash('sha256', $salted_password); // Krypter passordet med saltet
		
		// Forbered en SQL-spørring med parametre for å unngå SQL-injeksjon
		$stmt = $conn->prepare("INSERT INTO users (username, password, salt) VALUES (?, ?, ?)");
		// Bind parametrene til spørringen
		$stmt->bindParam(1, $username);
		$stmt->bindParam(2, $hashed_password);
		$stmt->bindParam(3, $salt);
		// Kjør spørringen
		$stmt->execute();
		
		// Hent antall rader som ble påvirket av spørringen
		$rows_affected = $stmt->rowCount();
		
		if ($rows_affected > 0) {
			$dashboard_url = 'dashboard.php';
			// Redirect to dashboard
			header("Location: $dashboard_url");
			exit;
		} else {
			echo "<script>alert('Registrering mislyktes')</script>";
		}
	  
	} catch (PDOException $e) {
		// Hvis det oppstår en feil, skriv ut feilmeldingen
		echo 'Feil: ' . $e->getMessage();
	}
}
?>




</body>



</html>

