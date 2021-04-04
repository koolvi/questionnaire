
const React = require('react');
const { default: Typography } = require('@material-ui/core/Typography');

const Question = (props) => {
  const { id, question } = props;

  return (
    <div style={styles.question}>
      <Typography>{`${id}) ${question}`}</Typography>
    </div>
  );
};

const styles = {
  question: {
    fontWeight: 600,
  },
};

module.exports = Question;
