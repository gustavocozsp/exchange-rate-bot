# Exchange Rate Bot

A Discord bot that retrieves and updates exchange rates for various currency pairs.

## Features

- Retrieves the exchange rate for a specified base currency to target currency from an external API.
- Sends the initial exchange rate upon bot login.
- Periodically checks for rate updates and sends notifications if the rate has changed.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/impugne/exchange-rate-bot.git
   ```

2. Install dependencies:

   ```bash
   cd exchange-rate-bot
   npm install
   ```

3. Configure the bot:

   - Create a `config.json` file in the project root directory.
   - Provide the following configuration parameters in the `config.json` file:
     - `"apiKey"`: Your API key for the exchange rate service.
     - `"baseCurrency"`: The base currency code (e.g., `"USD"`).
     - `"targetCurrency"`: The target currency code (e.g., `"BRL"`).
     - `"channelId"`: The ID of the Discord channel where the bot will send exchange rate updates.
     - `"token"`: Your Discord bot token.

4. Obtain an API key:

   - Visit the website of the exchange rate service (https://www.exchangerate-api.com/).
   - Sign up for an account if required.
   - Navigate to the API documentation or account settings to generate an API key.
   - Follow the instructions provided to generate an API key specifically for accessing exchange rate data.

5. Run the bot:

   ```bash
   node index.js
   ```

## Usage

- Invite the bot to your Discord server using the OAuth2 URL generated for your bot.
- Ensure the bot has the necessary permissions to read and send messages in the specified channel.
- The bot will automatically send the initial exchange rate upon login.
- The bot will periodically check for rate updates and send notifications if the rate has changed.

## Contributing

Contributions are welcome! If you find any issues or would like to suggest enhancements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize and enhance this README file according to your project's specific needs. You can add sections like "Dependencies," "Troubleshooting," or "Acknowledgements" as required.