// console.log("HELLO!");

// Clicks
// This part pulls what I need from my HTML, changes the count for both rock and CPS, and makes the images clickable.

// Pulling from HTML
let rockButton = document.getElementById("rockButton");
let rockAmount = document.getElementById("rockAmount");
let cpsAmount = document.getElementById("cps");

// Changes the count
function updateRockAmount() {
  rockAmount.innerText = "you have " + state.rockCount + " rocks";
  cpsAmount.innerText = "CPS:" + state.cps + "";
}

// Clickable image
function clickRocks() {
  state.rockCount++;
  updateRockAmount();
}

// API & Upgrades
// This section pulls info from the API, pushes all the info to display on my game, and creates all the upgrade buttons

// Pulling
async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  return data;
}

// Pushing
async function displayUpgrades() {
  const upgrades = await getUpgrades();
  for (let i = 0; i < upgrades.length; i++) {
    const upgradeList = document.createElement("button");
    upgradeList.textContent = `${upgrades[i].name} - Cost: ${upgrades[i].cost} rocks`;
    upgradeList.setAttribute("index", i);
    document.body.appendChild(upgradeList);

    // Buttons
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
// This section controls the CPS count and auto-clicks when you buy an upgrade.

setInterval(function () {
  state.rockCount += state.cps;
  updateRockAmount();
  saveData();
}, 1000);

// Local storage
// This section saves and loads your progress from your local storage. 

// The data I want saved
let state = {
  rockCount: 0,
  cps: 0,
};

// Saving it to local storage
function saveData() {
  const saveStateString = JSON.stringify(state);
  localStorage.setItem("state", saveStateString);
}

// Loading it from local storage
const loadSaveStateString = localStorage.getItem("state");
const loadData = JSON.parse(loadSaveStateString);
state.rockCount = loadData.rockCount;
state.cps = loadData.cps;

// Anything under this point stays at the bottom

updateRockAmount();


