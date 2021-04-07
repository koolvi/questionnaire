import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MultilineInput from '../components/MultilineInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page6 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 6,
    question: 'Напишите в каком помещении семья чаще всего собирается, проводит время вместе',
    answer: '',
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
      onClickBack={onClickBack}
    >
      <div className={classes.answer}>
        <MultilineInput
          label="Ваш ответ"
          value={answer.answer}
          onChange={writingText => setAnswer({ ...answer, answer: writingText })}
        />
      </div>
      <Button
        disabled={(answer.answer.length === 0)}
        onClick={() => onClickNext(answer)}
      />
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    width: '100%',
    flex: 1,
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
};

export default withStyles(styles)(Page6);
