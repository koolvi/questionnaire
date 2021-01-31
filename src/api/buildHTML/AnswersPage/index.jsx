const React = require('react');

const AnswerItem = require('./AnswerItem');

const AnswersPage = (props) => {
  const { answersData } = props;

  return (
    <html lang="en" style={styles.html}>
      <head>
        <meta charSet="utf-8" />
        <title>Answers</title>
      </head>

      <body style={styles.body}>
        <div style={styles.root}>
          <div style={styles.contentContainer}>
            {answersData.map(answerData => (
              <AnswerItem key={answerData.id} answerData={answerData} />
            ))}
          </div>
        </div>
      </body>
    </html>
  );
};

const styles = {
  html: {
    padding: 0,
  },

  body: {
    padding: 0,
    margin: 0,
  },

  root: {
    display: 'flex',
    justifyContent: 'center',
  },

  contentContainer: {
    fontFamily: 'Arial',
    padding: 16,
    backgroundColor: '#f0f0f0',
    maxWidth: 1000,
  },
};

module.exports = AnswersPage;
