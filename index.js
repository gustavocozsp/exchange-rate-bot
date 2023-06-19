const { Client, Intents } = require('discord.js');
const fetch = require('node-fetch');
const config = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let previousRate = null;

async function getExchangeRate() {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/${config.apiKey}/pair/${config.baseCurrency}/${config.targetCurrency}`);

  if (!response.ok) {
    throw new Error(`Error retrieving exchange rate. Response status: ${response.status}`);
  }

  const responseData = await response.json();

  if (responseData.result === 'error') {
    throw new Error(`Error retrieving exchange rate. Error message: ${responseData['error-type']}`);
  }

  return responseData.conversion_rate;
}

async function sendInitialExchangeRate() {
  try {
    const rate = await getExchangeRate();
    const channel = client.channels.cache.get(config.channelId);
    channel.send(`The exchange rate for ${config.baseCurrency} is: ${rate} ${config.targetCurrency}`);
    previousRate = rate;
  } catch (error) {
    console.error('Error retrieving exchange rate:', error);
  }
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  sendInitialExchangeRate();

  setInterval(async () => {
    try {
      const rate = await getExchangeRate();

      if (previousRate !== null && rate !== previousRate) {
        const channel = client.channels.cache.get(config.channelId);
        channel.send(`The exchange rate for ${config.baseCurrency} has been updated: ${rate} ${config.targetCurrency}`);
      }

      previousRate = rate;
    } catch (error) {
      console.error('Error retrieving exchange rate:', error);
    }
  }, 180000); // 3 minutes
});

client.login(config.token);
