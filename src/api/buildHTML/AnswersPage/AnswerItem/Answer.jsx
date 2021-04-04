const React = require('react');
const { keys } = require('ramda');
const { default: Typography } = require('@material-ui/core/Typography');

const formatObjectAnswerItem = (answerItem) => {
  const key = keys(answerItem)[0];

  return `${key}: ${answerItem[key]}`;
};

const SimpleAnswer = (props) => {
  const { answer } = props;

  return (
    <div style={styles.answerItem}>
      <Typography>{answer}</Typography>
    </div>
  );
};

const ArrayAnswer = (props) => {
  const { answer } = props;

  return answer.map((item) => {
    return typeof item === 'object' ? (
      <SimpleAnswer answer={formatObjectAnswerItem(item)} />
    ) : (
      <SimpleAnswer answer={item} />
    );
  });
};

const selectAnswerComponent = (answer) => {
  if (typeof answer === 'string') return SimpleAnswer;
  if (Array.isArray(answer)) return ArrayAnswer;
  return false;
};

const Answer = (props) => {
  const { answer } = props;

  const AnswerComponent = selectAnswerComponent(answer);

  return <AnswerComponent answer={answer} />;
};

const styles = {
  answerItem: {
    padding: '8px 0px 0px 24px',
  },
};

module.exports = Answer;
