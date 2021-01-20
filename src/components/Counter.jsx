import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';


const Counter = (props) => {
  const {
    classes,
    value,
    textRight = '',
    textLeft = '',
    disabled,
    onClick,
  } = props;

  const handleMinus = () => {
    if (value === 0) onClick(0);
    else onClick(value - 1);
  };

  return (
    <div className={classes.container} style={{ opacity: disabled ? 0.3 : 1 }}>
      {(textLeft === '')
        ? null
        : (
          <div className={classes.textLeft}>
            <Typography>{textLeft}</Typography>
          </div>
        )
      }
      <div
        className={classes.button}
        onClick={
          disabled
            ? null
            : () => handleMinus()
        }
      >
        <RemoveCircle color="primary" />
      </div>

      <div className={classes.value}>
        {value}
      </div>

      <div
        className={classes.button}
        onClick={disabled ? null : () => onClick(value + 1)}
      >
        <AddCircle color="primary" />
      </div>
      <Typography>{textRight}</Typography>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width: '24px',
    height: '24px',
    marginRight: '8px',
  },
  value: {
    marginRight: '8px',
    fontWeight: 600,
    fontSize: '18px',
  },
  textLeft: {
    // hjhjh
  },
};

export default withStyles(styles)(Counter);
