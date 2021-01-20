import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page14 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 14,
    answer: [
      { id: 0, color: 'белый', checked: false },
      { id: 1, color: 'желтый', checked: false },
      { id: 2, color: 'розовый', checked: false },
      { id: 3, color: 'красный', checked: false },
      { id: 4, color: 'бордовый', checked: false },
      { id: 5, color: 'оранжевый', checked: false },
      { id: 6, color: 'фиолетовый', checked: false },
      { id: 7, color: 'малиновый', checked: false },
      { id: 8, color: 'синий', checked: false },
      { id: 9, color: 'голубой', checked: false },
      { id: 10, color: 'мятный', checked: false },
      { id: 11, color: 'зеленый', checked: false },
      { id: 12, color: 'коричневый', checked: false },
      { id: 13, color: 'бежевый', checked: false },
      { id: 14, color: 'медный', checked: false },
      { id: 15, color: 'золотистый', checked: false },
      { id: 16, color: 'серебристый', checked: false },
      { id: 17, color: 'серый', checked: false },
      { id: 18, color: 'черный', checked: false },
    ],
  });

  const handleColorChecked = (colorId) => {
    const newAnswer = answer.answer.map((item) => {
      if (item.id === colorId) return { id: item.id, color: item.color, checked: !item.checked };
      return item;
    });
    setAnswer({ ...answer, answer: newAnswer });
  };

  const getColorsOnlyTrue = () => {
    const newAnswer = answer.answer.filter(item => (item.checked));
    const colors = newAnswer.map(item => item.color);
    onClickNext({ ...answer, answer: colors });
  };

  const renderContent = () => {
    return (
      <div className={classes.allCheckboxes}>
        {answer.answer.map(item => (
          <div className={classes.checkbox} key={item.id}>
            <CheckboxLabel
              checked={item.checked}
              label={item.color}
              onChange={() => handleColorChecked(item.id)}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText="Выберите цвета, которые не стоит использовать в интерьере (цвета, которые не нравятся)"
    >
      <div className={classes.answer}>
        {renderContent()}
      </div>
      <Button onClick={() => getColorsOnlyTrue()} />
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
};

export default withStyles(styles)(Page14);
