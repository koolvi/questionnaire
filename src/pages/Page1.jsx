import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MultilineInput from '../components/MultilineInput';
import colors from '../style/colors';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';

const Page1 = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.guestion}>
        Тут написан какой-то приветствующий текст, который предлагает пройти тест
      </div>
      <div className={classes.answer}>
        <MultilineInput label="ФИО" />
        <MultilineInput label="Email" />
        <MultilineInput label="Контактный телефон" />
        <MultilineInput label="Адрес объекта" />
        <MultilineInput label="Площадь" />
        <div className={classes.containerSmallInput}>
          <MultilineInput label="Количество комнат" size="small" />
          <MultilineInput label="Этаж" size="small" />
        </div>
      </div>
      <Button />
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
    display: 'flex',
    flexDirection: 'column',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
      // paddingTop: '30px',
      // paddingRight: '30px',
    },
  },
  containerSmallInput: {
    display: 'flex',
    // justifyContent: 'space-between',
  },
};

export default withStyles(styles)(Page1);
