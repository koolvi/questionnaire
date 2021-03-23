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
    // answer: {
    //   name: '',
    //   email: '',
    //   phone: '',
    // },
    answer: {
      field0: { quest: 'ФИО', answ: '' },
      field1: { quest: 'Email', answ: '' },
      field2: { quest: 'Телефон', answ: '' },
    },
  });

  const getOnlyNumber = (writingText) => {
    if (Number.isNaN(Number(writingText))) return;
    setAnswer({
      ...answer,
      answer: {
        ...answer.answer,
        field2: { ...answer.answer.field2, answ: writingText },
      },
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
          // value={answer.answer.name}
          value={answer.answer.field0.answ}
          onChange={writingText => setAnswer({
            ...answer,
            answer: {
              ...answer.answer,
              field0: { ...answer.answer.field0, answ: writingText } },
          })}
        />
        <TextFieldInput
          label="Email"
          value={answer.answer.field1.answ}
          onChange={writingText => setAnswer({
            ...answer,
            answer: {
              ...answer.answer,
              field1: { ...answer.answer.field1, answ: writingText } },
          })}
        />
        <TextFieldInput
          label="Контактный телефон"
          helperText="Например: 9210001122"
          value={answer.answer.field2.answ}
          onChange={writingText => getOnlyNumber(writingText)}
        />
      </div>
      <Button
        disabled={(
          (answer.answer.field0.answ.length === 0)
          || (answer.answer.field1.answ.length === 0)
          || (answer.answer.field2.answ.length === 0))}
        onClick={() => onClickNext({
          id: 1,
          question: 'Контактная информация',
          answer: [
            { [answer.answer.field0.quest]: answer.answer.field0.answ },
            { [answer.answer.field1.quest]: answer.answer.field1.answ },
            { [answer.answer.field2.quest]: answer.answer.field2.answ },
          ],
        })}
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
