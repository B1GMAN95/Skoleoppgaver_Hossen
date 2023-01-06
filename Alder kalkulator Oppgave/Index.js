// Denne klassen er et DinAlder objekt, som har et navn og et fødselsår
class DinAlder {
  constructor(navn, fødselsår) {
    this.navn = navn;
    this.fødselsår = fødselsår;
  }

  // Denne metoden beregner alderen til DinAlder objektet
  // Det gjør den ved å hente årstall og trekke fra fødselsåret
  alder() {
    let År = new Date().getFullYear();
    return År - this.fødselsår;
  }
}

/* Denne funksjonen kalles når knappen "Beregn alder" trykkes. Så dette er da bare for knappen 
som er på nettsiden */
function calculateAge() {
  // Henter navnet og fødselsåret som brukeren har skrevet inn
  let navn = document.getElementById("navn").value;
  let fadselar = document.getElementById("fadselar").value;
  // Oppretter et nytt DinAlder-objekt med navnet og fødselsåret
  let ola = new DinAlder(navn, fadselar);

  let alder = ola.alder(); // Henter alderen til ola

  // Hvis alderen er negativ/minus, vis en feilmelding som er "Fødselsåret ditt kan ikke være i framtiden"
  if (alder < 0) {
    document.getElementById("alder").innerHTML =
      "Fødselsåret ditt kan ikke være i framtiden.";
  } else {
    // Ellers, vis alderen
    document.getElementById("alder").innerHTML = alder;
  }

  if (alder < 16) {
    alert("Du er under den kriminelle lavalderen");
  }

  if (alder > 14) {
    alert("Du er over den kriminelle lavalderen");
  }

  if (alder > 19) {
    alert("Du er over den kriminelle lavalderen, og du har stemmerett");
  }
}
