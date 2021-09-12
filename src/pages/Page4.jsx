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
  example: {
    fontSize: '12px',
    color: 'gray',
    fontStyle: 'italic',
    marginTop: '20px',
  },
};

export default withStyles(styles)(Page4);
