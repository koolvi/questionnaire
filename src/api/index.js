const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const config = require('./config');

const sendMail = require('./sendMail');
const buildHTML = require('./buildHTML');

const app = express();
const { port } = config.get();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.post('/api/complete', async (req, res) => {
  try {
    const { sender, destinationEmail } = config.get();

    const html = buildHTML(req.body);

    const mailOptions = {
      from: sender.email,
      to: destinationEmail,
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
    global.console.log(err);
    res.status(500).send('error');
  }
});

app.listen(port, () => {
  global.console.log(`api listening at port: ${port}`);
});
