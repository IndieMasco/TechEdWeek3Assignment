console.log("HELLO!");

// clicks

var click = 0;
function countClicks() {
  document.getElementById("count").innerHTML = ++click;
  click = click;
}

// The interval

setInterval(function () {
  rockCount += cps;
}, 1000);

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

// Data storage

const rockCount = document.getElementById("count");
const cps = document.getElementById("cps");

let stats = {
  rockCount: 0,
  cps: 0,
};
