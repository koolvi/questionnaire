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
      button={(
        <Button
          disabled={(answer.answer === null)}
          onClick={() => onClickNext(answer)}
        />
      )}
    >
      <div className={classes.answer}>
        <DatePicker
          label="Ориентировочная дата"
          value={answer.answer}
          handleDate={selectedDate => setAnswer({ ...answer, answer: selectedDate })}
        />
      </div>
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    paddingLeft: '30px',
    paddingRight: '30px',
    flex: 1,
    [`@media ${mediaQueries.mobile}`]: {
      width: 'auto',
      paddingLeft: 'inherit',
      paddingRight: 'inherit',
    },
  },
};

export default withStyles(styles)(Page39);
