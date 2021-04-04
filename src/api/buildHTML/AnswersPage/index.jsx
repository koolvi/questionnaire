const React = require('react');

const AnswerItem = require('./AnswerItem');

const AnswersPage = (props) => {
  const { answersData } = props;

  return (
    <body style={styles.body}>
      <div style={styles.root}>
        <div style={styles.contentContainer}>
          {answersData.map(answerData => (
            <AnswerItem key={answerData.id} answerData={answerData} />
          ))}
        </div>
      </div>
    </body>
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
    backgroundColor: '#f5f5f5',
  },

  contentContainer: {
    // fontFamily: 'Arial',
    padding: 16,
    // backgroundColor: '#f0f0f0',
    maxWidth: 1000,
  },
};

module.exports = AnswersPage;
