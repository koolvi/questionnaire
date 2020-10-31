import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const Page1 = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <p className={classes.text}>Text ghch h</p>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '50px',
    background: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'green',
  },
};

export default withStyles(styles)(Page1);
