import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SimplePaper from './components/SimplePaper';
import Footer from './components/Footer';
import Page1 from './pages/Page1';
import mediaQueries from './mediaQueries';


const Main = (props) => {
  const { classes } = props;

  const isMobile = useMediaQuery(mediaQueries.mobile);

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        {(isMobile)
          ? <Page1 />
          : (
            <SimplePaper>
              <Page1 />
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
