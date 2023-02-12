const Web3 = require('web3');

// Connect to a Binance Smart Chain node
const w3 = new Web3('https://bsc-dataseed.binance.org/');
console.log("running...")


// Define a function to check if a wallet meets the conditions


async function meetsConditions(address) {
  // Check the balance of the wallet
  const balance = await w3.eth.getBalance(address);
  if (balance < 2 * 10 ** 18) {
    return false;
  }
  console.log("looking for met requirements...")

  
  // Check if the wallet has conducted a transaction in the last month
  const blockNumber = await w3.eth.getBlockNumber();
  const lastMonth = blockNumber - (30 * 24 * 60 * 60) / 15;
  const transactions = await w3.eth.getTransactionCount(address, lastMonth);
  if (transactions === 0) {
    return false;
  }

  return true;
}


// Define a list to store the addresses that meet the conditions
const wallets = [];

// Loop through all possible addresses and add them to the list if they meet the conditions
for (let i = 0; i < 10; i++) {
  const address = '0x' + i.toString(16).padStart(40, '0');
  meetsConditions(address)
    .then(result => {
      if (result) {
        wallets.push(address);
      }
    })
    .catch(error => {
      console.error(error);
    });
}

// Save the list of addresses to a file (this would typically be done asynchronously)
require('fs').writeFileSync('wallets.txt', wallets.join('\n'));
