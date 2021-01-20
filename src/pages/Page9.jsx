import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';
import Counter from '../components/Counter';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page9 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 9,
    answer: '',
    windowsCount: 0,
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText="Требуется ли замена окон?"
    >
      <div className={classes.conteinerAnswer}>
        <div className={classes.answer}>
          <div className={classes.answerYes}>
            <RadioGroup
              value={answer.answer}
              onChange={e => setAnswer({ ...answer, answer: e.target.value })}
              answerVariants={[
                { id: 0, value: 'Да', label: 'Да, в количестве:' },
              ]}
            />
            <Counter
              value={answer.windowsCount}
              textRight="шт."
              onClick={value => setAnswer({ ...answer, windowsCount: value })}
              disabled={(answer.answer === 'Нет')}
            />
          </div>
          <div className={classes.answerNo}>
            <RadioGroup
              value={answer.answer}
              onChange={e => setAnswer({ ...answer, answer: e.target.value })}
              answerVariants={[
                { id: 1, value: 'Нет', label: 'Нет' },
              ]}
            />
          </div>
        </div>
      </div>
      <Button onClick={() => onClickNext(answer)} />
    </QuestionCardLayout>
  );
};

const styles = {
  conteinerAnswer: {
    width: '100%',
    marginBottom: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
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
