import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MultilineInput from '../components/MultilineInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page15 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 15,
    answer: [
      { id: 0, type: 'полоска', checked: false },
      { id: 1, type: 'горох', checked: false },
      { id: 2, type: 'клетка', checked: false },
      { id: 3, type: 'цветы', checked: false },
      { id: 4, type: 'вензель', checked: false },
      { id: 5, type: 'восточные огурцы', checked: false },
    ],
    comments: '',
  });

  const handleTypeChecked = (typeId) => {
    const newAnswer = answer.answer.map((item) => {
      if (item.id === typeId) return { id: item.id, type: item.type, checked: !item.checked };
      return item;
    });
    setAnswer({ ...answer, answer: newAnswer });
  };

  const getTypesOnlyTrue = () => {
    const newAnswer = answer.answer.filter(item => (item.checked));
    return newAnswer.map(item => item.type);
  };

  const getAnswer = () => {
    const types = getTypesOnlyTrue();
    onClickNext({ ...answer, answer: types });
  };

  const renderContent = () => {
    return (
      <div className={classes.allCheckboxes}>
        {answer.answer.map(item => (
          <div className={classes.checkbox} key={item.id}>
            <CheckboxLabel
              checked={item.checked}
              label={item.type}
              onChange={() => handleTypeChecked(item.id)}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText="Выберите орнамент, который стоит использовать в интерьере (который вам нравится), а так же можете написать свой вариант"
    >
      <div className={classes.answer}>
        {renderContent()}
        <div className={classes.comments}>
          <MultilineInput
            label="Комментарии"
            value={answer.comments}
            onChange={writingText => setAnswer({ ...answer, comments: writingText })}
          />
        </div>
      </div>
      <Button onClick={() => getAnswer()} />
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
    display: 'flex',
    flexWrap: 'wrap',
  },
  checkbox: {
    [`@media ${mediaQueries.mobile}`]: {
      width: '50%',
    },
    width: '33%',
  },
  comments: {
    width: '100%',
  },
};

export default withStyles(styles)(Page15);
