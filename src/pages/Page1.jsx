import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextFieldInput from '../components/TextFieldInput';
import Button from '../components/Button';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import mediaQueries from '../mediaQueries';

const Page1 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 1,
    question: 'Тут написан какой-то приветствующий текст, который предлагает пройти тест из 40+ вопросов',
    answer: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const getOnlyNumber = (writingText) => {
    if (Number.isNaN(Number(writingText))) return;
    setAnswer({
      ...answer,
      answer: { ...answer.answer, phone: writingText },
    });
  };

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
    >
      <div className={classes.answer}>
        <TextFieldInput
          label="ФИО"
          value={answer.answer.name}
          onChange={writingText => setAnswer({
            ...answer,
            answer: { ...answer.answer, name: writingText },
          })}
        />
        <TextFieldInput
          label="Email"
          value={answer.answer.email}
          onChange={writingText => setAnswer({
            ...answer,
            answer: { ...answer.answer, email: writingText },
          })}
        />
        <TextFieldInput
          label="Контактный телефон"
          helperText="Например: 9210001122"
          value={answer.answer.phone}
          onChange={writingText => getOnlyNumber(writingText)}
        />
      </div>
      <Button
        disabled={(
          (answer.answer.name.length === 0)
          || (answer.answer.email.length === 0)
          || (answer.answer.phone.length === 0))}
        onClick={() => onClickNext(answer)}
      />
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
};

export default withStyles(styles)(Page1);
