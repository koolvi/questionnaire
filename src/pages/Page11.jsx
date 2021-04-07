import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MultilineInput from '../components/MultilineInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page11 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 11,
    question: 'Напишите какое домашнее животное есть/планируется и в каком количестве (кошка, птица, рыбки и др.)? Ответ повлияет на использование антивандальных тканей и размещение места. Если животных нет - пропустите вопрос',
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

export default withStyles(styles)(Page11);
