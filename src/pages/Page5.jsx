import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MultilineInput from '../components/MultilineInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page5 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 5,
    question: 'Напишите какое количество гостей и как часто Вы принимаете? Нужно ли предусмотреть дополнительные спальные места?',
    answer: '',
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
      onClickBack={onClickBack}
      button={(
        <Button
          disabled={(answer.answer.length === 0)}
          onClick={() => onClickNext(answer)}
        />
      )}
    >
      <div className={classes.answer}>
        <MultilineInput
          label="Ваш ответ"
          value={answer.answer}
          onChange={writingText => setAnswer({ ...answer, answer: writingText })}
        />
      </div>
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    flex: 1,
    paddingLeft: '30px',
    paddingRight: '30px',
    [`@media ${mediaQueries.mobile}`]: {
      width: 'auto',
    },
  },
};

export default withStyles(styles)(Page5);
