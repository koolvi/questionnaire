import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page24 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 24,
    question: 'Если планируется отдельная постирочная, то что в ней необходимо?',
    answer: [
      { id: 0, name: 'Не планируется', checked: false },
      { id: 1, name: 'Сушильная машина', checked: false },
      { id: 2, name: 'Стиральная машина', checked: false },
      { id: 3, name: 'Шкаф под химию', checked: false },
      { id: 4, name: 'Шкаф под белье', checked: false },
    ],
    // comments: '',
  });
  const [isDisabledAnswers, setDisabledAnswers] = useState(false);

  const checkForDisabled = () => {
    const arrTrueItems = answer.answer.filter(item => item.checked === true);
    return arrTrueItems.length === 0;
  };

  const handleChecked = (selectedId) => {
    const newAnswer = answer.answer.map((item) => {
      if (item.id === selectedId) return { id: item.id, name: item.name, checked: !item.checked };
      return item;
    });
    setAnswer({ ...answer, answer: newAnswer });
  };

  const getAnswer = () => {
    const selectedItemsArr = answer.answer.filter(item => (item.checked));
    const answerArr = selectedItemsArr.map(item => item.name);
    onClickNext({ ...answer, answer: answerArr });
  };

  const handleCheckedFirstCheckbox = () => {
    // будущее значение чек первого элемента
    const futureFirstElementChecked = !answer.answer[0].checked;
    // новый массив - первый чекбокс с новым значением, сброс галочек у остальных чекбоксов
    const newAnswer = answer.answer.map((item) => {
      if (item.id === 0) return { ...item, checked: !item.checked };
      return futureFirstElementChecked ? { ...item, checked: false } : item;
    });
    // установить новый стейт
    setAnswer({ ...answer, answer: newAnswer });
    setDisabledAnswers(futureFirstElementChecked);
  };

  const renderContent = () => {
    return (
      <div className={classes.allCheckboxes}>
        {answer.answer.map(item => (
          <div className={classes.checkbox} key={item.id}>
            <CheckboxLabel
              checked={item.checked}
              label={item.name}
              onChange={() => {
                return (item.id === 0)
                  ? handleCheckedFirstCheckbox()
                  : handleChecked(item.id);
              }}
              isItalicText={item.id === 0}
              disabled={(item.id === 0) ? false : isDisabledAnswers}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
      onClickBack={onClickBack}
    >
      <div className={classes.answer}>
        {renderContent()}
      </div>
      <Button
        disabled={checkForDisabled()}
        onClick={() => getAnswer()}
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
  allCheckboxes: {
    // display: 'flex',
    // flexWrap: 'wrap',
    display: 'grid',
    gridTemplateColumns: '300px',
    gridTemplateRows: 'repeat(5, 33px)',
  },
  checkbox: {
    [`@media ${mediaQueries.mobile}`]: {
      // width: '50%',
    },
    // width: '33%',
  },
};

export default withStyles(styles)(Page24);
