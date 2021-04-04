// const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const prettier = require('prettier');
const { ServerStyleSheets } = require('@material-ui/core/styles');

const AnswersPage = require('./AnswersPage');

// const data = require('../data');

const buildAnswersHTML = (answersData) => {
  const sheets = new ServerStyleSheets();
  const html = ReactDOMServer.renderToString(
    sheets.collect(<AnswersPage answersData={answersData} />),
  );
  const cssString = sheets.toString();

  const htmlWDoc = `
    <!DOCTYPE html>
    <html lang="en" style={styles.html}>
      <head>
        <meta charSet="utf-8" />
        <title>Answers</title>
        <style id="jss-server-side">${cssString}</style>
      </head>

      
      ${html}
    </html>
  `;

  const prettyHtml = prettier.format(htmlWDoc, { parser: 'html' });

  return prettyHtml;
  // const outputFile = './output.html';
  // fs.writeFileSync(outputFile, prettyHtml);
  // global.console.log(`Wrote ${outputFile}`);
};

// buildAnswersHTML();

module.exports = buildAnswersHTML;
