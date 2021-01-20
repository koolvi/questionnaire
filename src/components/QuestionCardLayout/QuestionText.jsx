import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import mediaQueries from '../../mediaQueries';

const QuestionText = (props) => {
  const { classes, text } = props;

  return (
    <div className={classes.guestion}>
      <Typography>
        {text}
      </Typography>
    </div>
  );
};

const styles = {
  guestion: {
    paddingBottom: '20px',
    fontSize: '16px',
    textAlign: 'justify',
    [`@media ${mediaQueries.mobile}`]: {
      textAlign: 'left',
    },
  },
};

export default withStyles(styles)(QuestionText);
