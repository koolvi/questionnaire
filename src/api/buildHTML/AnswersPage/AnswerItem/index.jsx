const React = require('react');
const { default: Paper } = require('@material-ui/core/Paper');

const Question = require('./Question');
const Answer = require('./Answer');
const Comment = require('./Comment');

const AnswerItem = (props) => {
  const { answerData } = props;
  const { id, question, answer, comments } = answerData;

  return (
    <Paper style={styles.root}>
      <Question id={id} question={question} />
      <hr />
      <Answer answer={answer} />
      {Boolean(comments) && <hr />}
      {Boolean(comments) && <Comment comment={comments} />}
    </Paper>
  );
};

const styles = {
  root: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'white',
  },
};

module.exports = AnswerItem;
