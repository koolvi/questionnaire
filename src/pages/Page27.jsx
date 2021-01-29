import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import RadioGroup from '../components/RadioGroup';


const Page27 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 27,
    question: 'Присутствие в интерьере камина',
    answer: [],
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
    >
      <div className={classes.answer}>
        <RadioGroup
          isItalicText
          value={answer.answer}
          onChange={e => setAnswer({ ...answer, answer: e.target.value })}
          answerVariants={[
            { id: 0, value: 'Без камина', label: 'Без камина' },
            { id: 1, value: 'Биокамин', label: 'Биокамин' },
            { id: 2, value: 'Угловой', label: 'Угловой' },
            { id: 3, value: 'Камин с дымоходом', label: 'Камин с дымоходом' },
          ]}
        />
      </div>
      <Button
        disabled={answer.answer.length === 0}
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
  allCheckboxes: {
    display: 'grid',
    gridTemplateColumns: '500px',
    gridTemplateRows: 'repeat(4, 30px)',
  },
  checkbox: {
    [`@media ${mediaQueries.mobile}`]: {
      // width: '50%',
    },
    // width: '33%',
  },
};

export default withStyles(styles)(Page27);
