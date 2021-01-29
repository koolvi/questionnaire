import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
}));

export default function QuestionNumber(props) {
  const classes = useStyles();
  const { questionNumber } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {`Вопрос № ${questionNumber}`}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
