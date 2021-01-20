import React from 'react';
import MaskedInput from 'react-text-mask';
// import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['8', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

export default function FormattedInputs() {
  // const classes = useStyles();
  const [values, setValues] = React.useState({
    textmask: '',
    // numberformat: '1320',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    // <div className={classes.root}>
    <FormControl variant="outlined">
      <InputLabel htmlFor="formatted-text-mask-input">Контактный телефон</InputLabel>
      <OutlinedInput
        value={values.textmask}
        onChange={handleChange}
        name="textmask"
        id="formatted-text-mask-input"
        inputComponent={TextMaskCustom}
      />
    </FormControl>
    // </div>
  );
}
