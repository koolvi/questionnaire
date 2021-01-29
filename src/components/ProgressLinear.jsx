import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const normalise = (value, minValue, maxValue) => (value - minValue) * 100 / (maxValue - minValue);

function LinearProgressWithLabel(props) {
  const { currentValue, maxValue, minValue } = props;
  return (
    <LinearProgress variant="determinate" value={normalise(currentValue, minValue, maxValue)} />
  );
}

export default LinearProgressWithLabel;
