import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import DatePicker from '../components/DatePicker';


const Page39 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 39,
    question: 'Когда планируете заехать в новое жилье?',
    answer: null,
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
      onClickBack={onClickBack}
    >
      <div className={classes.answer}>
        <DatePicker
          label="Ориентировочная дата"
          value={answer.answer}
          handleDate={selectedDate => setAnswer({ ...answer, answer: selectedDate })}
        />
      </div>
      <Button
        disabled={(answer.answer === null)}
        onClick={() => onClickNext(answer)}
      />
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    width: '100%',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
};

export default withStyles(styles)(Page39);
