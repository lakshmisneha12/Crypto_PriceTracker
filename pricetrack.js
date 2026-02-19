const btcEl = document.getElementById("btc");
const ethEl = document.getElementById("eth");
const dogeEl = document.getElementById("doge");
const statusEl = document.getElementById("status");

const API_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

// FETCH PRICES
async function fetchPrices() {
  try {
    statusEl.innerText = "Updating prices...";
    const res = await fetch(API_URL);
    const data = await res.json();

    btcEl.innerText = `$${data.bitcoin.usd}`;
    ethEl.innerText = `$${data.ethereum.usd}`;
    dogeEl.innerText = `$${data.dogecoin.usd}`;

    statusEl.innerText = `Last updated: ${new Date().toLocaleTimeString()}`;
  } catch (error) {
    statusEl.innerText = "Error fetching data!";
  }
}

// INITIAL LOAD
fetchPrices();

// API POLLING (every 5 seconds)
setInterval(fetchPrices, 5000);
