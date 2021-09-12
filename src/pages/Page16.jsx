import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page16 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 16,
    question: 'Какой цвет дерева предпочитаете?',
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
        <RadioGroup
          value={answer.answer}
          onChange={e => setAnswer({ ...answer, answer: e.target.value })}
          answerVariants={[
            { id: 0, value: 'Светлый', label: 'Светлый' },
            { id: 1, value: 'Темный', label: 'Темный' },
          ]}
        />
      </div>
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 1,
    paddingLeft: '30px',
    paddingRight: '30px',
    [`@media ${mediaQueries.mobile}`]: {
      width: 'auto',
    },
  },
};

export default withStyles(styles)(Page16);
