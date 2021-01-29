import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MultilineInput from '../components/MultilineInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page3 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 3,
    question: 'Напишите состав проживающих членов семьи, указав их возраст',
    answer: '',
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
    >
      <div className={classes.answer}>
        <MultilineInput
          label="Ваш ответ"
          value={answer.answer}
          onChange={writingText => setAnswer({ ...answer, answer: writingText })}
        />
        <div className={classes.example}>
          <Typography>
            Например:
            <br />
            - Взрослые: муж (38 лет), жена (35 лет), отец мужа (62 года)
            <br />
            - Дети: дочь старшая (14 лет), дочь младшая (2 года)
          </Typography>
        </div>
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
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
  example: {
    fontSize: '12px',
    color: 'gray',
    fontStyle: 'italic',
    marginTop: '20px',
  },
};

export default withStyles(styles)(Page3);
