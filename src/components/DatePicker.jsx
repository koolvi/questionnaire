import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();
  const { label, value, handleDate } = props;

  return (
    <TextField
      id="date"
      label={label}
      type="date"
      // defaultValue="2017-05-24"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      value={value}
      onChange={handleDate}
    />
  );
}
