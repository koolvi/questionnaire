import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import cn from 'classnames';


const useStyles = makeStyles(() => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 210,
    marginTop: '16px',
    marginBottom: '8px',
    background: 'white',
  },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // },
}));

export default function SimpleSelect(props) {
  const {
    value,
    label,
    helperText = '',
    children,
    className,
    onChange,
  } = props;
  const classes = useStyles();
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <FormControl variant="outlined" className={cn(classes.formControl, className)}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        // labelId="demo-simple-select-outlined-label"
        // id="demo-simple-select-outlined"
        value={value}
        onChange={onChange}
        label={label}
      >
        {children}
      </Select>
      {(helperText === '')
        ? null
        : <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
