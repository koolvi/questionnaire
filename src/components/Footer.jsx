import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import mediaQueries from '../mediaQueries';


const Footer = (props) => {
  const { classes, children } = props;
  return (
    <div className={classes.container}>
      <Typography variant="overline" className={classes.text}>Ваш дизайнер - Катерина Барт</Typography>
      {children}
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
    position: 'fixed',
    bottom: 0,
    [`@media ${mediaQueries.mobile}`]: {
      background: 'white',
      height: '30px',
      marginTop: '0px',
      zIndex: 10,
    },
  },
  text: {
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: '5px',
    fontSize: '15px',
    textShadow: '0px 0px 2px rgba(222, 222, 222, 1)',
    [`@media ${mediaQueries.mobile}`]: {
      fontSize: '9px',
      color: '#CBCBCB',
    },
  },
};

export default withStyles(styles)(Footer);
