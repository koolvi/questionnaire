import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';


const Button = (props) => {
  const {
    classes,
    // disabled = false,
    variant = 'contained',
    size = 'large',
    text = 'Далее',
    color = 'primary',
    ...rest
  } = props;

  return (
    <div className={classes.conteiner}>
      <ButtonMUI
        variant={variant}
        size={size}
        className={classes.button}
        color={color}
        // disabled={disabled}
        {...rest}
        disabled={false}
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
