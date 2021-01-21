/* eslint-disable */
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import RadioGroup from '../components/RadioGroup';
import Button from '../components/Button';
import Counter from '../components/Counter';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';
import colors from '../style/colors';


const Page19 = (props) => {
  const { classes, onClickNext } = props;

  const [answer, setAnswer] = useState({
    field0: { quest: 'Объединять ли кухню с другим помещением?', answ: '' },
    field1: { quest: 'Какой тип кухни предпочтительнее?', answ: '' },
    field2: { quest: 'Барная стойка:', answ: '' },
    field3: { quest: 'Кухонный остров:', answ: '' },
    field4: { quest: 'Обеденный стол, рассчитанный на персон в количестве: ', answ: 0 },
  });


  return (
    <QuestionCardLayout
      questionNumber={19}
      questionText="Расположение кухни"
    >
      <div className={classes.conteinerAnswer}>
        <div className={classes.answer}>
{/* 0 */}
          <div className={classes.box}>
            <div className={classes.boxQuest}>
              <p>{answer.field0.quest}</p>
            </div>
            <div className={classes.boxAnswers}>
              <RadioGroup
                row
                value={answer.field0.answ}
                onChange={e => setAnswer({ ...answer, field0: { ...answer.field0, answ: e.target.value }})}
                answerVariants={[
                  { id: 0, value: 'Да', label: 'Да' },
                  { id: 1, value: 'Нет', label: 'Нет' },
                ]}
              />
            </div>
          </div>
{/* 1 */}
          <div className={classes.box}>
            <div className={classes.boxQuest}>
              <p>{answer.field1.quest}</p>
            </div>
            <div className={classes.boxAnswers}>
              <RadioGroup
                row
                value={answer.field1.answ}
                onChange={e => setAnswer({ ...answer, field1: { ...answer.field1, answ: e.target.value }})}
                answerVariants={[
                  { id: 0, value: 'Прямая', label: 'Прямая' },
                  { id: 1, value: 'Угловая', label: 'Угловая' },
                ]}
              />
            </div>
          </div>
{/* 2 */}
          <div className={classes.box}>
            <div className={classes.boxQuest}>
              <p>{answer.field2.quest}</p>
            </div>
            <div className={classes.boxAnswers}>
              <RadioGroup
                row
                value={answer.field2.answ}
                onChange={e => setAnswer({ ...answer, field2: { ...answer.field2, answ: e.target.value }})}
                answerVariants={[
                  { id: 0, value: 'Не требуется', label: 'Не требуется' },
                  { id: 1, value: 'Требуется', label: 'Требуется' },
                ]}
              />
            </div>
          </div>
{/* 3 */}
          <div className={classes.box}>
            <div className={classes.boxQuest}>
              <p>{answer.field3.quest}</p>
            </div>
            <div className={classes.boxAnswers}>
              <RadioGroup
                row
                value={answer.field3.answ}
                onChange={e => setAnswer({ ...answer, field3: { ...answer.field3, answ: e.target.value }})}
                answerVariants={[
                  { id: 0, value: 'Не требуется', label: 'Не требуется' },
                  { id: 1, value: 'Требуется', label: 'Требуется' },
                ]}
              />
            </div>
          </div>
{/* 4 */}
          <div className={classes.box}>
            <div className={classes.boxQuest}>
              <p>{answer.field4.quest}</p>
            </div>
            <div className={classes.boxAnswers}>
              <Counter
                value={answer.field4.answ}
                onClick={newValue => setAnswer({ ...answer, field4: { ...answer.field4, answ: newValue }})}
              />
            </div>
          </div>


        </div>
      </div>
      <Button onClick={() => onClickNext({ id: 19, answer: answer })} />
    </QuestionCardLayout>
  );
};

const styles = {
  conteinerAnswer: {
    width: '100%',
    marginBottom: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
  answer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  conteinerType: {
    display: 'flex',
    flexDirection: 'column',
  },


  box: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxQuest: {
    marginRight: '20px',
    color: colors.PRIMARY,
  },
  boxAnswers: {
    display: 'flex',
    flexDirection: 'row',
  },
};

export default withStyles(styles)(Page19);
