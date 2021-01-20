// добавить проверку: если добавлен чел но цвет не выбран
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import MultilineInput from '../components/MultilineInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import Select from '../components/Select';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page13 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 13,
    answer: [
      {
        id: 0,
        name: 'Человек №1',
        color: '',
      },
    ],
    comments: '',
  });
  const [counter, setCounter] = useState(1);
  const [colors] = useState([
    { id: 0, color: 'белый' },
    { id: 1, color: 'желтый' },
    { id: 2, color: 'розовый' },
    { id: 3, color: 'красный' },
    { id: 4, color: 'бордовый' },
    { id: 5, color: 'оранжевый' },
    { id: 6, color: 'фиолетовый' },
    { id: 7, color: 'малиновый' },
    { id: 8, color: 'синий' },
    { id: 9, color: 'голубой' },
    { id: 10, color: 'мятный' },
    { id: 11, color: 'зеленый' },
    { id: 12, color: 'коричневый' },
    { id: 13, color: 'бежевый' },
    { id: 14, color: 'медный' },
    { id: 15, color: 'золотистый' },
    { id: 16, color: 'серебристый' },
    { id: 17, color: 'серый' },
    { id: 18, color: 'черный' },
  ]);

  const renderColors = () => {
    return colors.map(item => (
      <MenuItem key={item.id} value={item.color}>{item.color}</MenuItem>
    ));
  };

  const handleColorSelect = (people, colorSelectName) => {
    const newAnswer = answer.answer.map((item) => {
      // global.console.log('item=', item);
      if (item.id === people.id) return { id: item.id, name: item.name, color: colorSelectName };
      return item;
    });
    global.console.log('newAnswer=', newAnswer);
    setAnswer({ ...answer, answer: newAnswer });
  };

  const getAnswer = () => {
    // const correcAnswer = answer.answer.reduce(
    //   ((acc, item) => ({ ...acc, [item.name]: item.color })),
    //   {},
    // );
    const namesAndValues = answer.answer.map(item => ({ [item.name]: item.color }));
    onClickNext({ ...answer, answer: namesAndValues });
  };

  const deletePeople = (delPeopleId) => {
    const deletePeopleIndex = answer.answer.findIndex(item => item.id === delPeopleId);
    const newArr1 = answer.answer.slice(0, deletePeopleIndex);
    // global.console.log('newArr1=', newArr1);
    const newArr2 = answer.answer.slice(deletePeopleIndex + 1);
    // global.console.log('newArr2=', newArr2);
    const newArr = newArr1.concat(newArr2);
    // global.console.log('newArr=', newArr);
    setAnswer({ ...answer, answer: newArr });
  };

  const renderContent = () => {
    return (
      <div className={classes.containerContent}>
        {answer.answer.map(item => (
          <div className={classes.containerMini} key={item.id}>

            <Select
              label="Предпочитаемый цвет"
              helperText={item.name}
              value={item.color}
              className={classes.select}
              onChange={e => handleColorSelect(item, e.target.value)}
            >
              {renderColors()}
            </Select>

            <div onClick={() => deletePeople(item.id)}>
              <Delete color="secondary" />
            </div>

          </div>
        ))}
      </div>
    );
  };

  const addNewPeople = () => {
    const newAnswer = answer.answer.concat({
      id: counter,
      name: `Человек №${counter + 1}`,
      color: '',
    });
    setAnswer({ ...answer, answer: newAnswer });
    setCounter(counter + 1);
  };

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText="Цветовое предпочтение в интерьере у членов семьи?"
    >
      <div className={classes.answer}>
        {renderContent()}

        <div className={classes.buttonAddPeople}>
          <Button
            text="Добавить человека"
            variant="outlined"
            size="small"
            onClick={() => addNewPeople()}
          />
        </div>

        <div className={classes.comments}>
          <MultilineInput
            label="Комментарии"
            value={answer.comments}
            onChange={writingText => setAnswer({ ...answer, comments: writingText })}
          />
        </div>

      </div>
      <Button onClick={() => getAnswer()} />
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
  select: {
    flex: 1,
    marginRight: '20px',
  },
  containerContent: {},
  containerMini: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonAddPeople: {
    marginBottom: '10px',
    marginTop: '10px',
  },
  comments: {
    width: '100%',
  },
};

export default withStyles(styles)(Page13);
