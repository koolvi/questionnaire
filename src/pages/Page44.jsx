import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';
import MultilineInput from '../components/MultilineInput';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page44 = (props) => {
  const { classes, onClickNext, onClickBack } = props;
  const [answer, setAnswer] = useState({
    id: 44,
    question: 'Есть ли приоритеты в выборе фирм-поставщиков товаров и услуг - с точным указанием контактов? (техника, мебель, кухни, свет, сантехника, текстиль, обои и тд)',
    answer: '',
    comments: '',
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
      onClickBack={onClickBack}
    >
      <div className={classes.answer}>
        <RadioGroup
          value={answer.answer}
          onChange={e => setAnswer({ ...answer, answer: e.target.value })}
          answerVariants={[
            { id: 0, value: 'Да', label: 'Да' },
            { id: 1, value: 'Нет', label: 'Нет' },
          ]}
        />

        <div className={classes.comments}>
          <MultilineInput
            label="Комментарии"
            value={answer.comments}
            onChange={writingText => setAnswer({ ...answer, comments: writingText })}
          />
        </div>
      </div>
      <Button
        disabled={(answer.answer.length === 0)}
        onClick={() => onClickNext(answer)}
      />
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
  comments: {
    width: '100%',
  },
};

export default withStyles(styles)(Page44);
