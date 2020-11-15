import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import colors from '../style/colors';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';
import mediaQueries from '../mediaQueries';


const Page7 = (props) => {
  const { classes, onClickNext } = props;
  const answer = {};

  return (
    <div className={classes.container}>
      <div className={classes.guestion}>
        7) Нужны ли изменения в планировке квартиры/дома?
      </div>
      <div className={classes.answer}>
        <RadioGroup
          answerVariants={[
            { id: 0, value: 'Да', label: 'Да' },
            { id: 1, value: 'Нет', label: 'Нет' },
          ]}
        />
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

export default withStyles(styles)(Page7);
