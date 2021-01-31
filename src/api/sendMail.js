const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
}));

module.exports = options => new Promise((resolve, reject) => {
  transporter.sendMail(options, (error) => {
    if (error) reject(error);
    else resolve();
  });
});
