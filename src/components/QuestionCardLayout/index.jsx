import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import QuestionNumber from './QuestionNumber';
import QuestionText from './QuestionText';
import mediaQueries from '../../mediaQueries';

const QuestionCardLayout = (props) => {
  const {
    classes,
    questionNumber,
    questionText,
    children,
  } = props;

  return (
    <div className={classes.container}>
      <QuestionNumber questionNumber={questionNumber} />
      <div className={classes.contentContainer}>
        <QuestionText text={questionText} />
        {children}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  },
  contentContainer: {
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    paddingRight: '30px',
    paddingLeft: '30px',
    [`@media ${mediaQueries.mobile}`]: {
      height: 'auto',
      flex: 1,
      width: '100%',
      boxSizing: 'border-box',
    },
  },
};

export default withStyles(styles)(QuestionCardLayout);
