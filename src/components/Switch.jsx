import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels(props) {
  const { label, checked, onChange } = props;

  return (
    <FormControlLabel
      control={(
        <Switch
          checked={checked}
          onChange={onChange}
          name="checkedB"
          color="primary"
        />
      )}
      label={label}
    />
  );
}
