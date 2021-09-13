import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '../components/Button';
import MultilineInput from '../components/MultilineInput';
import Counter from '../components/Counter';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page25 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 25,
    question: 'Укажите сколько кондиционеров Вы бы хотели разместить в следующих помещениях?',
    answer: [
      { id: 0, value: 0, name: 'Прихожая' },
      { id: 1, value: 0, name: 'Спальня' },
      { id: 2, value: 0, name: 'Терраса' },
      { id: 3, value: 0, name: 'Холл' },
      { id: 4, value: 0, name: 'Детская' },
      { id: 5, value: 0, name: 'Балкон' },
      { id: 6, value: 0, name: 'Кухня' },
      { id: 7, value: 0, name: 'Игровая' },
      { id: 8, value: 0, name: 'Кинотеатр' },
      { id: 9, value: 0, name: 'Столовая' },
      { id: 10, value: 0, name: 'Серверная' },
      { id: 11, value: 0, name: 'Холодильная комната' },
      { id: 12, value: 0, name: 'Гостиная' },
      { id: 13, value: 0, name: 'Кабинет' },
    ],
    comments: '',
  });

  const handleValue = (variantAnswer, newValue) => {
    const newAnswer = answer.answer.map((item) => {
      if (item.id === variantAnswer.id) {
        return { id: item.id, value: newValue, name: item.name };
      }
      return item;
    });
    setAnswer({ ...answer, answer: newAnswer });
  };

  const checkEmptyAnswer = () => {
    const arrNoEmptyAnswers = answer.answer.filter((item) => {
      if (item.value !== 0) return true;
      return false;
    });

    if (arrNoEmptyAnswers.length === 0) return true;
    return false;
  };

  // получить список необходимых помещений (у которых кол-во НЕ ноль)
  const getListOfRequiredPremises = () => {
    const newAnswer = answer.answer.filter(item => (item.value !== 0));
    // массив, где элемент - это объект вида: {кухня: 2}
    const namesAndValuesArr = newAnswer.map(item => ({ [item.name]: item.value }));
    // массив, где перечеслены все помещения и их кол-во + комментарий
    // const namesAndValuesAndCommentArr = namesAndValuesArr.concat(answer.comments);
    onClickNext({ ...answer, answer: namesAndValuesArr });
  };

  const renderContent = () => {
    return (
      <div className={classes.allVariantsAnswers}>
        {answer.answer.map(item => (
          <div className={classes.variantAnswer} key={item.id}>
            <Typography variant="body2">
              {item.name}
            </Typography>
            <Counter
              value={item.value}
              onClick={newValue => handleValue(item, newValue)}
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
          disabled={checkEmptyAnswer()}
          onClick={() => getListOfRequiredPremises()}
        />
      )}
    >
      <div className={classes.conteinerAnswer}>
        <div className={classes.answer}>
          {renderContent()}
          <div className={classes.comments}>
            <MultilineInput
              label="Комментарии"
              value={answer.comments}
              onChange={writingText => setAnswer({ ...answer, comments: writingText })}
            />
          </div>
        </div>
      </div>
    </QuestionCardLayout>
  );
};

const styles = {
  conteinerAnswer: {
    width: '100%',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 1,
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
  answer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingLeft: '30px',
    paddingRight: '30px',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      paddingBottom: '150px',
    },
  },
  allVariantsAnswers: {
    display: 'grid',
    gridTemplateColumns: '170px 170px 250px',
    gridColumnGap: '50px',
    [`@media ${mediaQueries.mobile}`]: {
      gridTemplateColumns: '100%',
      gridTemplateRows: 'repeat(14, 35px)',
      width: '100%',
    },
  },
  variantAnswer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  comments: {
    width: '100%',
  },
};

export default withStyles(styles)(Page25);
