const React = require('react');
const { keys } = require('ramda');

const formatObjectAnswerItem = (answerItem) => {
  const key = keys(answerItem)[0];

  return `${key}: ${answerItem[key]}`;
};

const SimpleAnswer = (props) => {
  const { answer } = props;

  return (
    <div style={styles.answerItem}>
      {answer}
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

const Comment = (props) => {
  const { comment } = props;

  return (
    <div style={styles.commentContainer}>
      {comment}
    </div>
  );
};

const selectAnswerComponent = (answer) => {
  if (typeof answer === 'string') return SimpleAnswer;
  if (Array.isArray(answer)) return ArrayAnswer;
  return false;
};

const AnswerItem = (props) => {
  const { answerData } = props;
  const { id, question, answer, comment } = answerData;

  const AnswerComponent = selectAnswerComponent(answer);

  return (
    <div style={styles.root}>
      <div style={styles.question}>
        {`${id}) ${question}`}
      </div>

      {AnswerComponent && <AnswerComponent answer={answer} />}

      {Boolean(comment) && <Comment comment={comment} />}
    </div>
  );
};

const styles = {
  root: {
    marginBottom: 50,
  },

  question: {
    fontWeight: 600,
  },

  commentContainer: {},

  answerItem: {
    padding: '8px 0px 0px 24px',
  },
};

module.exports = AnswerItem;
