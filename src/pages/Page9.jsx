import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import colors from '../style/colors';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';
import Select from '../components/Select';
import mediaQueries from '../mediaQueries';


const Page9 = (props) => {
  const { classes, onClickNext } = props;
  const answer = {};

  return (
    <div className={classes.container}>
      <div className={classes.guestion}>
        9) Требуется ли замена окон?
      </div>
      <div className={classes.answer}>
        <RadioGroup
          answerVariants={[
            { id: 0, value: 'Да', label: 'Да' },
            { id: 1, value: 'Нет', label: 'Нет' },
          ]}
        />
        <Select label="Количество окон">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </div>
      <Button onClick={() => onClickNext(answer)} />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [`@media ${mediaQueries.mobile}`]: {
      height: 'auto',
      flex: 1,
      width: '100%',
      // paddingLeft: '10px',
      paddingTop: '30px',
      // paddingRight: '10px',
    },
  },
  guestion: {
    color: colors.PRIMARY,
    fontWeight: 600,
    paddingBottom: '20px',
    fontSize: '16px',
    [`@media ${mediaQueries.mobile}`]: {
      // fontSize: '14px',
      // width: '100%',
      // lineHeight: '10px',
      // wordSpacing: '3px',
      paddingLeft: '20px',
      // paddingTop: '30px',
      paddingRight: '20px',
    },
  },
  answer: {
    marginBottom: '50px',
    // display: 'flex',
    // flexDirection: 'column',
    // height: '140px',
    // background: 'red',
    // [`@media ${mediaQueries.mobile}`]: {
    //   width: '100%',
    //   flex: 1,
    //   // paddingTop: '30px',
    //   // paddingRight: '30px',
    // },
  },
};

export default withStyles(styles)(Page9);
