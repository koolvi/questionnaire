import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page41 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 41,
    question: 'Какие тона в отделке предпочитаете?',
    answer: [
      { id: 0, name: 'Теплые', checked: false },
      { id: 1, name: 'Холодные', checked: false },
      { id: 2, name: 'Яркие', checked: false },
      { id: 3, name: 'Спокойные', checked: false },
      { id: 4, name: 'Пастельные', checked: false },
      { id: 5, name: 'Светлые', checked: false },
      { id: 6, name: 'Темные', checked: false },
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
          disabled={!(
            (answer.answer[0].checked === true)
            || (answer.answer[1].checked === true)
            || (answer.answer[2].checked === true)
            || (answer.answer[3].checked === true)
            || (answer.answer[4].checked === true)
            || (answer.answer[5].checked === true)
            || (answer.answer[6].checked === true))}
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
    [`@media ${mediaQueries.mobile}`]: {
      width: 'auto',
    },
  },
  allCheckboxes: {
    display: 'grid',
    gridTemplateColumns: '400px',
    gridTemplateRows: 'repeat(7, 33px)',
    [`@media ${mediaQueries.mobile}`]: {
      gridTemplateColumns: 'auto',
    },
  },
};

export default withStyles(styles)(Page41);
