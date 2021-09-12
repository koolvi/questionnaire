import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page29 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 29,
    question: 'Предпочтительное использование настенных материалов?',
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
      questionText={answer.question}
      onClickBack={onClickBack}
      button={(
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
            || (answer.answer[11].checked === true)
            || (answer.answer[12].checked === true)
            || (answer.answer[13].checked === true)
            || (answer.answer[14].checked === true))}
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
    [`@media ${mediaQueries.mobile}`]: {
      display: 'grid',
      gridTemplateColumns: '100%',
      gridTemplateRows: 'repeat(15, 30px)',
      width: '100%',
    },
  },
  checkbox: {
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
    },
    width: '33%',
  },
};

export default withStyles(styles)(Page29);
