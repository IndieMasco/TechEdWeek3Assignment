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

// API & Upgrades

async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  return data;
}
const upgrades = getUpgrades();

async function displayUpgrades() {
  const upgrades = await getUpgrades();
  const upgradeList = document.getElementById("upgrades");
  upgradeList.textContent = upgrades;
  document.body.appendChild(upgradeList);
}

displayUpgrades();

// The interval

// setInterval(function () {
//   rockCount += cps;
// }, 1000);

// Local storage

let saveState = {
  rockCount: 0,
  cps: 0,
};

const saveStateString = JSON.stringify(saveState);
localStorage.setItem("saveState", saveStateString);

const loadSaveStateString = localStorage.getItem("saveState");
JSON.parse(loadSaveStateString);
