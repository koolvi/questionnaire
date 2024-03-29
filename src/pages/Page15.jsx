import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MultilineInput from '../components/MultilineInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';


const Page15 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 15,
    question: 'Выберите орнамент, который стоит использовать в интерьере (который вам нравится), а так же можете написать свой вариант',
    answer: [
      { id: 0, type: 'Полоска', checked: false },
      { id: 1, type: 'Горох', checked: false },
      { id: 2, type: 'Клетка', checked: false },
      { id: 3, type: 'Цветы', checked: false },
      { id: 4, type: 'Вензель', checked: false },
      { id: 5, type: 'Восточные огурцы', checked: false },
    ],
    comments: '',
  });

  const handleTypeChecked = (typeId) => {
    const newAnswer = answer.answer.map((item) => {
      if (item.id === typeId) return { id: item.id, type: item.type, checked: !item.checked };
      return item;
    });
    setAnswer({ ...answer, answer: newAnswer });
  };

  const getTypesOnlyTrue = () => {
    const newAnswer = answer.answer.filter(item => (item.checked));
    return newAnswer.map(item => item.type);
  };

  const getAnswer = () => {
    const types = getTypesOnlyTrue();
    onClickNext({ ...answer, answer: types });
  };

  const renderContent = () => {
    return (
      <div className={classes.allCheckboxes}>
        {answer.answer.map(item => (
          <div key={item.id}>
            <CheckboxLabel
              checked={item.checked}
              label={item.type}
              onChange={() => handleTypeChecked(item.id)}
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
            || (answer.answer[5].checked === true))}
          onClick={() => getAnswer()}
        />
      )}
    >
      <div className={classes.answer}>
        {renderContent()}
        <div>
          <MultilineInput
            label="Комментарии"
            value={answer.comments}
            onChange={writingText => setAnswer({ ...answer, comments: writingText })}
          />
        </div>
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
    gridTemplateRows: 'repeat(6, 33px)',
  },
};

export default withStyles(styles)(Page15);
