<!DOCTYPE html>
<html>
  <head>
    <title>BIBLOTEKET</title>
    <link rel="stylesheet" href="style_forside.css">
  </head>
  <body>
    <header>
      <h1>BIBLOTEKET</h1>

    </header>
    <div class= "nav">
    <nav>
        <ul>
          <li><a href="index.php">Hjem</a></li> 
          <li><a href="biblotek.php">Biblotek</a></li> 
          <li><a href="login.php">Logg inn</a></li>
        </ul>
      </nav>
      </div>
    <main>
      <div class="center">
        <h2>Vil du forlenge en bok?</h2>
        <button onclick="window.location.href='biblotek.php'">Gå til Bibloteket</button>
      </div>
    </main>
    <footer>
      <p>&copy; 2023 BIBLOTEKET</p>
    </footer>
    <style>
      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 27em;
      }

      .center {
        text-align: center;
      }

      button {
        padding: 10px 20px;
        font-size: 18px;
        border-radius: 5px;
        border: none;
        background-color: #007aff;
        color: #fff;
        cursor: pointer;
      }



    </style>
  </body>
</html>
