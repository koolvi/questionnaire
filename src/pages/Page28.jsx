// Перечислите какие имеющиеся у Вас предметы хотели бы учесть в интерьере?
// мебель, ковры, скульптуры, картины, приборы, инструменты, книги
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MultilineInput from '../components/MultilineInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page28 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 28,
    question: 'Напишите какие имеющиеся у Вас предметы хотели бы учесть в интерьере?',
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
            мебель, ковры, скульптуры, картины, приборы, инструменты, книги
          </Typography>
        </div>
      </div>
      <Button onClick={() => onClickNext(answer)} />
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

export default withStyles(styles)(Page28);
