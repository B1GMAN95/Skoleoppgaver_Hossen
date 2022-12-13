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
  "https://images.unsplash.com/photo-1599053581540-248ea75b59cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1517326451550-8612522c096e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1563443803769-a5c44bd91e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
  "https://images.unsplash.com/flagged/photo-1557296126-953ce119454c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1566068256639-2f046b164a98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1573751056139-2ab65b6b03be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1224&q=80",
  "https://images.unsplash.com/photo-1511195188569-9b97074ae1b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1576289163370-0634b5d94d28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1603989888581-3115416784fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1517887121-557af22472e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1615754643965-3d67728fe9d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80",
  "https://images.unsplash.com/photo-1519614356164-43acba9cb25d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1609350507951-37a5dbf47f38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  "https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
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
  if (i > 15) {
    alert("Det er ikke fler bilder!");
  }
  console.log(i);
});

document.getElementById("neste").appendChild(buttonpluss);

// lært mye fra Mathias Dencker som er på praksisplassen min. Lært forskjellig så det er ingenting som er kopiert her, lært også litt fra Trygve.
// har ikke fått kode fra noen, men lært litt javascript fra disse to.
// litt fra stack overflow og w3schools er det jeg har lært fra også.
//lest på forskjellige forums også
