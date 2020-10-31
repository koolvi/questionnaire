import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const Footer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <p className={classes.text}>Ваш дизайнер Катерина Барт</p>
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
  },
  text: {
    color: '#CBCBCB',
    fontStyle: 'italic',
  },
};

export default withStyles(styles)(Footer);
