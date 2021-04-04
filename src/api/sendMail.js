const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const config = require('./config');

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: config.get().sender.email,
    pass: config.get().sender.password,
  },
}));

module.exports = options => new Promise((resolve, reject) => {
  transporter.sendMail(options, (error) => {
    if (error) reject(error);
    else resolve();
  });
});
