const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const sendMail = require('./sendMail');
const buildHTML = require('./buildHTML');

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', '..', 'build')));
app.use(express.static('public'));

app.post('/api/complete', async (req, res) => {
  try {
    const html = buildHTML(req.body);

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.TO,
      subject: 'Результаты опроса',
      text: 'результаты опроса',
      attachments: [{
        filename: 'answers.html',
        content: html,
        contentType: 'text/html',
      }],
    };

    await sendMail(mailOptions);
    res.json({ status: 'success' });
  } catch (err) {
    res.status(500).send('error');
  }
});

app.listen(port, () => {
  global.console.log(`api listening at port: ${port}`);
});
