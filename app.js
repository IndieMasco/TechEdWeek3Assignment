console.log("HELLO!");

// clicks

let rockButton = document.getElementById("rockButton");
let rockAmount = document.getElementById("rockAmount");
let cpsAmount = document.getElementById("cps");

function updateRockAmount() {
  rockAmount.innerText = "you have " + state.rockCount + " rocks";
  cpsAmount.innerText = "CPS:" + state.cps + "";
}

function clickRocks() {
  state.rockCount++;
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

async function displayUpgrades() {
  const upgrades = await getUpgrades();
  for (let i = 0; i < upgrades.length; i++) {
    const upgradeList = document.createElement("button");
    upgradeList.textContent = `${upgrades[i].name} - Cost: ${upgrades[i].cost} rocks`;
    upgradeList.setAttribute("index", i);
    document.body.appendChild(upgradeList);

    upgradeList.addEventListener("click", function (click) {
      const upgradeNumder = click.target.getAttribute("index");
      if (state.rockCount >= upgrades[upgradeNumder].cost) {
        state.rockCount -= upgrades[upgradeNumder].cost;
        state.cps += upgrades[upgradeNumder].increase;
      } else {
        alert("You don't have enough rocks!");
      }
    });
  }
}

displayUpgrades();

// The interval

setInterval(function () {
  state.rockCount += state.cps;
  updateRockAmount();
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
state.cps = loadData.cps;

updateRockAmount();

// TESTING

// document.addEventListener("click", function (element) {
//   console.log(element.target);
// });
