import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page30 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 30,
    question: 'Предпочтительное использование напольных материалов?',
    answer: [
      { id: 0, name: 'Наливной пол', checked: false },
      { id: 1, name: 'Керамическая плитка', checked: false },
      { id: 2, name: 'Мрамор', checked: false },
      { id: 3, name: 'Керамогранит', checked: false },
      { id: 4, name: 'Декоративная галька', checked: false },
      { id: 5, name: 'Мозаика', checked: false },
      { id: 6, name: 'Ковры', checked: false },
      { id: 7, name: 'Деревяная инженерная доска', checked: false },
      { id: 8, name: 'Ламинат', checked: false },
      { id: 9, name: 'Модульный паркет', checked: false },
      { id: 10, name: 'Массив', checked: false },
      { id: 11, name: 'Металлические плиты', checked: false },
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
      questionText={answer.question}
      onClickBack={onClickBack}
    >
      <div className={classes.answer}>
        {renderContent()}
      </div>
      <Button
        disabled={!(
          (answer.answer[0].checked === true)
          || (answer.answer[1].checked === true)
          || (answer.answer[2].checked === true)
          || (answer.answer[3].checked === true)
          || (answer.answer[4].checked === true)
          || (answer.answer[5].checked === true)
          || (answer.answer[6].checked === true)
          || (answer.answer[7].checked === true)
          || (answer.answer[8].checked === true)
          || (answer.answer[9].checked === true)
          || (answer.answer[10].checked === true)
          || (answer.answer[11].checked === true))}
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

export default withStyles(styles)(Page30);
