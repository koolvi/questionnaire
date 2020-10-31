import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MultilineInput from '../components/MultilineInput';
import colors from '../style/colors';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';


const Page2 = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.guestion}>
        Напишите состав проживающих членов семьи, указав их пол и возраст
      </div>
      <div className={classes.answer}>
        <MultilineInput label="Ваш ответ" />
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
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
      // paddingTop: '30px',
      // paddingRight: '30px',
    },
  },
};

export default withStyles(styles)(Page2);
