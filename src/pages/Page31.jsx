import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page31 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 31,
    question: 'Где необходимо сделать теплые полы?',
    answer: [
      { id: 0, name: 'Нигде', checked: false },
      { id: 1, name: 'Спальня', checked: false },
      { id: 2, name: 'Гостиная', checked: false },
      { id: 3, name: 'Прихожая', checked: false },
      { id: 4, name: 'Кабинет', checked: false },
      { id: 5, name: 'Терраса', checked: false },
      { id: 6, name: 'Холл', checked: false },
      { id: 7, name: 'Детская', checked: false },
      { id: 8, name: 'Балкон', checked: false },
      { id: 9, name: 'Санузел общий', checked: false },
      { id: 10, name: 'Игровая', checked: false },
      { id: 11, name: 'Гардеробная', checked: false },
      { id: 12, name: 'Санузел раздельный', checked: false },
      { id: 13, name: 'Кухня', checked: false },
      { id: 14, name: 'Кладовая', checked: false },
      { id: 15, name: 'Гостевой санузел', checked: false },
      { id: 16, name: 'Столовая', checked: false },
      { id: 17, name: 'Кинотеатр', checked: false },
    ],
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
      button={(
        <Button
          disabled={checkForDisabled()}
          onClick={() => getAnswer()}
        />
      )}
    >
      <div className={classes.answer}>
        {renderContent()}
      </div>
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    paddingLeft: '30px',
    paddingRight: '30px',
    flex: 1,
    [`@media ${mediaQueries.mobile}`]: {
      width: 'auto',
      paddingBottom: '120px',
    },
  },
  allCheckboxes: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  checkbox: {
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      height: '30px',
    },
    width: '33%',
  },
};

export default withStyles(styles)(Page31);
