console.log("HELLO!")

// Request the data from the provided API link 

async function getData() {
  const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
  console.log(response);
  const data = await response.json();
  console.log(data);
}
getData();

// Counting clicks & CPS
