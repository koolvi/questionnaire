import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page29 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 29,
    answer: [
      { id: 0, name: 'Керамическая плитка', checked: false },
      { id: 1, name: 'Камень', checked: false },
      { id: 2, name: 'Мрамор', checked: false },
      { id: 3, name: 'Декоративные 3D панели', checked: false },
      { id: 4, name: 'Декоративные деревянные панели', checked: false },
      { id: 5, name: 'Декоративная покраска', checked: false },
      { id: 6, name: 'Декоративная штукатурка', checked: false },
      { id: 7, name: 'Зеркала', checked: false },
      { id: 8, name: 'Стекло', checked: false },
      { id: 9, name: 'Металл', checked: false },
      { id: 10, name: 'Обои', checked: false },
      { id: 11, name: 'Обои под покраску', checked: false },
      { id: 12, name: 'Мозаика', checked: false },
      { id: 13, name: 'Роспись стен', checked: false },
      { id: 14, name: 'Дерево', checked: false },
    ],
    comments: '',
  });

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
          <div className={classes.checkbox} key={item.id}>
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
      questionText="Предпочтительное использование настенных материалов?"
    >
      <div className={classes.answer}>
        {renderContent()}
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
};

export default withStyles(styles)(Page29);
