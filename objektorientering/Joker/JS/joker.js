class Joker {
  constructor(name) {
    this.name = name;
    this.middle = []; //5 tall
    this.answers = []; //5 tall
    this.index = 0;
    this.disableList = [0, 1, 2, 3, 4];
  }

  startGame() {
    for (let i = 0; i < 5; i++) {
      document.getElementById("down" + i.toString()).innerHTML = "";
      document.getElementById("btn" + i.toString()).innerHTML = "";
      document.getElementById("up" + i.toString()).innerHTML = "";

      document.getElementById("down" + i.toString()).disabled = true;
      document.getElementById("up" + i.toString()).disabled = true;
      document.getElementById("btn" + i.toString()).disabled = true;
    }

    document.getElementById("up0").disabled = false;
    document.getElementById("btn0").disabled = false;
    document.getElementById("down0").disabled = false;

    for (let i = 0; i < 5; i++) {
      let randomMiddle = Math.floor(Math.random() * 10);
      let randomAnswer = Math.floor(Math.random() * 10);

      this.middle.push(randomMiddle);
      this.answers.push(randomAnswer);

      document.getElementById("btn" + i.toString()).innerHTML =
        randomMiddle.toString();
    }

    this.playGame();
  }

  playGame() {
    document.getElementById("up" + this.index.toString()).onclick = () => {
      document.getElementById("up" + this.index.toString()).innerHTML =
        this.answers[this.index];

      this.answers[this.index];
      if (this.answers[this.index] >= this.middle[this.index]) {
        document.getElementById(
          "up" + this.index.toString()
        ).style.backgroundColor = "green";
      } else {
        document.getElementById(
          "up" + this.index.toString()
        ).style.backgroundColor = "red";
      }
      document.getElementById("down" + this.index.toString()).onclick = () => {
        document.getElementById("down" + this.index.toString()).innerHTML =
          this.answers[this.index];
        if (this.answers[this.index] <= this.middle[this.index]) {
          document.getElementById(
            "down" + this.index.toString()
          ).style.backgroundColor = "green";
        } else {
          document.getElementById(
            "down" + this.index.toString()
          ).style.backgroundColor = "red";
        }
        // Resten av funksjonen
      };

      if (this.index < 4) {
        this.disableButtons(true);
        this.playGame(this.index++);
      } else {
        console.log("Spillet er ferdig");

        document.getElementById("down4").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("up4").disabled = true;
      }
    };

    document.getElementById("down" + this.index.toString()).onclick = () => {
      document.getElementById("down" + this.index.toString()).innerHTML =
        this.answers[this.index];

      if (this.index < 4) {
        this.disableButtons(false);
        this.playGame(this.index++);
      } else {
        console.log("Spillet er ferdig!");

        document.getElementById("down4").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("up4").disabled = true;
      }
    };
  }

  disableButtons(up) {
    let nextIndex = this.index + 1;

    if (up) {
      document.getElementById("down" + this.index.toString()).disabled = true;
      document.getElementById("btn" + this.index.toString()).disabled = true;
      document.getElementById("up" + this.index.toString()).disabled = true;

      document.getElementById("down" + nextIndex.toString()).disabled = false;
      document.getElementById("btn" + nextIndex.toString()).disabled = false;
      document.getElementById("up" + nextIndex.toString()).disabled = false;
    } else {
      document.getElementById("up" + this.index.toString()).disabled = true;
      document.getElementById("btn" + this.index.toString()).disabled = true;
      document.getElementById("down" + this.index.toString()).disabled = true;

      document.getElementById("down" + nextIndex.toString()).disabled = false;
      document.getElementById("btn" + nextIndex.toString()).disabled = false;
      document.getElementById("up" + nextIndex.toString()).disabled = false;
    }
  }

  clearGame() {
    for (let i = 0; i < 5; i++) {
      document.getElementById("down" + i.toString()).disabled = true;
      document.getElementById("btn" + i.toString()).disabled = true;
      document.getElementById("up" + i.toString()).disabled = true;
    }
  }
}

document.getElementById("startButton").onclick = (e) => {
  let jokerGame = new Joker("Joakim");

  jokerGame.startGame();
};
