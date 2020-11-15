import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SimplePaper from './components/SimplePaper';
import Footer from './components/Footer';
import mediaQueries from './mediaQueries';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';


const Main = (props) => {
  const { classes } = props;

  const [answersArr, setAnswersArr] = useState([]);
  const questionsArr = [
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
  ];

  const isMobile = useMediaQuery(mediaQueries.mobile);

  const addAnswersToStateArr = (answer) => {
    global.console.log(answer);
    const newAnswersArr = answersArr.concat(answer);
    setAnswersArr(newAnswersArr);
  };

  const renderPage = () => {
    const Page = questionsArr[answersArr.length];
    return <Page onClickNext={answer => addAnswersToStateArr(answer)} />;
  };

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        {(isMobile)
          ? renderPage()
          : (
            <SimplePaper>
              {renderPage()}
            </SimplePaper>
          )
        }
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#f5f5f5',
  },
  main: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [`@media ${mediaQueries.mobile}`]: {
      alignItems: 'none',
      justifyContent: 'none',
      // flexDirection: 'column',
      // paddingLeft: '20px',
      // paddingTop: '30px',
      // paddingRight: '20px',
    },
  },
};

export default withStyles(styles)(Main);
