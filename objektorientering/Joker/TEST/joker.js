
class Joker {
    constructor(namePlayer) {
        this.playerName = namePlayer;
        this.price = [0, 1, 2, 3, 4, 5, 6];
        this.index = 0;
        this.randomNumbers = [];
        this.up = [];
        this.down = [];
        this.middle = [];
    }

    startGame() {

        for (let i = 0; i < 15; i++) {
            var randomNum = Math.floor(Math.random() * 9);
            this.randomNumbers.push(randomNum);
            
        }

        this.middle = this.randomNumbers.slice(0,5);
        this.down = this.randomNumbers.slice(5,10);
        this.up = this.randomNumbers.slice(10, 15);
        console.log(this.middle, this.down, this.up);

        for (let i = 0; i < 5; i++) {
            
            document.getElementById('btn'+i.toString()).innerHTML = this.middle[i];
            
        }


    }

    buttonUp(index) {

        this.index = index;
        console.log(this.index);
        //Sjekker først om spillet er over:

        if (this.index > 5) {
            this.endgame();
        } else {

            if (this.up[this.index] < this.middle[this.index]) {
                document.getElementById("btn"+JSON.stringify(this.index)).disabled = true;
                document.getElementById("up"+JSON.stringify(this.index)).disabled = true;
                document.getElementById("down"+JSON.stringify(this.index)).disabled = true;
            } else {
                console.log('DU tok feil');
                document.getElementById("btn"+JSON.stringify(this.index)).disabled = true;
            }

        }

    }

    buttonDown() {
        //Sjekker hvis det er høyere eller lavere
        if (this.index > 5) {
            this.endgame();
        }

    }

    endgame() {
        console.log('Du har sluttet spillet');
    }

}

let jokerGame = new Joker;