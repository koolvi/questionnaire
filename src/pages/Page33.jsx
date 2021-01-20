/* eslint-disable */
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '../components/RadioGroup';
import Button from '../components/Button';
import MultilineInput from '../components/MultilineInput';
import Counter from '../components/Counter';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page33 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 33,
    answer: [],
    comments: '',
    variantsAnswers: [
      { id: 0, value: 0, name: 'Встроенный конвектор в пол' },
      { id: 1, value: 0, name: 'Напольный конвектор' },
      { id: 2, value: 0, name: 'Настенный радиатор' },
    ],
  });

  const handleValue = (variantAnswer, newValue) => {
    const newAnswer = answer.variantsAnswers.map((item) => {
      if (item.id === variantAnswer.id) {
        return { id: item.id, value: newValue, name: item.name };
      }
      return item;
    });
    setAnswer({ ...answer, variantsAnswers: newAnswer });
  };

  // получить список необходимых помещений (у которых кол-во НЕ ноль)
  const getListOfRequiredPremises = () => {
    const newAnswer = answer.variantsAnswers.filter(item => (item.value !== 0));
    // массив, где элемент - это объект вида: {кухня: 2}
    const namesAndValuesArr = newAnswer.map(item => ({ [item.name]: item.value }));
    global.console.log('namesAndValuesArr=', namesAndValuesArr);
    const radioAnswerAndVariant = [answer.answer].concat(namesAndValuesArr);
    // массив, где перечеслены все помещения и их кол-во + комментарий
    // const namesAndValuesAndCommentArr = namesAndValuesArr.concat(answer.comments);
    onClickNext({ id: 33, answer: radioAnswerAndVariant, comments: answer.comments });
  };

  const getAnswer = () => {
    switch (answer.answer) {
      case 'Никакие': return onClickNext({ id: 33, answer: answer.answer, comments: answer.comments });
      case 'Демонтаж всех радиаторов': return onClickNext({ id: 33, answer: answer.answer, comments: answer.comments });
      case 'Замена всех радиаторов': return getListOfRequiredPremises();
      case 'Демонтаж некоторых и замена некоторых радиаторов': return getListOfRequiredPremises();
      default: return false;
    }
  };

  const renderVariantsAnswers = () => {
    return (
      <div className={classes.allVariantsAnswers}>
        {answer.variantsAnswers.map(item => (
          <div className={classes.variantAnswer} key={item.id}>
            <Typography variant="caption">
              {item.name}
            </Typography>
            <Counter
              value={item.value}
              // textLeft={item.name}
              onClick={newValue => handleValue(item, newValue)}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (answer.answer) {
      case 'Никакие': return false;
      case 'Демонтаж всех радиаторов': return false;
      case 'Замена всех радиаторов': return renderVariantsAnswers();
      case 'Демонтаж некоторых и замена некоторых радиаторов': return renderVariantsAnswers();
      default: return false;
    }
  };

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText="Какие работы необходимо выполнить с радиаторами?"
    >
      <div className={classes.conteinerAnswer}>
        <div className={classes.answer}>
          <RadioGroup
            value={answer.answer}
            onChange={e => setAnswer({ ...answer, answer: e.target.value })}
            answerVariants={[
              { id: 0, value: 'Никакие', label: 'Никакие' },
              { id: 1, value: 'Демонтаж всех радиаторов', label: 'Демонтаж всех радиаторов' },
              { id: 2, value: 'Замена всех радиаторов', label: 'Замена всех радиаторов' },
              { id: 3, value: 'Демонтаж некоторых и замена некоторых радиаторов', label: 'Демонтаж некоторых и замена некоторых радиаторов' },
            ]}
          />
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
      {/* <Button onClick={() => onClickNext({ id: 33, answer: answer.answer, comments: answer.comments })} /> */}
      <Button onClick={() => getAnswer()} />
    </QuestionCardLayout>
  );
};

const styles = {
  conteinerAnswer: {
    width: '100%',
    marginBottom: '50px',
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
  },
  allVariantsAnswers: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  variantAnswer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: '10px',
    [`@media ${mediaQueries.mobile}`]: {
      width: '60%',
    },
  },
  comments: {
    width: '100%',
  },
};

export default withStyles(styles)(Page33);
