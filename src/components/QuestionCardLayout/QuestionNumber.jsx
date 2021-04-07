import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GoBackIcon from '@material-ui/icons/KeyboardArrowLeft';
import mediaQueries from '../../mediaQueries';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    // marginBottom: '30px',
    [`@media ${mediaQueries.mobile}`]: {
      flexGrow: 0,
    },
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginRight: '20px',
  },
}));

export default function QuestionNumber(props) {
  const classes = useStyles();
  const { questionNumber, onClickBack } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {(onClickBack === undefined)
            ? undefined
            : <GoBackIcon className={classes.button} onClick={onClickBack} />
          }
          <Typography variant="h6" className={classes.title}>
            {`Вопрос № ${questionNumber}`}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
