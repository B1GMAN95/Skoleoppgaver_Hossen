const quiz = document.getElementById("quiz");
const form = quiz.querySelector("form");
const questions = form.querySelectorAll("ul li");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  questions.forEach((question) => {
    const inputs = question.querySelectorAll("input");
    let answer;
    inputs.forEach((input) => {
      if (input.checked) {
        answer = input.value;
      }
    });
    if (answer === "Equus caballus") {
      score += 1;
    }
    if (answer === "25 years") {
      score += 1;
    }
    if (answer === "152 cm") {
      score += 1;
    }
    if (answer === "453 kg") {
      score += 1;
    }
    if (answer === "48 kmt") {
      score += 1;
    }
  });
  document.getElementById("result").innerHTML = `Du fikk ${score} poeng `;
});
