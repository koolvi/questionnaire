
// на моей мобилке не отображается ДД-ММ-ГГГГ !!!!!!!

import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import MultilineInput from '../components/MultilineInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import DatePicker from '../components/DatePicker';


const Page39 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 39,
    answer: null,
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText="Когда планируете заехать в новое жилье?"
    >
      <div className={classes.answer}>
        <DatePicker
          label="Ориентировочная дата"
          value={answer.answer}
          handleDate={e => setAnswer(e.target.value)}
        />
        {/* <MultilineInput
          label="Ваш ответ"
          value={answer.answer}
          onChange={writingText => setAnswer({ ...answer, answer: writingText })}
        /> */}
      </div>
      <Button onClick={() => onClickNext(answer)} />
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
  // example: {
  //   fontSize: '12px',
  //   color: 'gray',
  //   fontStyle: 'italic',
  //   marginTop: '20px',
  // },
};

export default withStyles(styles)(Page39);
