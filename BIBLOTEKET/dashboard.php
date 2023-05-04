<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="dashboard_style.css"> <!-- Kobler til stilarket -->
</head>
<body>
  <header> <!-- Overskrift og navigasjon øverst på siden -->
    <h1>BIBLOTEKET - DASHBOARD</h1> <!-- Overskrift for siden -->
    <nav> <!-- Navigasjonsmeny -->
      <ul>
        <li><a href="dashboard.php">Dashboard</a></li>
        <li><a href="index.php">Logg ut</a></li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Navn</th>
          <th>E-post</th>
          <th>Telefon</th>
          <th>Serienummer</th>
          <th>Melding</th>
        </tr>
      </thead>
      <tbody>
        <?php
          // Database tilkoblings detaljer
          $host = 'localhost'; 
          $dbname = 'biblotek';    
          $username = 'root';    
          $password = '';    

          try {
              // Opprett en PDO-tilkobling til databasen ved hjelp av PDO-klassen i PHP, som gir en enkel og effektiv måte å koble til ulike databaser på.
              $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
              // Sett PDO-tilkoblingen til å kaste unntak ved feil, slik at eventuelle feil i databasetilkoblingen vil kaste unntak som kan fanges opp og behandles i koden.
              $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

              // Forbered en SQL-spørring for å hente alle innsendinger fra databasen
              $stmt = $conn->prepare("SELECT * FROM kontakt");
              // Kjør spørringen og hent alle resultatene som en assosiativ array
              $stmt->execute();
              $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

              // Gå gjennom resultatene og skriv ut en rad for hver innsending
              foreach ($results as $row) {
                echo "<tr>";
                echo "<td>" . $row['name'] . "</td>";
                echo "<td>" . $row['email'] . "</td>";
                echo "<td>" . $row['phone'] . "</td>";
                echo "<td>" . $row['serialnumber'] . "</td>";
                echo "<td>" . $row['message'] . "</td>";
                echo "<td>" . $row['Id'] . "</td>";
                echo "</tr>";
              }

              // Lukk spørringens cursor
              $stmt->closeCursor();
          } catch (PDOException $e) {
              // Hvis det oppstår en feil, skriv ut feilmeldingen
              echo 'Feil: ' . $e->getMessage();
          }
        ?>
      </tbody>
    </table>
  </div>

  <script src="app.js"></script> <!-- Kobler til JavaScript-filen -->


</body>
</html>
