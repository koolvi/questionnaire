import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextFieldInput from '../components/TextFieldInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import Select from '../components/Select';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page2 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 2,
    address: '',
    square: '',
    floor: '',
    roomsCount: '',
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText="Напишите информацию об объекте"
    >
      <div className={classes.answer}>
        <TextFieldInput
          label="Адрес объекта"
          value={answer.address}
          onChange={writingText => setAnswer({ ...answer, address: writingText })}
        />
        <div className={classes.containerInputs}>
          <div className={classes.containerSquare}>
            <TextFieldInput
              label="Площадь"
              value={answer.square}
              onChange={writingText => setAnswer({ ...answer, square: writingText })}
              InputProps={{
                startAdornment: <InputAdornment position="start">Кв.м.</InputAdornment>,
              }}
            />
          </div>

          <div className={classes.containerFloor}>
            <TextFieldInput
              label="Этаж"
              value={answer.floor}
              onChange={writingText => setAnswer({ ...answer, floor: writingText })}
            />
          </div>
        </div>

        <Select
          label="Количество комнат"
          value={answer.roomsCount}
          onChange={e => setAnswer({ ...answer, roomsCount: e.target.value })}
        >
          <MenuItem value="Студия">Студия</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value="Более 5">Более 5</MenuItem>
        </Select>

      </div>
      <Button onClick={() => onClickNext(answer)} />
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
  containerInputs: {
    display: 'flex',
  },
  containerSquare: {
    flex: 1,
    marginRight: '10px',
  },
  containerFloor: {
    flex: 1,
    marginLeft: '10px',
  },
};

export default withStyles(styles)(Page2);
