import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';
import Counter from '../components/Counter';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page9 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 9,
    question: 'Требуется ли замена окон?',
    answer: {
      variantAnswer: '',
      windowsCount: 0,
    },
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
      onClickBack={onClickBack}
    >
      <div className={classes.conteinerAnswer}>
        <div className={classes.answer}>
          <div className={classes.answerYes}>
            <RadioGroup
              value={answer.answer.variantAnswer}
              onChange={e => setAnswer({
                ...answer,
                answer: { ...answer.answer, variantAnswer: e.target.value },
              })}
              answerVariants={[
                { id: 0, value: 'Да', label: 'Да, в количестве:' },
              ]}
            />
            <Counter
              value={answer.answer.windowsCount}
              textRight="шт."
              onClick={value => setAnswer({
                ...answer,
                answer: { ...answer.answer, windowsCount: value },
              })}
              disabled={(answer.answer.variantAnswer === 'Нет')}
            />
          </div>
          <div className={classes.answerNo}>
            <RadioGroup
              value={answer.answer.variantAnswer}
              onChange={e => setAnswer({
                ...answer,
                answer: { ...answer.answer, variantAnswer: e.target.value },
              })}
              answerVariants={[
                { id: 1, value: 'Нет', label: 'Нет' },
              ]}
            />
          </div>
        </div>
      </div>
      <Button
        disabled={(answer.answer.variantAnswer.length === 0)}
        onClick={() => onClickNext({
          id: answer.id,
          question: answer.question,
          answer: [
            { Ответ: answer.answer.variantAnswer },
            { 'Кол-во': answer.answer.windowsCount },
          ],
        })}
      />
    </QuestionCardLayout>
  );
};

const styles = {
  conteinerAnswer: {
    width: '100%',
    marginBottom: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 1,
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
  answer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  answerYes: {
    display: 'flex',
  },
};

export default withStyles(styles)(Page9);
