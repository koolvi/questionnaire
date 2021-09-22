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
    button = false,
    onClickBack,
    children,
  } = props;

  return (
    <div className={classes.container}>
      <QuestionNumber questionNumber={questionNumber} onClickBack={onClickBack} />
      <div
        className={classes.contentContainer}
      >
        <div className={classes.obertka}>
          <QuestionText disableMarginPaddingIn18Page={disableMarginPadding} text={questionText} />
          {children}
          <div className={classes.button}>
            {button}
          </div>
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
      height: '100vh',
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 'auto',
      maxWidth: 'auto',
      overflowY: 'hidden',
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
      maxHeight: 'initial',
      boxSizing: 'border-box',
    },
  },
  obertka: {
    paddingBottom: '30px',
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    [`@media ${mediaQueries.mobile}`]: {
      overflowY: 'auto',
      paddingBottom: 60,
    },
  },
  button: {
    [`@media ${mediaQueries.mobile}`]: {
      position: 'absolute',
      bottom: 20,
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      background: 'white',
      paddingBottom: '20px',
      paddingTop: '20px',
      zIndex: 10,
      boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.2)',
    },
  },
};

export default withStyles(styles)(QuestionCardLayout);
