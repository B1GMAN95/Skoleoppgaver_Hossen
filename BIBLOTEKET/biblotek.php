<!DOCTYPE html>
<html lang="no">
<head>
  <!-- Sett opp metainformasjon -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Sett opp tittelen på siden -->
  <title>Biblioteket på Drømtorp videregående skole</title>
  <!-- Legg til Bootstrap 5 CSS-rammeverket -->
  <link rel="stylesheet" href="style_biblotek.css">
  <!-- Legg til egendefinert CSS for å forbedre designet -->
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

<style>
  ul {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

  <!-- Legg til container for å begrense innholdet i midten av siden -->
  <div class="container">
    <!-- Legg til overskrift -->
    <h1>Biblioteket på Drømtorp videregående skole</h>

    <!-- Legg til skjema for å sende informasjon -->
    <form action="submit.php" method="POST">
      <!-- Legg til label og input-felt for navn -->
      <div class="form-gruppe">
        <label for="name">Navn:</label>
        <input type="text" id="name" name="name" required>
      </div>

      <!-- Legg til label og input-felt for e-postadresse -->
      <div class="form-group">
        <label for="email">E-postadresse:</label>
        <input type="text" id="email" name="email" required>
      </div>

      <!-- Legg til label og input-felt for telefonnummer -->
      <div class="form-gruppe">
        <label for="phone">Telefonnummer:</label>
        <input type="text" id="phone" name="phone">
      </div>

      <!-- Legg til label og input-felt for serienummer -->
      <div class="form-gruppe">
        <label for="serialnumber">Serienummer:</label>
        <input type="text" id="serialnumber" name="serialnumber" required>
      </div>

      <!-- Legg til label og input-felt for melding-->
      <div class="form-gruppe">
        <label for="message">Melding:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>

      <!-- Legg til send-knapp -->
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Send</button>
      </div>
    </form>

   


  </body>
</html>
