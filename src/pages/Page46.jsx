import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';
import mediaQueries from '../mediaQueries';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page46 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 46,
    question: 'Есть ли у вас надежная строительная бригада, умеющая читать чертежи и выполнять сложные строительные работы, опыт работы с дорогостоящими материалами (черновые работы, инженер электрик, инженер сантехник, инженер по отопление и водоснабжению, инженер по вентиляции и кондиционированию, чистовые работы)?',
    answer: '',
  });

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
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
    justifyContent: 'flex-start',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
};

export default withStyles(styles)(Page46);
