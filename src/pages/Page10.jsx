import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '../components/Button';
import MultilineInput from '../components/MultilineInput';
import Counter from '../components/Counter';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
// import { Repeat } from '@material-ui/icons';


const Page10 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 10,
    question: 'Отметьте помещения какого назначения и в каком количестве должны быть в квартире/доме?',
    answer: [],
    comments: '',
  });
  const [column1, setColumn1] = useState({
    variantAnswer: [
      { id: 0, value: 0, name: 'Прихожая' },
      { id: 1, value: 0, name: 'Холл' },
      { id: 2, value: 0, name: 'Кухня' },
      { id: 3, value: 0, name: 'Столовая' },
      { id: 4, value: 0, name: 'Гостиная' },
      { id: 5, value: 0, name: 'Санузел общий' },
      { id: 6, value: 0, name: 'Санузел раздельный' },
      { id: 7, value: 0, name: 'Гостевой санузел' },
    ],
  });
  const [column2, setColumn2] = useState({
    variantAnswer: [
      { id: 8, value: 0, name: 'Постирочная' },
      { id: 9, value: 0, name: 'Гардеробная' },
      { id: 10, value: 0, name: 'Кладовая' },
      { id: 11, value: 0, name: 'Спальня' },
      { id: 12, value: 0, name: 'Детская' },
      { id: 13, value: 0, name: 'Игровая' },
      { id: 14, value: 0, name: 'Хоз.блок' },
      { id: 15, value: 0, name: 'Серверная' },
    ],
  });
  const [column3, setColumn3] = useState({
    variantAnswer: [
      { id: 16, value: 0, name: 'Кабинет' },
      { id: 17, value: 0, name: 'Терраса' },
      { id: 18, value: 0, name: 'Балкон' },
      { id: 19, value: 0, name: 'Кинотеатр' },
      { id: 20, value: 0, name: 'Холодильная комната' },
    ],
  });

  const handleValue = (variantAnswer, newValue, column, setColumn) => {
    const newAnswer = column.variantAnswer.map((item) => {
      if (item.id === variantAnswer.id) {
        return { id: item.id, value: newValue, name: item.name };
      }
      return item;
    });
    setColumn({ variantAnswer: newAnswer });
    // setAnswer({ ...answer, answer: newAnswer });
  };

  // получить список необходимых помещений (у которых кол-во НЕ ноль)
  const getListOfRequiredPremises = () => {
    global.console.log('aaaaaaaaaaaaaaaaaaaaa');
    const arr1 = column1.variantAnswer.filter(item => (item.value !== 0));
    const arr2 = column2.variantAnswer.filter(item => (item.value !== 0));
    const arr3 = column3.variantAnswer.filter(item => (item.value !== 0));
    const newAnswer = [...arr1, ...arr2, ...arr3];
    global.console.log('qqqqqqq', arr1, arr2, arr3, newAnswer);
    // массив, где элемент - это объект вида: {кухня: 2}
    const namesAndValuesArr = newAnswer.map(item => ({ [item.name]: item.value }));
    // массив, где перечеслены все помещения и их кол-во + комментарий
    // const namesAndValuesAndCommentArr = namesAndValuesArr.concat(answer.comments);
    onClickNext({ ...answer, answer: namesAndValuesArr });
  };

  // const checkEmptyAnswer = () => {
  //   const arrNoEmptyAnswers = answer.answer.filter((item) => {
  //     if (item.value !== 0) return true;
  //     return false;
  //   });

  //   if (arrNoEmptyAnswers.length === 0) return true;
  //   return false;
  // };

  const renderContent = () => {
    return (
      <div className={classes.allVariantsAnswers}>
        <div>
          {column1.variantAnswer.map(item => (
            <div className={classes.variantAnswer} key={item.id}>
              <Counter
                value={item.value}
                // textLeft={item.name}
                onClick={newValue => handleValue(item, newValue, column1, setColumn1)}
              />
              <Typography variant="body2">
                {item.name}
              </Typography>
            </div>
          ))}
        </div>

        <div>
          {column2.variantAnswer.map(item => (
            <div className={classes.variantAnswer} key={item.id}>
              <Counter
                value={item.value}
                onClick={newValue => handleValue(item, newValue, column2, setColumn2)}
              />
              <Typography variant="body2">
                {item.name}
              </Typography>
            </div>
          ))}
        </div>

        <div>
          {column3.variantAnswer.map(item => (
            <div className={classes.variantAnswer} key={item.id}>
              <Counter
                value={item.value}
                onClick={newValue => handleValue(item, newValue, column3, setColumn3)}
              />
              <Typography variant="body2">
                {item.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
      onClickBack={onClickBack}
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
      {/* <div className={classes.button}> */}
      <Button
        // disabled={checkEmptyAnswer()}
        onClick={() => getListOfRequiredPremises()}
      />
      {/* </div> */}
    </QuestionCardLayout>
  );
};

const styles = {
  conteinerAnswer: {
    width: '100%',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'flex-start',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
  answer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
    },
  },
  allVariantsAnswers: {
    display: 'grid',
    gridTemplateColumns: '250px 200px 250px',
    gridColumnGap: '40px',
    [`@media ${mediaQueries.mobile}`]: {
      // background: 'red',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
  },
  variantAnswer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  comments: {
    width: '100%',
  },
  // button: {
  //   [`@media ${mediaQueries.mobile}`]: {
  //     position: 'fixed',
  //     bottom: 70,
  //     display: 'flex',
  //     justifyContent: 'center',
  //     width: '100%',
  //   },
  // },
};

export default withStyles(styles)(Page10);
