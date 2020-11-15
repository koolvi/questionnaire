import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup(props) {
  const { answerVariants } = props;
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const renderAnswerVariants = () => {
    return answerVariants.map(variant => (
      <FormControlLabel
        key={variant.id}
        value={variant.value}
        control={<Radio />}
        label={variant.label}
      />
    ));
  };

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Gender</FormLabel> */}
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        {renderAnswerVariants()}
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
        {/* <FormControlLabel value="disabled"
         disabled control={<Radio />} label="(Disabled option)" /> */}
      </RadioGroup>
    </FormControl>
  );
}
