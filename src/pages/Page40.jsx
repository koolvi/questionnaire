import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page40 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 40,
    question: 'Какое освещение предпочитаете?',
    answer: [
      { id: 0, name: 'Холодный свет', checked: false },
      { id: 1, name: 'Теплый свет', checked: false },
      { id: 2, name: 'Яркий', checked: false },
      { id: 3, name: 'Приглушенный', checked: false },
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
    >
      <div className={classes.answer}>
        {renderContent()}
      </div>
      <Button
        disabled={!(
          (answer.answer[0].checked === true)
          || (answer.answer[1].checked === true)
          || (answer.answer[2].checked === true)
          || (answer.answer[3].checked === true))}
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
    gridTemplateColumns: '400px',
    gridTemplateRows: 'repeat(4, 33px)',
  },
  checkbox: {
    [`@media ${mediaQueries.mobile}`]: {
      // width: '50%',
    },
    // width: '33%',
  },
};

export default withStyles(styles)(Page40);
