import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MultilineInput from '../components/MultilineInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page4 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 4,
    question: 'Напишите по каждому члену семьи о его хобби, которое необходимо учесть при составлении дизайна Вашего жилья',
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
        <div className={classes.example}>
          <Typography>
            Например:
            <br />
            - Жена: музыка, необходимо пианино в гостевой
            <br />
            - Муж: спорт, нужен турник на стене в прихожей
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
    flex: 1,
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

export default withStyles(styles)(Page4);
