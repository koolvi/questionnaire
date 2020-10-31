import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import cn from 'classnames';
import ButtonMUI from '@material-ui/core/Button';
// import colors from '../style/colors';


// const getButtonColor = (type) => {
//   switch (type) {
//     case 'primary': return colors.PRIMARY;
//     case 'success': return colors.SUCCESS;
//     case 'danger': return colors.DANGER;
//     // case 'forMenu': return colors.WHITE;
//     default: return colors.PRIMARY;
//   }
// };

const Button = (props) => {
  const {
    classes,
    // onClick,
    // disabled,
    // className,
    // type,
    // variant,
    ...rest
  } = props;

  // const getStyle = () => {
  //   return {
  //     background: ((disabled) ? colors.SECONDARY : getButtonColor(type)),
  //     color: (variant === null)
  //       ? colors.PRIMARY
  //       : 'white',
  //     border: `1px solid ${((variant === 'outlined') && (type === 'forMenu'))
  //       ? colors.WHITE
  //       : 'transparent'}`,
  //   };
  // };

  return (
    <ButtonMUI
      variant="contained"
      // className={cn(className, classes.button)}
      // onClick={onClick}
      // style={getStyle()}
      color="primary"
      // disabled={disabled}
      {...rest}
    >
      Далее
    </ButtonMUI>
  );
};

const styles = {
  button: {
    // '&:hover': {
    //   background: 'rgb(204, 100, 100)',
    // },
  },
};

export default withStyles(styles)(Button);
