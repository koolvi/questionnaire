import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioButtonsGroup(props) {
  const {
    value,
    answerVariants,
    onChange,
    isItalicText = false,
    ...rest
  } = props;

  const renderAnswerVariants = () => {
    return answerVariants.map(variant => (
      <FormControlLabel
        key={variant.id}
        value={variant.value}
        style={{ 'font-style': ((variant.id === 0) && (isItalicText)) ? 'italic' : 'normal' }}
        control={<Radio color="primary" />}
        label={variant.label}
      />
    ));
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        value={value}
        onChange={onChange}
        {...rest}
      >
        {renderAnswerVariants()}
      </RadioGroup>
    </FormControl>
  );
}
