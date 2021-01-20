import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';


const Button = (props) => {
  const {
    classes,
    variant = 'contained',
    size = 'large',
    text = 'Далее',
    ...rest
  } = props;

  return (
    <div className={classes.conteiner}>
      <ButtonMUI
        variant={variant}
        size={size}
        className={classes.button}
        color="primary"
        // disabled={disabled}
        {...rest}
      >
        {text}
      </ButtonMUI>
    </div>
  );
};

const styles = {
  conteiner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '200px',
  },
};

export default withStyles(styles)(Button);
