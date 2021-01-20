import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SimplePaper from './components/SimplePaper';
import Footer from './components/Footer';
import mediaQueries from './mediaQueries';

// import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
// import Page3 from './pages/Page3';
// import Page4 from './pages/Page4';
// import Page5 from './pages/Page5';
// import Page6 from './pages/Page6';
// import Page7 from './pages/Page7';
// import Page8 from './pages/Page8';
// import Page9 from './pages/Page9';
// import Page10 from './pages/Page10';
// import Page11 from './pages/Page11';
// import Page12 from './pages/Page12';
// import Page13 from './pages/Page13';
// import Page14 from './pages/Page14';
// import Page15 from './pages/Page15';
// import Page16 from './pages/Page16';
// import Page17 from './pages/Page17';
// import Page20 from './pages/Page20';
import Page21 from './pages/Page21';
// import Page22 from './pages/Page22';
// import Page23 from './pages/Page23';
// import Page24 from './pages/Page24';
// import Page25 from './pages/Page25';
// import Page26 from './pages/Page26';
// import Page27 from './pages/Page27';
// import Page28 from './pages/Page28';
// import Page29 from './pages/Page29';
// import Page30 from './pages/Page30';
// import Page31 from './pages/Page31';
// import Page32 from './pages/Page32';
import Page33 from './pages/Page33';
import Page34 from './pages/Page34';
import Page35 from './pages/Page35';
import Page36 from './pages/Page36';
import Page37 from './pages/Page37';
import Page38 from './pages/Page38';
import Page39 from './pages/Page39';
import Page40 from './pages/Page40';
import Page41 from './pages/Page41';
import Page42 from './pages/Page42';
import Page43 from './pages/Page43';
import Page44 from './pages/Page44';
import Page45 from './pages/Page45';
import Page46 from './pages/Page46';
import Page47 from './pages/Page47';


const Main = (props) => {
  const { classes } = props;

  const [answersArr, setAnswersArr] = useState([]);
  const questionsArr = [
    // Page1,
    // Page2,
    // Page3,
    // Page4,
    // Page5,
    // Page6,
    // Page7,
    // Page8,
    // Page9,
    // Page10,
    // Page11,
    // Page12,
    // Page13,
    // Page14,
    // Page15,
    // Page16,
    // Page17,
    // Page18,
    // Page19,
    // Page20,
    Page21,
    // Page22,
    // Page23,
    // Page24,
    // Page25,
    // Page26,
    // Page27,
    // Page28,
    // Page29,
    // Page30,
    // Page31,
    // Page32,
    Page33,
    Page34,
    Page35,
    Page36,
    Page37,
    Page38,
    Page39,
    Page40,
    Page41,
    Page42,
    Page43,
    Page44,
    Page45,
    Page46,
    Page47,
  ];

  const isMobile = useMediaQuery(mediaQueries.mobile);

  const addAnswersToStateArr = (answer) => {
    global.console.log('answer=', answer);
    const newAnswersArr = answersArr.concat(answer);
    setAnswersArr(newAnswersArr);
  };

  const renderPage = () => {
    // global.console.log('questionsArr===', questionsArr);
    // global.console.log('answersArr.length===', answersArr.length);
    // global.console.log('answersArr===', answersArr);
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
    [`@media ${mediaQueries.mobile}`]: {
      background: 'white',
    },
  },
  main: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [`@media ${mediaQueries.mobile}`]: {
      // alignItems: 'none',
      justifyContent: 'flex-start',
      // flexDirection: 'column',
      // paddingLeft: '20px',
      // paddingTop: '30px',
      // paddingRight: '20px',
    },
  },
};

export default withStyles(styles)(Main);
