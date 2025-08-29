console.log("HELLO!")

// Connect with the API to request the data from the provided link

async function getData() {
  const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
  console.log(response);
  const data = await response.json();
  console.log(data);
}
getData();