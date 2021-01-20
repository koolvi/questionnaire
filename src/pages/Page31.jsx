import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page31 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 31,
    answer: [
      { id: 0, name: 'Нигде', checked: false },
      { id: 1, name: 'Столовая', checked: false },
      { id: 2, name: 'Кухня', checked: false },
      { id: 3, name: 'Везде', checked: false },
      { id: 4, name: 'Гостиная', checked: false },
      { id: 5, name: 'Гостевая', checked: false },
      { id: 6, name: 'Спальня', checked: false },
      { id: 7, name: 'Детская', checked: false },
      { id: 8, name: 'Игровая', checked: false },
      { id: 9, name: 'Кабинет', checked: false },
      { id: 10, name: 'Туалет', checked: false },
      { id: 11, name: 'Ванная комната', checked: false },
      { id: 12, name: 'Гардеробная', checked: false },
      { id: 13, name: 'Кладовая', checked: false },
      { id: 14, name: 'Серверная', checked: false },
      { id: 15, name: 'Терраса', checked: false },
      { id: 16, name: 'Балкон', checked: false },
      { id: 17, name: 'Холл', checked: false },
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
      questionText="Где необходимо сделать теплые полы?"
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

export default withStyles(styles)(Page31);
