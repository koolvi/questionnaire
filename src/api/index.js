const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// const sendMail = require('./sendMail');

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', '..', 'build')));
app.use(express.static('public'));

app.post('/api/complete', async (req, res) => {
  global.console.log(req.body);

  // const mailOptions = {
  //   from: 'roman24816@gmail.com',
  //   to: 'urstzt@gmail.com',
  //   subject: 'Sending Email using Node.js[nodemailer]',
  //   text: 'That was easy!',
  // };

  // try {
  //   await sendMail(mailOptions);
  // } catch (err) {
  //   global.console.log(err);
  // }

  res.json({ status: 'success' });
});

app.listen(port, () => {
  global.console.log(`api listening at port: ${port}`);
});
