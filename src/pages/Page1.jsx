import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextFieldInput from '../components/TextFieldInput';
// import PhoneNumberInput from '../components/PhoneNumberInput';
import Button from '../components/Button';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import mediaQueries from '../mediaQueries';

const Page1 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 1,
    name: '',
    email: '',
    phone: '',
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText="Тут написан какой-то приветствующий текст, который предлагает пройти тест из 40+ вопросов"
    >
      <div className={classes.answer}>
        <TextFieldInput
          label="ФИО"
          value={answer.name}
          onChange={writingText => setAnswer({ ...answer, name: writingText })}
        />
        <TextFieldInput
          label="Email"
          value={answer.email}
          onChange={writingText => setAnswer({ ...answer, email: writingText })}
        />
        {/* <PhoneNumberInput /> */}
        <TextFieldInput
          label="Контактный телефон"
          value={answer.phone}
          onChange={writingText => setAnswer({ ...answer, phone: writingText })}
        />
      </div>
      <Button onClick={() => onClickNext(answer)} />
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
