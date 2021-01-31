// const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const prettier = require('prettier');

const AnswersPage = require('./AnswersPage');

// const data = require('../data');

const buildAnswersHTML = (answersData) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <AnswersPage answersData={answersData} />,
  );

  const htmlWDoc = `<!DOCTYPE html>${html}`;
  const prettyHtml = prettier.format(htmlWDoc, { parser: 'html' });

  return prettyHtml;
  // const outputFile = './output.html';
  // fs.writeFileSync(outputFile, prettyHtml);
  // global.console.log(`Wrote ${outputFile}`);
};

// buildAnswersHTML();

module.exports = buildAnswersHTML;
