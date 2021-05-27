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
    disableMarginPadding = false,
    onClickBack,
    children,
  } = props;

  return (
    <div className={classes.container}>
      <QuestionNumber questionNumber={questionNumber} onClickBack={onClickBack} />
      <div
        className={classes.contentContainer}
        style={{
          paddingRight: disableMarginPadding ? '0px' : '30px',
          paddingLeft: disableMarginPadding ? '0px' : '30px',
        }}
      >
        <div className={classes.obertka}>
          <QuestionText disableMarginPaddingIn18Page={disableMarginPadding} text={questionText} />
          {children}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minWidth: '800px',
    maxWidth: '1000px',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 'auto',
      maxWidth: 'auto',
      position: 'fixed',
      top: 0,
    },
  },
  contentContainer: {
    minHeight: '450px',
    maxHeight: '600px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    [`@media ${mediaQueries.mobile}`]: {
      height: 'auto',
      flex: 1,
      width: '100%',
      boxSizing: 'border-box',
    },
  },
  obertka: {
    paddingBottom: '30px',
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
};

export default withStyles(styles)(QuestionCardLayout);
