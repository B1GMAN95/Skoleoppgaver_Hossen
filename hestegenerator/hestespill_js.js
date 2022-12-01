const container = document.querySelector(".content");

function randomSize() {
  console.log();
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

var hesteBilder = [
  "https://images.unsplash.com/photo-1534307250431-ef2530a9d8c5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODA4OTB8MHwxfHNlYXJjaHwxfHxob3JzZXxlbnwwfHx8fDE2Njg1MTUxMjU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1557374800-8ba4ccd60e9d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODA4OTB8MHwxfHNlYXJjaHwyfHxob3JzZXxlbnwwfHx8fDE2Njg1MTUxMjU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODA4OTB8MHwxfHNlYXJjaHwzfHxob3JzZXxlbnwwfHx8fDE2Njg1MTUxMjU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODA4OTB8MHwxfHNlYXJjaHw0fHxob3JzZXxlbnwwfHx8fDE2Njg1MTUxMjU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1593179449458-e0d43d512551?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODA4OTB8MHwxfHNlYXJjaHw1fHxob3JzZXxlbnwwfHx8fDE2Njg1MTUxMjU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODA4OTB8MHwxfHNlYXJjaHw2fHxob3JzZXxlbnwwfHx8fDE2Njg1MTUxMjU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1553284965-fa61e9ad4795?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODA4OTB8MHwxfHNlYXJjaHw3fHxob3JzZXxlbnwwfHx8fDE2Njg1MTUxMjU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1553284966-19b8815c7817?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODA4OTB8MHwxfHNlYXJjaHw4fHxob3JzZXxlbnwwfHx8fDE2Njg1MTUxMjU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1450052590821-8bf91254a353?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODA4OTB8MHwxfHNlYXJjaHw5fHxob3JzZXxlbnwwfHx8fDE2Njg1MTUxMjU&ixlib=rb-4.0.3&q=80",
  "https://images.unsplash.com/photo-1594768816441-1dd241ffaa67?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODA4OTB8MHwxfHNlYXJjaHwxMHx8aG9yc2V8ZW58MHx8fHwxNjY4NTE1MTI1&ixlib=rb-4.0.3&q=80",
];
const apiKey = "CAdMm3JFO4NFuapcAe3fm2XyUxqkOT7JrgbIAbdc3Ok";
const query = "horse";

document.getElementById("hestebilde").src = hesteBilder[0];

//fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${apiKey}`)
//.then((Response) => Response.json())
//.then((result) => {
//    result.results.forEach((result) => {
//        hesteBilder.push(result.urls.full)
//    })
//    console.log(hesteBilder)
//})

// Hente og bruke hestebilde
// document.getElementById("idtilbilde").src = hesteBilder[0];

// lag knapp element
let buttonminus = document.createElement("button");

// sett knapp text til "neste"
buttonminus.innerText = "tilbake";

buttonminus.id = "mainButton";
let i = 0;

// legger til en clicke event sånn at knappen kan bli trukket på
buttonminus.addEventListener("click", () => {
  if (i != 0) {
    i--;
    document.getElementById("hestebilde").src = hesteBilder[i];
  }
});

document.getElementById("neste").appendChild(buttonminus);

// lag knapp element
let buttonpluss = document.createElement("button");

// sett knapp text til "neste"
buttonpluss.innerText = "neste";

buttonpluss.id = "mainButton";

// legger til en clicke event sånn at knappen kan bli trukket på
buttonpluss.addEventListener("click", () => {
  // når det er et klikk
  if (i < hesteBilder.length) {
    document.getElementById("hestebilde").src = hesteBilder[i];
  }
  i++;
  if (i > 10) {
    alert("Det er ikke fler bilder!");
  }
  console.log(i);
});

document.getElementById("neste").appendChild(buttonpluss);
