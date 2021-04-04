const dotenv = require('dotenv');

const result = dotenv.config();
global.console.log('result', result);

module.exports = {
  get: () => ({
    port: result.parsed.API_PORT,
    sender: {
      email: result.parsed.GMAIL_SENDER_EMAIL,
      password: result.parsed.GMAIL_SENDER_PASSWORD,
    },
    destinationEmail: result.parsed.DESTINATION_EMAIL,
  }),
};
