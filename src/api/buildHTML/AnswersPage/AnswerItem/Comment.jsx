
const React = require('react');
const { default: Typography } = require('@material-ui/core/Typography');

const Comment = (props) => {
  const { comment } = props;

  return (
    <div style={styles.commentContainer}>
      <Typography>{`Комментарий: ${comment}`}</Typography>
    </div>
  );
};

const styles = {
  commentContainer: {},
};

module.exports = Comment;
