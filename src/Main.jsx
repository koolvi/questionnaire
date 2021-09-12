/* eslint-disable */
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as R from 'ramda';
import axios from 'axios';
import SimplePaper from './components/SimplePaper';
import Footer from './components/Footer';
import ProgressLinear from './components/ProgressLinear';
import mediaQueries from './mediaQueries';
import AlertDialog from './components/AlertDialog';


// import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
// import Page3 from './pages/Page3';
// import Page4 from './pages/Page4';
// import Page5 from './pages/Page5';
// import Page6 from './pages/Page6';
// import Page7 from './pages/Page7';
// import Page8 from './pages/Page8';
// import Page9 from './pages/Page9';
import Page10 from './pages/Page10';
// import Page11 from './pages/Page11';
// import Page12 from './pages/Page12';
// import Page13 from './pages/Page13';
// import Page14 from './pages/Page14';
// import Page15 from './pages/Page15';
// import Page16 from './pages/Page16';
// import Page17 from './pages/Page17';
// import Page18 from './pages/Page18';
// import Page19 from './pages/Page19';
// import Page20 from './pages/Page20';
// import Page21 from './pages/Page21';
// import Page22 from './pages/Page22';
// import Page23 from './pages/Page23';
// import Page24 from './pages/Page24';
import Page25 from './pages/Page25';
// import Page26 from './pages/Page26';
// import Page27 from './pages/Page27';
import Page28 from './pages/Page28';
import Page29 from './pages/Page29';
// import Page30 from './pages/Page30';
// import Page31 from './pages/Page31';
// import Page32 from './pages/Page32';
// import Page33 from './pages/Page33';
// import Page34 from './pages/Page34';
// import Page35 from './pages/Page35';
// import Page36 from './pages/Page36';
// import Page37 from './pages/Page37';
// import Page38 from './pages/Page38';
// import Page39 from './pages/Page39';
// import Page40 from './pages/Page40';
// import Page41 from './pages/Page41';
// import Page42 from './pages/Page42';
// import Page43 from './pages/Page43';
// import Page44 from './pages/Page44';
// import Page45 from './pages/Page45';
// import Page46 from './pages/Page46';
import Page47 from './pages/Page47';


const getInitialState = () => {
  const loadedStateStr = global.localStorage.getItem('answer');
  if (!loadedStateStr) return [];
  return JSON.parse(loadedStateStr);
};

const Main = (props) => {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const [resultFromServer, setResultFromServer] = React.useState(false);
  const [showBackdrop, setShowBackdrop] = React.useState(false);
  const [answersArr, setAnswersArr] = useState(getInitialState());
  // текущий номер вопроса - в массиве, поэтому первый вопрос имеет номер 0
  const [currentQuestionNumber, setCurrentQuestNumber] = useState(0);
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
    Page10,
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
    // Page21,
    // Page22,
    // Page23,
    // Page24,
    Page25,
    // Page26,
    // Page27,
    Page28,
    Page29,
    // Page30,
    // Page31,
    // Page32,
    // Page33,
    // Page34,
    // Page35,
    // Page36,
    // Page37,
    // Page38,
    // Page39,
    // Page40,
    // Page41,
    // Page42,
    // Page43,
    // Page44,
    // Page45,
    // Page46,
    Page47,
  ];

  const isMobile = useMediaQuery(mediaQueries.mobile);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const sendAnswerToServer = async (answers) => {
    try {
      setShowBackdrop(true);
      await axios.request({
        url: '/api/complete',
        method: 'post',
        data: answers,
      });

      handleClickOpen();
      setResultFromServer(true);
      global.localStorage.removeItem('answer');
    } catch (error) {
      handleClickOpen();
      setResultFromServer(false);
    } finally {
      setShowBackdrop(false);
    }
  };

  const addAnswersToStateArr = (answer) => {
    global.console.log('Ответ на вопрос=', answer, answersArr);
    if (answer.id > answersArr.length) {
      const newAnswersArr = answersArr.concat(answer);
      global.console.log('===', answer.id, answersArr.length, newAnswersArr);
      if (answer.id === 47) {
        sendAnswerToServer(newAnswersArr);
        return;
      }
      setAnswersArr(newAnswersArr);

      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // global.console.log('включи сохр в локал сторадж');
      const newAnswersArrInStr = JSON.stringify(newAnswersArr);
      global.localStorage.setItem('answer', newAnswersArrInStr);
    } else {
      const newAnswersArr = R.update((answer.id - 1), answer, answersArr);
      setAnswersArr(newAnswersArr);
    }
    setCurrentQuestNumber(prev => prev + 1);
    // const newAnswersArrInStr = JSON.stringify(newAnswersArr);
    // global.localStorage.setItem('answer', newAnswersArrInStr);
  };

  const renderPage = () => {
    // global.console.log('questionsArr===', questionsArr);
    // global.console.log('answersArr.length===', answersArr.length);
    global.console.log('Полный ответ===', answersArr);
    // const Page = questionsArr[answersArr.length];
    const Page = questionsArr[currentQuestionNumber];
    global.console.log('Page', Page)
    return (
      <Page
      // стэйт принимает PREV - предыдущее значение, по факту текущее
        onClickBack={(currentQuestionNumber === 0)
          ? undefined
          : () => setCurrentQuestNumber(prev => prev - 1)}
        onClickNext={(answer) => {
          // setCurrentQuestNumber(prev => prev + 1);
          addAnswersToStateArr(answer);
        }}
      />
    );
  };

  const handleClose = () => {
    setOpen(false);
    global.localStorage.removeItem('answer');
    setAnswersArr([]);
    
    setCurrentQuestNumber(0);
  };

  const handleRepeat = () => {
    setOpen(false);
    sendAnswerToServer(answersArr);
  };

  return (
    <div className={classes.container}>
      <Backdrop
        className={classes.backdrop}
        open={showBackdrop}
        onClick={() => setShowBackdrop(false)}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* {window.innerHeight} */}
      {/* {window.outerHeight} */}
      <div className={classes.main}>
        {(isMobile)
          ? null
          : (
            <div className={classes.progress}>
              <ProgressLinear
                currentValue={answersArr.length + 1}
                maxValue={47}
                minValue={1}
              />
            </div>
          )}
        {/* <div className={classes.progress}>
          <ProgressLinear
            currentValue={answersArr.length + 1}
            maxValue={47}
            minValue={1}
          />
        </div> */}
        {(isMobile)
          ? (
            <>
              <AlertDialog
                open={open}
                handleClose={(resultFromServer) ? handleClose : handleRepeat}
                result={resultFromServer}
              />
              {renderPage()}
            </>
            )
          : (
            <SimplePaper>
              <AlertDialog
                open={open}
                handleClose={(resultFromServer) ? handleClose : handleRepeat}
                result={resultFromServer}
              />
              {renderPage()}
            </SimplePaper>
          )
        }
      </div>
      <Footer>
        {(isMobile)
          ? (
            <div className={classes.progress}>
              <ProgressLinear
                currentValue={answersArr.length + 1}
                maxValue={47}
                minValue={1}
              />
            </div>
          )
          : null}
      </Footer>
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
      minHeight: '100%',
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
      height: 'auto',
      // flexDirection: 'column',
      // paddingLeft: '20px',
      // paddingTop: '30px',
      // paddingRight: '20px',
    },
  },
  progress: {
    width: '100%',
    position: 'fixed',
    top: 0,
    [`@media ${mediaQueries.mobile}`]: {
      bottom: 0,
      top: 'initial',
    },
  },

  backdrop: {
    zIndex: 15,
    color: '#fff',
  },
};

export default withStyles(styles)(Main);
