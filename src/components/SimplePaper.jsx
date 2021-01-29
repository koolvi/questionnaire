import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  paper: {
    // paddingTop: '30px',
    // paddingRight: '30px',
    // paddingBottom: '30px',
    // paddingLeft: '30px',
  },
}));

export default function SimplePaper(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      {children}
    </Paper>
  );
}
