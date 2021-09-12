import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import CheckboxLabel from '../components/CheckboxLabel';
import Switch from '../components/Switch';


const Page26 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [activeSwitch, setSwitch] = useState(false);
  const [answer, setAnswer] = useState({
    id: 26,
    question: 'Укажите какие опции системы "Умный дом" планируются',
    answer: [
      { id: 0, name: 'Датчики движения', checked: false },
      { id: 1, name: 'Управление освещением', checked: false },
      { id: 2, name: 'Применение робота', checked: false },
      { id: 3, name: 'Дистанционное управление шторами', checked: false },
      { id: 4, name: 'Аудио мультирум', checked: false },
      { id: 5, name: 'Контроль проникновения на объект', checked: false },
      { id: 6, name: 'Притивопожарная защита', checked: false },
      { id: 7, name: 'Контроль протечки воды', checked: false },
      { id: 8, name: 'Контроль утечки газа', checked: false },
      { id: 9, name: 'Имитация присутствия на объекте', checked: false },
      { id: 10, name: 'Видео-наблюдение', checked: false },
      { id: 11, name: 'Экономия электроэнергии', checked: false },
      { id: 12, name: 'Смарт стекла', checked: false },
      { id: 13, name: 'Климат контроль (управление отоплением и кондиционированием)', checked: false },
    ],
    // comments: '',
  });

  const checkForDisabled = () => {
    const arrTrueItems = answer.answer.filter(item => item.checked === true);
    if ((arrTrueItems.length !== 0) || (activeSwitch === true)) return false;
    return true;
  };

  const handleChecked = (selectedId) => {
    const newAnswer = answer.answer.map((item) => {
      if (item.id === selectedId) return { id: item.id, name: item.name, checked: !item.checked };
      return item;
    });
    setAnswer({ ...answer, answer: newAnswer });
  };

  const getAnswer = () => {
    if (activeSwitch) {
      return onClickNext({ ...answer, answer: 'БЕЗ системы умный дом' });
    }
    const selectedItemsArr = answer.answer.filter(item => (item.checked));
    const answerArr = selectedItemsArr.map(item => item.name);
    return onClickNext({ ...answer, answer: answerArr });
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
              disabled={activeSwitch}
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
          disabled={checkForDisabled()}
          onClick={() => getAnswer()}
        />
      )}
    >
      <div className={classes.answer}>
        <div className={classes.containerSwitch}>
          <Switch
            label="Система умный дом не планируется"
            checked={activeSwitch}
            onChange={() => setSwitch(!activeSwitch)}
          />
        </div>
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
  containerSwitch: {
    [`@media ${mediaQueries.mobile}`]: {
      marginBottom: '30px',
    },
  },
  allCheckboxes: {
    display: 'grid',
    gridTemplateColumns: '300px 450px',
    gridTemplateRows: 'repeat(7, 35px)',
    [`@media ${mediaQueries.mobile}`]: {
      gridTemplateColumns: '100%',
      gridTemplateRows: 'repeat(14, 50px)',
      width: '100%',
    },
  },
};

export default withStyles(styles)(Page26);
