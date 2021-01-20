import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page16 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 16,
    answer: '',
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText="Какой цвет дерева предпочитаете?"
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
      <Button onClick={() => onClickNext(answer)} />
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
};

export default withStyles(styles)(Page16);
