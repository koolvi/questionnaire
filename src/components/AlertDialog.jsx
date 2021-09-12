import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { CheckCircle, Cancel } from '@material-ui/icons';
import mediaQueries from '../mediaQueries';
import Button from './Button';


const AlertDialog = (props) => {
  const {
    classes,
    open,
    result,
    handleClose,
  } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <div className={classes.conteinerIcon}>
          {(result)
            ? (<CheckCircle style={{ width: 90, height: 90 }} color="primary" />)
            : (<Cancel style={{ width: 90, height: 90 }} color="secondary" />)
          }
        </div>

        <DialogContent>
          {(result)
            ? (
              <div className={classes.content}>
                <div className={classes.part1} style={{ color: '#3f51b5' }}>
                  Благодарю за ответы!
                </div>
                <div className={classes.part2} style={{ color: '#8c8c8c' }}>
                  Тест завершен
                </div>
              </div>
            )
            : (
              <div className={classes.content}>
                <div className={classes.part1} style={{ color: '#f50057' }}>
                  Ооой!
                </div>
                <div className={classes.part2} style={{ color: '#8c8c8c' }}>
                  Что-то пошло не так.. Попробуйте еще раз
                </div>
              </div>
            )
          }

          <div className={classes.button}>
            <Button
              text={(result) ? 'Закрыть' : 'Повторить'}
              color={(result) ? 'primary' : 'secondary'}
              onClick={() => handleClose()}
            />
          </div>

        </DialogContent>
      </Dialog>
    </div>
  );
};

const styles = {
  conteinerIcon: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40px',
    [`@media ${mediaQueries.mobile}`]: {
      marginTop: '30px',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
    [`@media ${mediaQueries.mobile}`]: {
      width: 'auto',
    },
  },
  part1: {
    fontWeight: 'bold',
    fontSize: '22px',
    [`@media ${mediaQueries.mobile}`]: {
      fontSize: '16px',
    },
  },
  part2: {
    marginTop: '20px',
    marginBottom: '10px',
    color: 'gray',
    textAlign: 'center',
    fontSize: '15px',
    [`@media ${mediaQueries.mobile}`]: {
      fontSize: '12px',
    },
  },
  button: {
    marginTop: '30px',
    marginBottom: '40px',
  },
};

export default withStyles(styles)(AlertDialog);
