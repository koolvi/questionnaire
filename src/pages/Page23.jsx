import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page23 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 23,
    question: 'Какие сантехнические приборы планируются в санузлах?',
    answer: [
      { id: 0, name: 'Ванна', checked: false },
      { id: 1, name: 'Унитаз', checked: false },
      { id: 2, name: 'Биде', checked: false },
      { id: 3, name: 'Душевая кабина', checked: false },
      { id: 4, name: 'Встроенный душевой блок', checked: false },
      { id: 5, name: 'Стиральная машина', checked: false },
      { id: 6, name: 'Сушильная машина', checked: false },
      { id: 7, name: 'Система очистки воды', checked: false },
      { id: 8, name: 'Бойлер', checked: false },
      { id: 9, name: 'Сауна', checked: false },
    ],
    comments: '',
  });

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

  const renderContent = () => {
    return (
      <div className={classes.allCheckboxes}>
        {answer.answer.map(item => (
          <div key={item.id}>
            <CheckboxLabel
              checked={item.checked}
              label={item.name}
              onChange={() => handleChecked(item.id)}
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
    flex: 1,
    paddingLeft: '30px',
    paddingRight: '30px',
    [`@media ${mediaQueries.mobile}`]: {
      width: 'auto',
    },
  },
  allCheckboxes: {
    display: 'grid',
    gridTemplateColumns: '300px',
    gridTemplateRows: 'repeat(9, 33px)',
  },
};

export default withStyles(styles)(Page23);
