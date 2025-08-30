console.log("HELLO!");

// clicks

let cookieButton = document.getElementById("rockButton");
let cookieAmount = document.getElementById("rockAmount");

let rocks = 0;

function updateRockAmount() {
  rockAmount.innerText = "you have " + rocks + " rocks";
}

function clickRocks() {
  rocks++;
  updateRockAmount();
}

// API

async function getData() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}
const upgrades = getData();
console.log(upgrades);

// Upgrades

//====

// The interval

setInterval(function () {
  rockCount += cps;
}, 1000);

// Local storage

let rockCount = 0;
let cps = 0;
