console.log("HELLO!");

// clicks

let rockButton = document.getElementById("rockButton");
let rockAmount = document.getElementById("rockAmount");

function updateRockAmount() {
  rockAmount.innerText = "you have " + state.rockCount + " rocks";
}

function clickRocks() {
  state.rockCount++;
  updateRockAmount();
}

// API & Upgrades buttons

async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  return data;
}

async function displayUpgrades() {
  const upgrades = await getUpgrades();
  for (let i = 0; i < upgrades.length; i++) {
    const upgradeList = document.createElement("button");
    upgradeList.textContent = `${upgrades[i].name} - Cost: ${upgrades[i].cost} rocks`;
    document.body.appendChild(upgradeList);
  }
}

displayUpgrades();

// The interval

setInterval(function () {
  state.rockCount += state.cps;
  saveData();
}, 1000);

// Local storage

let state = {
  rockCount: 0,
  cps: 0,
};

function saveData() {
  const saveStateString = JSON.stringify(state);
  localStorage.setItem("state", saveStateString);
}

const loadSaveStateString = localStorage.getItem("state");
const loadData = JSON.parse(loadSaveStateString);
state.rockCount = loadData.rockCount;

updateRockAmount();
